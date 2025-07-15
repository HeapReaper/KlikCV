import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
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

      <SubmitButton label="Genereer" />
    </form>
  );
};
