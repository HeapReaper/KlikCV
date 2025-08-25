import type { EditorType } from '@/types/input';
import RichTextEditor from '@/components/editors/editorMin';

export default function AboutMeDescription({ value, onChange }: EditorType) {
  return (
    <div>
      <label
        htmlFor="aboutMeDescription"
        className="block font-medium text-gray-700 dark:text-white mb-1"
      >
        Over mij
      </label>
      <RichTextEditor
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
