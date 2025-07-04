import { Head } from '@inertiajs/react'
import DefaultLayout from "~/components/DefaultLayout";
import ContactForm from "~/components/form/ContactForm";

export default function Home() {
  return (
    <>
      <Head title="Contact" />

      <DefaultLayout>
        <div className="pt-1 h-full flex flex-col">
          <ContactForm />
        </div>
      </DefaultLayout>
    </>
  )
}
