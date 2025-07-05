import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";

export default function Home() {
  return (
    <>
      <Head title="Maak je CV!" />

      <DefaultLayout>
        <div className="pt-4 h-full flex flex-col">
          <h1>CV bouwer</h1>
        </div>
      </DefaultLayout>
    </>
  )
}
