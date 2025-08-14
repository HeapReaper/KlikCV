import { marked } from 'marked';
import DOMPurify from 'dompurify';

export async function getAndParseMarkup(filePath: string): Promise<string> {
  const module = await import('../../content/' + filePath + '?raw');
  const markdown: string = module.default;

  const html = await marked.parse(markdown);

  return DOMPurify.sanitize(html);
}

export async function getAllBlogMarkdownFiles(): Promise<{ filename: string; html: string }[]> {
  const modules = import.meta.glob(`../../content/blog/*.md`, { as: 'raw' });

  const files: { filename: string; html: string }[] = [];

  for (const path in modules) {
    const load = modules[path] as () => Promise<string>;
    const markdown = await load();
    const html = DOMPurify.sanitize(marked.parse(markdown));

    const filename = path.split('/').pop()!.replace('.md', '');

    files.push({ filename, html });
  }

  return files;
}
