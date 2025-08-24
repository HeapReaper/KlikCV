import type { InputType } from '@/types/input';

export default function City({ value, onChange }: InputType) {
  return (
    <div>
      <label htmlFor="city" className="block font-medium text-gray-700 dark:text-white">
        Woonplaats
      </label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="Woonplaats"
        value={value}
        onInput={(e) => onChange((e.currentTarget as HTMLInputElement).value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
