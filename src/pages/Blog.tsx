import { useState, useEffect } from 'preact/hooks';
import getAllBlogMarkdownFiles from '../services/getandParseMarkup';
import AuthorAndDate from '../components/posts/AuthorAndDate.tsx';
import type { BlogType } from '../types/Blog';

export default function Blog() {
  const [articles, setArticles] = useState<BlogType[]>([]);

  useEffect(() => {
    (async () => {
      setArticles(await getAllBlogMarkdownFiles());
    })();
  }, []);

  return (
    <div className="mt-10 w-[800px] mx-auto flex flex-col space-y-6">
      {articles.map(({ author, title, slug, excerpt, date }: BlogType) => (
        <article key={slug} className="border-2 p-2 rounded-xl pb-4 border-orange-500 w-full">
          <h2 className="text-2xl font-semibold text-orange-500 underline cursor-pointer">
            <a href={`/blog/${slug}`}>{title}</a>
          </h2>
          <AuthorAndDate author={author} date={date} />
          <p className="mt-2 text-gray-700 dark:text-white">{excerpt}</p>
        </article>
      ))}
    </div>
  );
}
