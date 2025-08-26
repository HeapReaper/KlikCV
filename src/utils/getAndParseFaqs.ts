import fs from "fs";
import path from "path";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import frontMatter from "front-matter";
import type { FaqType } from "@/types/faq";

export default async function getAndParseFaqs(): Promise<FaqType[]> {
  const faqDir = path.join(process.cwd(), "src", "content", "faq");
  const filenames = fs.readdirSync(faqDir);

  const files: FaqType[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith(".md")) continue;

    const filePath = path.join(faqDir, filename);
    const markdown = fs.readFileSync(filePath, "utf-8");

    const { attributes, body } = frontMatter<FaqType>(markdown);

    // @ts-ignore
    const content = DOMPurify.sanitize(marked.parse(body));

    if (!attributes.draft) {
      files.push({
        author: attributes.author,
        title: attributes.title,
        draft: false,
        date: attributes.date,
        content,
      });
    }
  }

  return files;
}
