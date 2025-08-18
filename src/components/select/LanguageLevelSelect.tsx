import type { InputType } from '../../types/Input';

export default function LanguageLevelSelect({ value, onChange }: InputType) {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label htmlFor="languageLevel" className="block font-medium text-gray-700 dark:text-white">
          Niveau
        </label>
        <select
          name="languageLevel[]"
          value={value}
          onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
          className="bg-white border border-solid border-orange-500 text-gray-700 dark:text-white dark:bg-gray-950 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        >
          <option selected>
            Selecteer een niveau...
          </option>
          <option value="A1">
            A1 (Beginner)
          </option>
          <option value="A2">
            A2 (Basis)
          </option>
          <option value="B1">
            B1 (Drempelniveau)
          </option>
          <option value="B2">
            B2 (Voldoende)
          </option>
          <option value="C1">
            C1 (Gevorderd)
          </option>
          <option value="C2">
            C2 (Beheersing)
          </option>
        </select>
      </form>
    </>
  );
}
