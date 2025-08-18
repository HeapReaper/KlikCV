export default function AddButton({ onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-gray-700 dark:text-white font-bold hover:bg-orange-600 transition"
    >
      +
    </button>
  )
}
