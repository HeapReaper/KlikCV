import type { FileInputType } from '../../types/Input';

export default function FileInput({ id, label, accept, onChange }: FileInputType) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" font-medium text-gray-700 dark:text-white">
        {label}
      </label>
      <input
        type="file"
        id={id}
        name={id}
        accept={accept}
        onChange={onChange}
        className="
          block w-full text-sm text-gray-700 dark:text-white
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-medium
        file:bg-orange-500 file:text-white
        hover:file:bg-orange-600
          cursor-pointer"
      />
    </div>
  );
}
