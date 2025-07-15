import { ReactElement } from "react";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function Solaris({ formData }: CvBuilderFormProps): ReactElement {
  return (
    <div className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-2xl shadow-md border border-orange-500 border-2">
      <h1 className="text-xl font-bold">{formData.fullName || "Je Naam"}</h1>
      <p>{formData.email || "E-mail"}</p>
    </div>
  );
}
