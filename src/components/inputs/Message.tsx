export default function Message() {
  return (
    <div>
      <label htmlFor="message" className="block font-medium text-gray-700">
        Bericht
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        className="mt-1 w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        required
      />
    </div>
  );
}
