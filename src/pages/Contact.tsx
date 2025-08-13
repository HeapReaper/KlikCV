import FullName from '../components/inputs/FullName';
import Email from '../components/inputs/Email';
import Subject from '../components/inputs/Subject';
import Message from '../components/inputs/Message';
import SubmitButton from '../components/buttons/Submit';

export default function Contact() {
  return (
    <form className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-2xl shadow-md border-orange-500 border-2">
      <FullName />

      <Email />

      <Subject />

      <Message />

      <SubmitButton />
    </form>
  );
}
