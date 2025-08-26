import fs from "fs";
import path from "path";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import frontMatter from "front-matter";
import type { BlogType } from "@/types/blog";

export async function getAndParse(filePath: string): Promise<string> {
  const absPath = path.join(process.cwd(), "src", "content", filePath);
  const markdown = fs.readFileSync(absPath, "utf-8");
  return DOMPurify.sanitize(await marked.parse(markdown));
}

export async function getAllBlogMarkdownFiles(): Promise<BlogType[]> {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const filenames = fs.readdirSync(blogDir);

  const files: BlogType[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith(".md")) continue;

    const filePath = path.join(blogDir, filename);
    const markdown = fs.readFileSync(filePath, "utf-8");

    const { attributes, body } = frontMatter<BlogType>(markdown);
    const html = DOMPurify.sanitize(await marked.parse(body));

    if (!attributes.draft) {
      files.push({
        author: attributes.author,
        title: attributes.title,
        slug: attributes.slug,
        excerpt: attributes.excerpt,
        draft: false,
        date: attributes.date,
        html,
      });
    }
  }

  return files;
}
