type InputProps = {
  value: string;
  onChange: (value: string) => void;
}

export default function Email({ value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor="email" className="block font-medium text-gray-700">
        E-mailadres
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-orange-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
