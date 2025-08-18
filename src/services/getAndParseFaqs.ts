import { marked } from 'marked';
import DOMPurify from 'dompurify';
import frontMatter from 'front-matter';
import type { FaqType } from '../types/Faq';

export default async function getAndParseFaqs(): Promise<FaqType[]> {
  const modules = import.meta.glob(`../../faq/*.md`, { as: 'raw' });

  const files: FaqType[] = [];

  for (const path in modules) {
    const load = modules[path] as () => Promise<string>;
    const markdown = await load();

    const { attributes, body } = frontMatter<FaqType>(markdown);

    // @ts-ignore
    const content = DOMPurify.sanitize(marked.parse(body));

    if (!attributes.draft) {
      files.push({
        author: attributes.author,
        title: attributes.title,
        draft: false,
        date: attributes.date,
        content
      });
    }
  }

  return files;
}

