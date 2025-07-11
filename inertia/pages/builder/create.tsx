import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";
import CvBuilderForm from "~/components/form/CvBuilderForm";
import CvBuilderPreview from "~/components/previews/CvBuilderPreview";

export default function Home() {
  return (
    <>
      <Head title="Maak je CV!" />

      <DefaultLayout>
        <div className="pt-4 h-full">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="">
              <CvBuilderForm />
            </div>
            <div className="hidden md:block">
              <CvBuilderPreview />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
