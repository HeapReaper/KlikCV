import { DateInputProps } from "../../../types/inputs";

export default function Birthdate({ value, onChange }: DateInputProps) {
  return (
    <div>
      <label htmlFor="birthdate" className="block font-medium text-gray-700">
        Geboortedatum
      </label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  )
}
