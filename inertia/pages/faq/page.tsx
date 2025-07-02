import { Head } from '@inertiajs/react'
import DefaultLayout from "~/components/DefaultLayout";
import FAQ from "~/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Head title="FAQ" />

      <DefaultLayout>
        <div className="pt-4 h-full flex flex-col">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-orange-500 mb-8">
              Veelgestelde vragen
            </h1>
            <FAQ />
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
