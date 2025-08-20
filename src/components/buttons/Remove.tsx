export default function RemoveButton({ onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600
      transform transition-transform duration-150 active:scale-95
      "
    >
      ×
    </button>
  )
}
