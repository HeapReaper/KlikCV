import { Head } from "@inertiajs/react";
import { useState} from "react";
import DefaultLayout from "~/components/DefaultLayout";
import CvBuilderForm from "~/components/form/CvBuilderForm";
import CvBuilderPreview from "~/components/previews/CvBuilderPreview";

export default function CreateBuilder() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  return (
    <>
      <Head title="Maak je CV!" />

      <DefaultLayout>
        <div className="pt-4 h-full">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="">
              <CvBuilderForm formData={formData} setFormData={setFormData} />
            </div>
            <div className="hidden md:block">
              <CvBuilderPreview formdata={formData} template="Solaris" />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
