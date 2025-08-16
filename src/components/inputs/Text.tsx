import type { InputType } from '../../types/Input';

export default function TextInput({ id, label, placeholder, value, onChange }: InputType) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder || ''}
        value={value}
        onInput={(e) => onChange((e.currentTarget as HTMLInputElement).value)}
        className=" w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
