import { useState, useEffect } from 'preact/hooks';
import {  marked } from 'marked';
import DOMPurify from 'dompurify';
import aboutMarkdown from '../../content/about-us.md?raw';

export default function AboutUs() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const html = marked.parse(aboutMarkdown);
    console.log(html);
    setContent(DOMPurify.sanitize(html));
  }, []);

  return (
    <>
      <div className="pt-4 flex flex-col mt-8 p-3">
        <div
          className="prose prose-neutral text-black max-w-none marker:text-black"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}
