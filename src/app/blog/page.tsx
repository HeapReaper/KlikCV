import { getAllBlogMarkdownFiles } from "@/utils/getandParseMarkup";
import AuthorAndDate from "@/components/posts/authorAndDate";
import type { BlogType } from "@/types/blog";

export default async function BlogPage() {
  // ⬅️ serverside ophalen, geen useState/useEffect nodig
  const articles: BlogType[] = await getAllBlogMarkdownFiles();

  return (
    <>
      {articles.map(({ author, title, slug, excerpt, date }) => (
        <article
          key={slug}
          className="border-2 p-2 rounded-xl pb-4 border-orange-500 w-full"
        >
          <h2 className="text-2xl font-semibold text-orange-500 hover:text-orange-600 underline cursor-pointer">
            <a href={`/blog/${slug}`}>{title}</a>
          </h2>
          <AuthorAndDate author={author} date={date} />
          <p className="mt-2 text-gray-700 dark:text-white">{excerpt}</p>
        </article>
      ))}
    </>
  );
}
