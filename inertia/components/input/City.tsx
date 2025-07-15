import { DateInputProps } from "../../../types/inputs";

export default function City({ value, onChange }: DateInputProps) {
  return (
    <div>
      <label htmlFor="city" className="block font-medium text-gray-700">
        Woonplaats
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  )
}
