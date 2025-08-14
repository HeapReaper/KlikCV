import MakeCVButton from '../components/buttons/MakeCV';
import FAQ from '../components/core/Faq';
import { Link } from 'preact-router/match';

export default function Home() {
  return (
    <>
      <div className="pt-4 h-full flex flex-col space-y-14">
        <div className="grow pb-4 space-y-4">
          <h1 className="text-5xl font-bold text-center text-orange-500">
            Bouw jouw gratis CV in enkele minuten
          </h1>
          <p className="text-center text-gray-700">
            Vul jouw gegevens in, selecteer een template en download jouw CV direct.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <MakeCVButton />
          </div>
        </div>

        <div className="space-y-4 border-2 border-solid border-orange-500 rounded-lg pt-3 pb-3">
          <h1 className="text-5xl font-bold text-center text-orange-500">
            De leukste in-house gemaakte sjablonen
          </h1>
          <div className="mt-10 relative max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
                <img
                  src="https://placehold.co/250x370"
                  alt="Template Toronto"
                  className="rounded mb-4 mx-auto"
                />
                <h3 className="font-bold text-lg">
                  Orion
                </h3>
                <p className="text-sm">
                  69 gebruikers kozen dit template
                </p>
              </div>
              <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
                <img
                  src="https://placehold.co/250x370"
                  alt="Template Cornell"
                  className="rounded mb-4 mx-auto"
                />
                <h3 className="font-bold text-lg">
                  Luna
                </h3>
                <p className="text-sm">
                  69 gebruikers kozen dit template
                </p>
              </div>
              <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
                <img
                  src="https://placehold.co/250x370"
                  alt="Template Cornell"
                  className="rounded mb-4 mx-auto"
                />
                <h3 className="font-bold text-lg">
                  Nova
                </h3>
                <p className="text-sm">
                  69 gebruikers kozen dit template
                </p>
              </div>
              <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-2 border-solid border-orange-500">
                <img
                  src="https://placehold.co/250x370"
                  alt="Template Cornell"
                  className="rounded mb-4 mx-auto"
                />
                <h3 className="font-bold text-lg">
                  Solaris
                </h3>
                <p className="text-sm">
                  69 gebruikers kozen dit template
                </p>
              </div>
            </div>
          </div>
        </div>

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

        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-orange-500 mb-8">
            Veelgestelde vragen
          </h1>
          <FAQ setAmount={4} />

          <p className="text-center text-sm mt-2">
            {/* @ts-ignore */}
            Voor alle vragen <Link href="/faq">klik hier</Link>
          </p>
        </div>
      </div>
    </>
  )
}
