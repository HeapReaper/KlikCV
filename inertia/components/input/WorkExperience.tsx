import React from "react"

type Props = {
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
  onPositionChange: (value: string) => void;
  onCompanyChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onStartDateChange: (value: Date) => void;
  onEndDateChange: (value: Date) => void;
  onDescriptionChange: (value: string) => void;
  onRemove: ()  => void;
}

export default function WorkExperience({
  position,
  company,
  location,
  startDate,
  endDate,
  description,
  onPositionChange,
  onCompanyChange,
  onLocationChange,
  onStartDateChange,
  onEndDateChange,
  onDescriptionChange,
}: Props) {
  return (
    <div className="border border-orange-500 p-3 rounded-lg space-y-2">
      <label htmlFor="positie" className="block font-medium text-gray-700">
        Positie
      </label>
      <input
        type="text"
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder="Positie"
        value={position}
        onChange={(e) => onPositionChange(e.target.value)}
      />

      <label htmlFor="company" className="block font-medium text-gray-700">
        Bedrijf
      </label>
      <input
        type="text"
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder="Bedrijf"
        value={company}
        onChange={(e) => onCompanyChange(e.target.value)}
      />

      <label htmlFor="location" className="block font-medium text-gray-700">
        Locatie (land)
      </label>
      <input
        type="text"
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder="Locatie"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
      />

      <label htmlFor="startDate" className="block font-medium text-gray-700">
        Start datum
      </label>
      <input
        type="date"
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder=""
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
      />

      <label htmlFor="endDate" className="block font-medium text-gray-700">
        Eind datum
      </label>
      <input
        type="date"
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder="endDate"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
      />

      <label htmlFor="description" className="block font-medium text-gray-700">
        Beschrijving
      </label>
      <textarea
        className="w-full border border-orange-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
        placeholder="Beschrijf de baan"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />
    </div>
  )
}
