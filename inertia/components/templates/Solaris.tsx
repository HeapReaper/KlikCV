import { ReactElement } from "react";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function Solaris({ formData }: CvBuilderFormProps): ReactElement {
  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-white p-3 rounded-2xl shadow-md border-orange-500 border-2">
      <h1 className="text-xl font-bold">{formData.fullName || "Je Naam"}</h1>

      <p>{formData.email || "E-mail"}</p>

      <p>{(new Date(formData.birthdate)).toLocaleDateString()}</p>

      <p>{formData.city || "Woonplaats"}</p>

      <p>{formData.phone || "Telefoon"}</p>

      <p>{formData.title || "Titel"}</p>

      <p>{formData.personDescription || "Beschrijving"}</p>


    </div>
  );
}
