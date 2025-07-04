import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
import Subject from "~/components/input/Subject";
import Message from "~/components/input/Message";
import SubmitButton from "~/components/buttons/Submit";

export default function ContactForm() {
  return (
    <form
      className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-2xl shadow-md border border-orange-500"
    >
      <FullName />

      <Email />

      <Subject />

      <Message />

      <SubmitButton />
    </form>
  );
};
