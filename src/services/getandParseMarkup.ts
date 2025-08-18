import { marked } from 'marked';
import DOMPurify from 'dompurify';
import frontMatter from 'front-matter';
import type { BlogType } from '../types/Blog';

export async function getAndParseMarkup(filePath: string): Promise<string> {
  const res = await fetch(`/content/${filePath}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch markdown: ${filePath}`);
  }

  const markdown = await res.text();
  return DOMPurify.sanitize(await marked.parse(markdown));
}

export default async function getAllBlogMarkdownFiles(): Promise<BlogType[]> {
  const modules = import.meta.glob(`../../blog/*.md`, { as: 'raw' });

  const files: BlogType[] = [];

  for (const path in modules) {
    const load = modules[path] as () => Promise<string>;
    const markdown = await load();

    const { attributes, body } = frontMatter<BlogType>(markdown);

    // @ts-ignore
    const html = DOMPurify.sanitize(marked.parse(body));

    if (!attributes.draft) {
      files.push({
        author: attributes.author,
        title: attributes.title,
        slug: attributes.slug,
        excerpt: attributes.excerpt,
        draft: false,
        date: attributes.date,
        html
      });
    }
  }

  return files;
}

