import { Head } from '@inertiajs/react'
import DefaultLayout from "~/components/DefaultLayout";

export default function Home() {
  return (
    <>
      <Head title="Over ons" />

      <DefaultLayout>
        <div className="pt-4 h-full flex flex-col">
          <h1>Over ons</h1>
        </div>
      </DefaultLayout>
    </>
  )
}
