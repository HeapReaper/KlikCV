import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";
import ContactForm from "~/components/form/ContactForm";

export default function Home() {
  return (
    <>
      <Head title="Contact" />

      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3">
          <h1 className="text-4xl font-bold text-black text-center">
            Contact
          </h1>
        </div>
        <ContactForm />
      </DefaultLayout>
    </>
  )
}
