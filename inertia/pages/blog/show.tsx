import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";
import AuthorAndDate from "~/components/postAuthorAndDate";

interface Props {
  html: string;
  article: {
    title: string;
    author: string;
    slug: string;
    date: string;
    excerpt: string;
  };
}

export default function BlogShowPage({ html, article }: Props) {
  return (
    <>
      <Head title={article.title} />
      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3 max-w-3xl mx-auto">

          <h1 className="text-4xl font-bold mb-2">
            {article.title}
          </h1>

          <AuthorAndDate author={article.author} date={article.date} />

          <div
            className="prose prose-neutral text-black max-w-none marker:text-black"
            // @ts-ignore
            dangerouslySetInnerHTML={{ __html: html.html }}
          />
        </div>
      </DefaultLayout>
    </>
  );
}
