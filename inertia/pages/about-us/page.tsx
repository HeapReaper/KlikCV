import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";

export default function AboutUsPage() {
  return (
    <>
      <Head title="Over ons" />

      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3" >
          <h1 className="text-4xl font-bold text-black text-center">
            Over ons
          </h1>

          <p className="mt-2">
            Bij KlikCV geloven we dat het maken van een professioneel CV eenvoudig en toegankelijk moet zijn voor iedereen. Daarom hebben we een gebruiksvriendelijke tool ontwikkeld waarmee je binnen enkele minuten jouw persoonlijke CV kunt samenstellen, helemaal gratis.
            Onze in-house ontwikkelde sjablonen zijn ontworpen met aandacht voor overzicht, stijl en functionaliteit, zodat jouw CV direct opvalt bij werkgevers. Of je nu net begint met solliciteren of je carrière een boost wilt geven, bij ons vind je altijd een passend template.
            We zetten ons in om jouw sollicitatieproces makkelijker te maken, zodat jij je kunt focussen op wat echt telt: jouw volgende stap in je carrière.<br/>
            Heeft u vragen over deze privacyverklaring? Neem dan gerust contact met ons op via <a
            href="mailto:info@klikcv.nl" className="text-blue-400 underline">info@klikcv.nl</a>.
          </p>
        </div>
      </DefaultLayout>
    </>
  )
}
