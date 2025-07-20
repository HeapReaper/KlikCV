import React from "react"

type Props = {
  name: string;
  description: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onRemove: ()  => void;
}


export default function HobbyInput({name,description,onNameChange,onDescriptionChange,onRemove,}: Props): React.ReactElement {
  return (
    <div className="border border-orange-500 p-3 rounded-lg space-y-2">
      <label htmlFor="name" className="block font-medium text-gray-700">
        Hobby/intresse naam
      </label>
      <input
        type="text"
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder="Naam van hobby of interesse"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <label htmlFor="email" className="block font-medium text-gray-700">
        Beschrijving
      </label>
      <textarea
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        rows={3}
        placeholder="Beschrijving"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />

      <button
        type="button"
        className="text-red-600 hover:underline text-sm"
        onClick={onRemove}
      >
        Verwijderen
      </button>
    </div>
  )
}
