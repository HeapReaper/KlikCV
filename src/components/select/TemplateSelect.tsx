import type { InputType } from '../../types/Input';
import { getTemplates } from '../../utils/getTemplates';

export default function TemplateSelect({ value, onChange }: InputType) {
  const templateNames = getTemplates(true);

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label htmlFor="template" className="block font-medium text-gray-700 dark:text-white">
          Sjabloon
        </label>
        <select
          name="template"
          value={value}
          onChange={(e) => onChange((e.currentTarget as unknown as HTMLInputElement).value)}
          className="bg-white border border-solid border-orange-500 text-gray-700 dark:text-white dark:bg-gray-950 text-sm rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
        >
          {Object.keys(templateNames).map((key: string) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
