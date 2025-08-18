import type { InputType } from '../../types/Input';

export default function SkillLevelSelect({ value, onChange }: InputType) {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label htmlFor="skillLevel" className="block font-medium text-gray-700 dark:text-white">
          Niveau
        </label>
        <select
          name="skillLevel"
          value={value}
          onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
          className="bg-white border border-solid border-orange-500 text-gray-700 dark:text-white dark:bg-gray-950 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        >
          <option selected>
            Selecteer
          </option>
          <option value="Beginner">
            Beginner
          </option>
          <option value="Gemiddeld">
            Gemiddeld
          </option>
          <option value="Gevorderd">
            Gevorderd
          </option>
          <option value="Expert">
            Expert
          </option>
        </select>
      </form>
    </>
  );
}
