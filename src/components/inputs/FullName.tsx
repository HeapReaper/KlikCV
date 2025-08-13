export default function FullName() {
  return (
    <div>
      <label htmlFor="fullName" className="block font-medium text-gray-700">
        Volledige naam
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        className="mt-1 w-full border border-orange-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
