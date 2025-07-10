import matter from "gray-matter";
import { marked } from "marked";
import fs from "fs";

export interface ParsedMarkdown {
  metadata: any;
  html: string;
}

export function parseMarkdownFile(filePath: string): ParsedMarkdown {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const html = marked(content);

  return <ParsedMarkdown>{
    metadata: data,
    html,
  };
}
