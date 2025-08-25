'use client';

import { useRef, useEffect } from 'react';
import { init } from 'pell';
import 'pell/dist/pell.min.css';

interface RichTextEditorProps {
  value: string;
  onChange?: (html: string) => void;
  actions?: string[];
  className?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  actions = ['bold', 'italic', 'underline', 'link', 'strikethrough'],
  className = '',
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!editorRef.current || initialized.current) return;
    initialized.current = true;

    const editor = init({
      element: editorRef.current,
      onChange: (html: string) => onChange?.(html),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      actions,
    });

    editor.content.innerHTML = value;

    // Tailwind / classes toevoegen
    editor.content.classList.add(
      'max-h-[150px]',
      'p-2',
      'border',
      'border-orange-500',
      'rounded-md',
      'dark:text-white'
    );

    editorRef.current.querySelector('.pell-actionbar')?.classList.add(
      'dark:bg-gray-800',
      'border-b',
      'border-orange-500'
    );

    editorRef.current.querySelectorAll('.pell-button').forEach(btn =>
      btn.classList.add('dark:text-white', 'hover:bg-orange-500', 'hover:text-black')
    );

    return () => {
      // Reset content bij unmount
      editor.content.innerHTML = value;
    };
  }, [actions, onChange, value]);

  return (
    <>
      <div ref={editorRef} className={className} />
      <style>
        {`
          /* Override Pell editor styles */
          .pell-content { background-color: f0f0f0; }
          .pell-actionbar { background-color: #f0f0f0; }
          .pell-button { color: black; }

          /* Dark mode overrides */
          html.dark .pell-content { background-color: #1a1a1a; color: black; }
          html.dark .pell-actionbar { background-color: #2a2a2a; border-bottom: 1px solid #f97316; }
          html.dark .pell-button { color: white; }
          html.dark .pell-button:hover { background-color: #f97316; color: black; }
        `}
      </style>
    </>
  );
}
