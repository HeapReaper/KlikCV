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
      <div className="pt-4 flex flex-col mt-8">
        <div
          className="prose prose-neutral text-black max-w-none marker:text-black"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}
