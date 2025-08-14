import { marked } from 'marked';
import DOMPurify from 'dompurify';
import frontMatter from 'front-matter';
import type { BlogProps } from '../types/Blog';

export async function getAndParseMarkup(filePath: string): Promise<string> {
  const module = await import('../../content/' + filePath + '?raw');
  const markdown: string = module.default;

  return DOMPurify.sanitize(await marked.parse(markdown));
}

export default async function getAllBlogMarkdownFiles(): Promise<BlogProps[]> {
  const modules = import.meta.glob(`../../content/blog/*.md`, { as: 'raw' });

  const files: BlogProps[] = [];

  for (const path in modules) {
    const load = modules[path] as () => Promise<string>;
    const markdown = await load();

    const { attributes, body } = frontMatter<{
      author: string;
      title: string;
      slug: string;
      excerpt: string;
      date: string;
      draft?: boolean;
    }>(markdown);

    // @ts-ignore
    const html = DOMPurify.sanitize(marked.parse(body));

    if (!attributes.draft) {
      files.push({
        author: attributes.author,
        title: attributes.title,
        slug: attributes.slug,
        excerpt: attributes.excerpt,
        date: attributes.date,
        html
      });
    }
  }

  return files;
}

