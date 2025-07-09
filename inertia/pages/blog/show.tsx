import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";

interface Props {
  html: string;
  article: {
    title: string;
    author: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
  };
}

export default function BlogShowPage({ html, article }: Props) {
  return (
    <>
      <Head title={article.title} />
      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <p>{article.author}</p>
            <time>{article.publishedAt}</time>
          </div>
          <div
            className="prose prose-neutral text-black max-w-none marker:text-black"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </DefaultLayout>
    </>
  );
}
