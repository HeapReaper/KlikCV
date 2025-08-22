import { getAllBlogMarkdownFiles } from "@/app/utils/getandParseMarkup";
import type { BlogType } from "@/app/types/blog";
import ShowParsed from "@/app/components/core/showParsed";

interface BlogPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles: BlogType[] = await getAllBlogMarkdownFiles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogShowPage({ params }: BlogPageProps) {
  const { slug } = params;

  const allArticles: BlogType[] = await getAllBlogMarkdownFiles();
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return <p>Blog post niet gevonden.</p>;
  }
  return (
    <div className="pt-4 flex flex-col items-center mt-8">
      <ShowParsed html={article.html || ''} />
    </div>
  );
}
