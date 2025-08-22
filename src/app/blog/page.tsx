import getAllBlogMarkdownFiles from "@/app/utils/getandParseMarkup";
import AuthorAndDate from "@/app/components/posts/authorAndDate";
import type { BlogType } from "@/app/types/blog";

export default async function BlogPage() {
  // ⬅️ serverside ophalen, geen useState/useEffect nodig
  const articles: BlogType[] = await getAllBlogMarkdownFiles();

  return (
    <div className="mt-10 max-w-[800px] w-full mx-auto flex flex-col space-y-6 px-4">
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
    </div>
  );
}
