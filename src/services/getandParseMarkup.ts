import { marked } from 'marked';
import DOMPurify from 'dompurify';

export async function getAndParseMarkup(filePath: string): Promise<string> {
  const module = await import('../../content/' + filePath + '?raw');
  const markdown: string = module.default;

  const html = await marked.parse(markdown);

  return DOMPurify.sanitize(html);
}
