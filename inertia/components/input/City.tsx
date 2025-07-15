import { InputProps } from "../../../types/inputs";

export default function City({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="city" className="block font-medium text-gray-700">
        Woonplaats
      </label>
      <textarea
        id="city"
        name="city"
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
