import DOMPurify from "isomorphic-dompurify";

export default function ShowParsed(html: { html: string ; }) {
  return (
    <div
      className="
          prose prose-neutral
          dark:prose-blockquote:bg-gray-900
          dark:prose-blockquote:text-white
          dark:prose-blockquote:rounded-md
          text-black max-w-4xl
          dark:prose-code:text-white
          prose-code:bg-gray-800 marker:text-black
          prose-h1:text-orange-500 prose-h2:text-orange-500
          prose-h3:text-orange-500 prose-strong:dark:text-white
          dark:text-white
          prose-a:text-white
        "
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html.html || ""),
      }}
    />
  )
}
