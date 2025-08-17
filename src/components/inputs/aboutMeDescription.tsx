import type { EditorType } from '../../types/Input';
import RichTextEditor from '../../components/editors/EditorMin.tsx';

export default function AboutMeDescription({ value, onChange }: EditorType) {
  return (
    <div>
      <label
        htmlFor="aboutMeDescription"
        className="block font-medium text-gray-700 mb-1"
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
