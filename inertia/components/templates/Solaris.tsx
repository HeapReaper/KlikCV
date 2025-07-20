import { ReactElement } from "react";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function Solaris({ formData }: CvBuilderFormProps): ReactElement {
  return (
    <div className="max-w-3xl mx-auto space-y-4 bg-white p-3 rounded-2xl shadow-md border-orange-500 border-2">
      <h1 className="text-xl font-bold">{formData.fullName || "Je Naam"}</h1>

      <p>{formData.email || "E-mail"}</p>

      <p>{(new Date(formData.birthdate)).toLocaleDateString()}</p>

      <p>{formData.city || "Woonplaats"}</p>

      <p>{formData.phone || "Telefoon"}</p>

      <p>{formData.title || "Titel"}</p>

      <p>{formData.personDescription || "Beschrijving"}</p>

      <p>hobbies:</p>
      {formData.hobbies.map((hobby, index) => (
        <div key={index}>
          <p>{hobby.name ?? 'Hobby name'}</p>
          <p>{hobby.description ?? 'Hobby description'}</p>
        </div>
      ))}

      <p>Werk ervaring(en):</p>
      {formData.workExperiences.map((workExperience, index) => (
        <div key={index}>
          <p>{workExperience.position ?? 'Positie'}</p>
          <p>{workExperience.company ?? 'Bedrijf'}</p>
          <p>{workExperience.location ?? 'Locatie'}</p>
          <p>{(new Date(workExperience.startDate)).toLocaleDateString()}</p>
          <p>{(new Date(workExperience.endDate)).toLocaleDateString()}</p>
          <p>{workExperience.description ?? 'Beschrijving'}</p>
        </div>
      ))}

    </div>
  );
}
