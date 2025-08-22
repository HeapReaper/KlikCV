import type { ButtonType } from '@/app/types/button';

export default function Button({ id, label, type, onClick }: ButtonType) {
  // @ts-ignore
  return (
    <div className="">
      <button
        id={id}
        type={type}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transform transition-transform duration-150 active:scale-95"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}
