import { useRef, useEffect } from 'preact/hooks';
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
  actions = [
    'bold',
    'italic',
    'underline',
    'link',
    'strikethrough',
  ],
  className = '',
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!editorRef.current || initialized.current) return;
    initialized.current = true;

    // @ts-ignore
    const editor = init({
      element: editorRef.current,
      onChange: (html: string) => onChange?.(html),
      // @ts-ignore
      actions,
    });

    editor.content.innerHTML = value;

    editor.content.classList.add(
      'max-h-[150px]',
      'p-2',
      'border',
      'border-orange-500',
      'rounded-md'
    );

    return () => {
      editor.content.innerHTML = value;
    };
  }, [actions, onChange, value]);

  return (
    <div ref={editorRef} className={className} />
  );
}
