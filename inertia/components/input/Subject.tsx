import { InputProps } from "../../../types/inputs";

export default function Subject({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="subject" className="block font-medium text-gray-700">
        Onderwerp
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
