import type { InputType } from '@/types/input';

export default function MonthSelect({ label, value, onChange }: InputType) {
  return (
    <>
      <label htmlFor="monthSelect" className="block font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <select
        name="monthSelect"
        value={value}
        onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
        className="bg-white border border-solid border-orange-500 text-gray-700 dark:text-white dark:bg-gray-950 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
      >
        <option>
          Maand
        </option>
        <option value="Heden">
          Heden
        </option>
        <option value="Januari">
          Januari
        </option>
        <option value="Februari">
          Februari
        </option>
        <option value="Maart">
          Maart
        </option>
        <option value="April">
          April
        </option>
        <option value="Mei">
          Mei
        </option>
        <option value="Juni">
          Juni
        </option>
        <option value="Juli">
          Juli
        </option>
        <option value="Augustus">
          Augustus
        </option>
        <option value="September">
          September
        </option>
        <option value="Oktober">
          Oktober
        </option>
        <option value="November">
          November
        </option>
        <option value="December">
          December
        </option>
      </select>
    </>
  );
}
