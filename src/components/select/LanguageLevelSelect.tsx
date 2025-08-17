import type { InputType } from '../../types/Input';

export default function LanguageLevelSelect({ value, onChange }: InputType) {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label htmlFor="languageLevel" className="block font-medium text-gray-700">
          Niveau
        </label>
        <select
          name="languageLevel[]"
          value={value}
          onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
          className="bg-white border border-solid border-orange-500 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        >
          <option selected>
            Selecteer een niveau...
          </option>
          <option value="Moedertaal">
            Moedertaal
          </option>
          <option value="Vloeiend">
            Vloeiend
          </option>
          <option value="Redelijk">
            Redelijk
          </option>
          <option value="Basis">
            Basis
          </option>
        </select>
      </form>
    </>
  );
}
