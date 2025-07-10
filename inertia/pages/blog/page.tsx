import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";
import AuthorAndDate from "~/components/postAuthorAndDate";

export default function BlogPage({ articles }: { articles: any[]}) {
  return (
    <>
      <Head title="Blog" />

      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3">
          <h1 className="text-4xl font-bold text-black">
            Blog
          </h1>

          <div className="space-y-6 mt-2">
            {articles.map(({ author, title, slug, excerpt, date }) => (
              <article key={slug} className="border border-2 p-2 rounded-xl pb-4 border-orange-500">
                <h2 className="text-2xl font-semibold text-orange-500 underline cursor-pointer">
                  <a href={`/blog/${slug}`}>
                    {title}
                  </a>
                </h2>
                <AuthorAndDate author={author} date={date} />
                <p className="mt-2 text-gray-700">{excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
