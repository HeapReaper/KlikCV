import type { InputType } from '../../types/Input';

export default function FontFamilySelect({ value, onChange }: InputType) {
  return (
    <div className="max-w-sm mx-auto">
      <label htmlFor="fontFamily" className="block font-medium text-gray-700 mb-2">
        Font
      </label>
      <select
        id="fontFamily"
        name="fontFamily"
        value={value}
        onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
        className="bg-white border border-solid border-orange-500 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 p-2.5"
      >
        <option value="font-sans" className="font-sans">
          Font Sans
        </option>
        <option value="font-serif" className="font-serif">
          Font Serif
        </option>
        <option value="font-mono" className="font-mono">
          Font Mono
        </option>
      </select>
    </div>
  );
}
