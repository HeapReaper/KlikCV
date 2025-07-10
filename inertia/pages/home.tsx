import { Head } from "@inertiajs/react"
import DefaultLayout from "~/components/DefaultLayout";
import FAQ from "~/components/sections/FaqSection";
import TemplateSlider from "~/components/sections/TemplateSlider";
import MakeCV from "~/components/buttons/MakeCV";
import Stats from "~/components/sections/Stats";

export default function Home() {
  return (
      <>
        <Head title="Home" />

        <DefaultLayout>
          <div className="pt-4 h-full flex flex-col space-y-14">
            <div className="grow pb-4 space-y-4">
              <h1 className="text-5xl font-bold text-center text-orange-500">
                Bouw jouw gratis CV in enkele minuten
              </h1>
              <p className="text-center text-gray-700">
                Vul jouw gegevens in, selecteer een template en download jouw CV direct.
              </p>

              <div className="flex items-center justify-center space-x-4">
                <MakeCV />
              </div>
            </div>

            <div className="space-y-4 border- 2 border-solid border-orange-500 rounded-lg pt-3 pb-3">
              <h1 className="text-5xl font-bold text-center text-orange-500">
                De leukste in-house gemaakte sjablonen
              </h1>
                <TemplateSlider />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-center text-orange-500 ">
                Onze statistieken
              </h1>
              <Stats />
            </div>

            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold text-center text-orange-500 mb-8">
                Veelgestelde vragen
              </h1>
              <FAQ setAmount={4} />
            </div>
          </div>
        </DefaultLayout>
      </>
  )
}
