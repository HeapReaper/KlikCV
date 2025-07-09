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
            {articles.map(({ id, author, title, slug, excerpt, publishedAt }) => (
              <article key={id} className="border border-2 p-2 rounded-xl pb-4 border-orange-500">
                <h2 className="text-2xl font-semibold text-orange-500 underline cursor-pointer">
                  <a href={`/blog/${slug}`}>
                    {title}
                  </a>
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 mt-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="size-6 fill-orange-500">
                      <path fill-rule="evenodd"  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"/>
                    </svg>
                    <p>
                      {author}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-orange-500">
                      <path fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                            clip-rule="evenodd"/>
                    </svg>
                    <time>
                      {publishedAt}
                    </time>
                  </div>

                </div>
                <p className="mt-2 text-gray-700">{excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
