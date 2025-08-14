import { useState, useEffect } from 'preact/hooks';
import getAllBlogMarkdownFiles from '../services/getandParseMarkup';
import type { BlogType, BlogSlugType } from '../types/Blog';


export default function BlogShow({ slug }: BlogSlugType) {
  const [article, setArticle] = useState<BlogType | null>(null);

  useEffect(() => {
    (async () => {
      const allArticles: BlogType[] = await getAllBlogMarkdownFiles();
      const foundArticle = allArticles.find(a => a.slug === slug) || null;
      setArticle(foundArticle);
    })();
  }, [slug]);

  if (!article) return;

  return (
    <div className="pt-4 flex flex-col mt-8">
      <div
        className="prose prose-neutral text-black max-w-none marker:text-black"
        dangerouslySetInnerHTML={{ __html: article.html ? article.html : '' }}
      />
    </div>
  );
}
