import getAllBlogMarkdownFiles from "@/app/utils/getandParseMarkup";
import type { BlogType } from "@/app/types/blog";
import DOMPurify from "isomorphic-dompurify";

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogShowPage({ params }: BlogPageProps) {
  const slug = params.slug;

  const allArticles: BlogType[] = await getAllBlogMarkdownFiles();
  const article = allArticles.find(a => a.slug === slug);

  if (!article) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="pt-4 flex flex-col items-center mt-8">
      <div
        className="
          prose prose-neutral
          dark:prose-blockquote:bg-gray-900
          dark:prose-blockquote:text-white
          dark:prose-blockquote:rounded-md
          text-black max-w-4xl
          dark:prose-code:text-white
          prose-code:bg-gray-800 marker:text-black
          prose-h1:text-orange-500 prose-h2:text-orange-500
          prose-h3:text-orange-500 prose-strong:dark:text-white
          dark:text-white
        "
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.html || "")
        }}
      />
    </div>
  );
}
