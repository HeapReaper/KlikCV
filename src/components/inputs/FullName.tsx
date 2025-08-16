import type { InputType } from '../../types/Input';

export default function FullName({ value, onChange }: InputType) {
  return (
    <div>
      <label htmlFor="fullName" className="block font-medium text-gray-700">
        Volledige naam
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Volledige naam"
        value={value}
        onInput={(e) => onChange((e.currentTarget as HTMLInputElement).value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
