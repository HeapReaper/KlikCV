import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
import Birthdate from "~/components/input/Birthdate";
import City from "~/components/input/City";
import Phone from "~/components/input/Phone";
import PersonDescription from "~/components/input/PersonDescription";
import Title from "~/components/input/Title";
import SubmitButton from "~/components/buttons/Submit";

import {ReactElement} from "react";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function CvBuilderForm({ formData, setFormData }: CvBuilderFormProps): ReactElement {
  return (
    <form
      className="max-w-3xl mx-auto space-y-3 bg-white p-3 rounded-2xl shadow-md border border-orange-500 border-2"
    >
      <h5 className="text-xl font-bold">
        Persoonlijke info
      </h5>

      <FullName
        value={formData.fullName}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, fullName: value }))}
      />

      <Email
        value={formData.email}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, email: value }))}
      />

      <Birthdate
        value={formData.birthdate}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, birthdate: value }))}
      />

      <City
        value={formData.city}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, city: value }))}
      />

      <Phone
        value={formData.phone}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, phone: value }))}
      />

      <h5 className="text-xl font-bold">
        Profiel
      </h5>

      <Title
        value={formData.title}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, title: value }))}
      />

      <PersonDescription
        value={formData.personDescription}
        onChange={(value: string) => setFormData((prev) => ({ ...prev, personDescription: value }))}
      />

      <SubmitButton label="Genereer" />
    </form>
  );
};
