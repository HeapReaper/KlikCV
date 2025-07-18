import { InputProps } from "../../../types/inputs";

export default function Title({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="title" className="block font-medium text-gray-700">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
