import type { InputType } from '../../types/Input';

export default function YearSelect({ label, value, onChange }: InputType) {
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from({ length: 101 }, (_, i: number): number => currentYear - i);

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label htmlFor="yearSelect" className="block font-medium text-gray-700 dark:text-white">
          {label}
        </label>
        <select
          name="yearSelect"
          value={value}
          onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
          className="bg-white border border-solid border-orange-500 text-gray-700 dark:text-white dark:bg-gray-950 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        >
          <option selected>
            Jaar
          </option>
          <option value="Huidig">
            Heden
          </option>
          {years.map((year: number) => (
            <option value={year}>{year}</option>
          ))}
        </select>
      </form>
    </>
  );
}
