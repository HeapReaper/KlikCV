import type { InputType } from '../../types/Input';

export default function LanguageSelect({ value, onChange }: InputType) {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label htmlFor="language" className="block font-medium text-gray-700 dark:text-white">
          Taal
        </label>
        <select
          name="language[]"
          value={value}
          onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
          className="bg-white border border-solid border-orange-500 text-gray-700 dark:text-white dark:bg-gray-950 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        >
          <option selected>
            Kies een taal..
          </option>
          <option value="Nederlands">
            Nederlands
          </option>
          <option value="Duits">
            Duits
          </option>
          <option value="Engels">
            Engels
          </option>
          <option value="Frans">
            Frans
          </option>
        </select>
      </form>
    </>
  );
}
