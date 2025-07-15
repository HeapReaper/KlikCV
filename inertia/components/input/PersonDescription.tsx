import { InputProps } from "../../../types/inputs";

export default function PersonDescription({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="personDescription" className="block font-medium text-gray-700">
        Beschrijving
      </label>
      <textarea
        id="personDescription"
        name="personDescription"
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
