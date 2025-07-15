import { InputProps } from "../../../types/inputs";

export default function Phone({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="phone" className="block font-medium text-gray-700">
        Telefoon
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={value}
        pattern="^(\+31|0)[1-9][0-9]{8}$"
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
