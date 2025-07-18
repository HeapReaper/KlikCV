import { InputProps } from "../../../types/inputs";

export default function Email({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="email" className="block font-medium text-gray-700">
        E-mailadres
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
