import { useState, useEffect } from 'preact/hooks';
import { getAndParseMarkup } from '../services/getandParseMarkup';

export default function Privacy() {
  const [content, setContent] = useState('');

  // @ts-ignore
  useEffect( async () => {
      const html = await getAndParseMarkup('../content/privacy.md');
      setContent(html);
  }, []);

  return (
    <>
      <div className="pt-4 flex items-center flex-col mt-8">
        <div
          className="prose prose-neutral text-black max-w-4xl marker:text-black prose-h1:text-orange-500 prose-h2:text-orange-500 prose-h3:text-orange-500 prose-strong:dark:text-white dark:text-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}
