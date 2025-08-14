import { useState } from 'preact/hooks';
import FullName from '../components/inputs/FullName';
import Email from '../components/inputs/Email';
import Luna from '../templates/Luna';

export default function CvBuilder() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [template, setTemplate] = useState('Luna');


  return (
    <div className="grid grid-cols-2 justify-center gap-4">
      {/* Builder form */}
      <div>
        <form className="space-y-2 bg-white p-3 rounded-2xl shadow-md border-2 border-orange-500">
          <FullName value={fullName} onChange={e => setFullName(e.target.value)} />
          <Email value={email} onChange={e => setEmail(e.target.value)} />
        </form>
      </div>

      {/* Builder preview */}
      <div>
        <div className="border-2 border-orange-500 rounded-2xl p-4">
          <Luna name={fullName} email={email} />
        </div>
      </div>
    </div>
  );
}
