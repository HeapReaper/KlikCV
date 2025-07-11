import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
import SubmitButton from "~/components/buttons/Submit";
import {ReactElement} from "react";

export default function CvBuilderForm(): ReactElement {
  return (
    <form
      className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-2xl shadow-md border border-orange-500 border-2"
    >
      <FullName />

      <Email />

      <SubmitButton label="Genereer" />
    </form>
  );
};
