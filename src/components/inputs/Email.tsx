import type { InputType } from '../../types/Input';

export default function Email({ value, onChange }: InputType) {
  return (
    <div>
      <label htmlFor="email" className="block font-medium text-gray-700 dark:text-white">
        E-mailadres
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Je email adres"
        value={value}
        onInput={(e) => onChange((e.currentTarget as HTMLInputElement).value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
