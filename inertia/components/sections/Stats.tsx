export default function Stats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center place-content-center min-h-[150px]">
      <div className="flex flex-col justify-center items-center border-2 border-solid border-orange-500 rounded-lg p-6 text-xl font-bold">
        <p className="text-3xl font-bold text-orange-500">69</p>
        <p className="text-lg text-gray-700 mt-2">Bezoekers per maand</p>
      </div>

      <div className="flex flex-col justify-center items-center border-2 border-solid border-orange-500  rounded-lg p-6 text-xl font-bold">
        <p className="text-3xl font-bold text-orange-500">69</p>
        <p className="text-lg text-gray-700 mt-2">CV's gegenereerd</p>
      </div>

      <div className="flex flex-col justify-center items-center border-2 border-solid border-orange-500  rounded-lg p-6 text-xl font-bold">
        <p className="text-3xl font-bold text-orange-500">69</p>
        <p className="text-lg text-gray-700 mt-2">Sjablonen beschikbaar</p>
      </div>

      <div className="flex flex-col justify-center items-center border-2 border-solid border-orange-500  rounded-lg p-6 text-xl font-bold">
        <p className="text-3xl font-bold text-orange-500">69</p>
        <p className="text-lg text-gray-700 mt-2">Idk wat hier komt</p>
      </div>
    </div>
  );
}
