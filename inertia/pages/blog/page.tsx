import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";


const blogArticles = [
  {
    id: 1,
    title: "First Blog Article",
    excerpt: "This is a short summary of the first article.",
    publishedAt: "2025-07-01",
  },
  {
    id: 2,
    title: "Second Blog Article",
    excerpt: "An overview of the second blog post content.",
    publishedAt: "2025-07-05",
  },
  {
    id: 3,
    title: "Third Blog Article",
    excerpt: "Highlights and key points from the third article.",
    publishedAt: "2025-07-07",
  },
];

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
            {blogArticles.map(({ id, title, excerpt, publishedAt }) => (
              <article key={id} className="border-b pb-4">
                <h2 className="text-2xl font-semibold text-orange-500 underline cursor-pointer">
                  {title}
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
