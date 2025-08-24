import type { InputCheckboxType } from '@/types/input';

export default function CheckBox({ label, checked, onChange}: InputCheckboxType) {
  return (
    <>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700 dark:text-white">
          {label}
        </span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange((e.currentTarget.checked))}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-400 dark:bg-gray-800 border border-orange-500 peer-focus:outline-none rounded-full peer
            peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-[2px]
            after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
            after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"
          />
        </label>
      </div>
    </>
  )
}
