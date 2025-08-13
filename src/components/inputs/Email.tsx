export default function Email() {
  return (
    <div>
      <label htmlFor="email" className="block font-medium text-gray-700">
        E-mailadres
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 w-full border border-orange-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
