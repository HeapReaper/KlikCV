export default function SubmitButton({ label = "Verstuur bericht" }) {
  return (
    <div className="text-center">
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transform transition-transform duration-150 active:scale-95"
      >
        {label}
      </button>
    </div>
  );
}
