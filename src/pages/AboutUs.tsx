import { useState, useEffect } from 'preact/hooks';
import { getAndParseMarkup } from '../services/getandParseMarkup';

export default function AboutUs() {
  const [content, setContent] = useState('');

  // @ts-ignore
  useEffect( async () => {
    const html = await getAndParseMarkup('../content/about-us.md');
    setContent(html);
  }, []);

  return (
    <>
      <div className="pt-4 flex flex-col items-center mt-8">
        <div
          className="prose prose-neutral
         dark:prose-blockquote:bg-gray-900
         dark:prose-blockquote:text-white
         dark:prose-blockquote:rounded-md
         text-black max-w-4xl
         dark:prose-code:text-white
         prose-code:bg-gray-800 marker:text-black
         prose-h1:text-orange-500 prose-h2:text-orange-500
         prose-h3:text-orange-500 prose-strong:dark:text-white
         dark:text-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

    </>
  )
}
