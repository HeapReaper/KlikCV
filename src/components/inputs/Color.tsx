import type { InputType } from '../../types/Input';

export default function ColorPicker({ value, onChange }: InputType) {
  return (
    <>
      <label htmlFor="colorPicker" className="block font-medium text-gray-700">
        Primary kleur
      </label>
      <input
        type="color"
        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-orange-600 dark:border-orange-600"
        id="colorPicker"
        name="colorPicker"
        value={value}
        onInput={(e) => onChange((e.currentTarget as HTMLInputElement).value)}
        title="Kies je kleur..."
      />
    </>
  )
}
