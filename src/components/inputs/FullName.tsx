type InputProps = {
  value: string;
  onChange: (e: Event) => void;
}

export default function FullName({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="fullName" className="block font-medium   text-gray-700">
        Volledige naam
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Volledige naam"
        value={value}
        onInput={onChange}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
