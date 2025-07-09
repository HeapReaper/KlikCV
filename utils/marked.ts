import { marked } from "marked";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

export async function loadMd(file: string): Promise<any> {
  const filePath = path.join(dirname(__filename), "..", "content", file);

  return marked.parse(await readFile(filePath, "utf-8"));
}
