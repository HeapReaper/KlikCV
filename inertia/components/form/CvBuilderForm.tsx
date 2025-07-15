import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
import Birthdate from "~/components/input/Birthdate";
import City from "~/components/input/City";
import Phone from "~/components/input/Phone";

import SubmitButton from "~/components/buttons/Submit";

import {ReactElement} from "react";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function CvBuilderForm({ formData, setFormData }: CvBuilderFormProps): ReactElement {
  return (
    <form
      className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-2xl shadow-md border border-orange-500 border-2"
    >
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


      <SubmitButton label="Genereer" />
    </form>
  );
};
