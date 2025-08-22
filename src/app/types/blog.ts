export type BlogType = {
  author: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  draft: boolean;
  html?: string;
};

export type BlogSlugType = {
  slug: string;
}
