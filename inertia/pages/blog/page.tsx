import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";
import articles from "../../../content/blog/articles.json";

export default function BlogPage() {
  return (
    <>
      <Head title="Blog" />

      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3">
          <h1 className="text-4xl font-bold text-black">
            Blog
          </h1>

          <div className="space-y-6 mt-2">
            {articles.map(({ id, title, slug, excerpt, publishedAt }) => (
              <article key={id} className="border-b pb-4 border-orange-500">
                <h2 className="text-2xl font-semibold text-orange-500 underline cursor-pointer">
                  <a href={`/blog/${slug}`}>
                    {title}
                  </a>
                </h2>
                <time className="text-sm text-gray-500">{publishedAt}</time>
                <p className="mt-2 text-gray-700">{excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
