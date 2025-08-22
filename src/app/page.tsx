import Link from "next/link";
import MakeCvButton from "@/app/components/buttons/makeCvButton";

export default function Home() {
  return (
    <>
      <div className="grow pb-4 space-y-4">
        <h1 className="text-5xl font-bold text-center text-orange-500">
          Bouw jouw gratis CV in enkele minuten
        </h1>
        <p className="text-center text-gray-700 dark:text-white">
          Vul jouw gegevens in, selecteer een template en download jouw CV direct.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <MakeCvButton />
        </div>
      </div>

      <div className="space-y-4 rounded-lg p-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-center text-orange-500">
          De leukste in-house gemaakte sjablonen
        </h1>
        <div className="mt-10 relative max-w-4xl mx-auto w-full">
          <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-orange-700 scrollbar-track-orange-200 w-full">
            <div className="flex-shrink-0 flex-none min-w-[60%] sm:min-w-[48%] md:min-w-[280px] lg:min-w-[320px] rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
              <img
                src="/Luna.png"
                alt="Luna template"
                className="rounded mb-4 mx-auto h-80 w-auto object-contain"
              />
              <h3 className="font-bold text-xl">
                Luna
              </h3>
            </div>

            <div className="flex-shrink-0 flex-none min-w-[60%] sm:min-w-[48%] md:min-w-[280px] lg:min-w-[320px] rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
              <img
                src="/Nova.png"
                alt="Nova template"
                className="rounded mb-4 mx-auto h-80 w-auto object-contain"
              />
              <h3 className="font-bold text-xl">
                Nova
              </h3>
            </div>

            <div className="flex-shrink-0 flex-none min-w-[60%] sm:min-w-[48%] md:min-w-[280px] lg:min-w-[320px] rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
              <img
                src="/Orion.png"
                alt="Orion template"
                className="rounded mb-4 mx-auto h-80 w-auto object-contain"
              />
              <h3 className="font-bold text-xl">
                Orion
              </h3>
            </div>
          </div>
        </div>
      </div>


      {/*
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-center text-orange-500 ">
          Onze statistieken
        </h1>
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
      </div>
      */}

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-bold text-orange-500 mb-8">
          Veelgestelde vragen
        </h1>

        {/*
        <FAQ setAmount={4} />
        */}
        <p className="text-sm mt-2 dark:text-white">
          Voor alle vragen{" "}
          {/* @ts-ignore */}
          <Link href="/faq" className="underline decoration-orange-500">
            klik hier
          </Link>
        </p>
      </div>
    </>
  );
}
