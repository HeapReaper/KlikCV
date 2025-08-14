import { useState } from 'preact/hooks';
import FullName from '../components/inputs/FullName';
import Email from '../components/inputs/Email';
import Luna from '../templates/Luna';
import LanguageSelect from '../components/select/LanguageSelect';
import LanguageLevelSelect from '../components/select/LanguageLevelSelect';
import AddButton from '../components/buttons/Add';
import RemoveButton from '../components/buttons/Remove';

export default function CvBuilder() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="grid grid-cols-2 justify-center gap-4">
      {/* Builder form */}
      <div>
        <form className="space-y-2 bg-white p-2 rounded-2xl border-2 border-orange-500">

          {/* Personal info */}
          <div className="p-2 space-y-2 rounded-2xl shadow-md border-2 border-orange-500">
            <h4 className="text-2xl">
              Persoonlijke informatie
            </h4>
            {/* @ts-ignore */}
            <FullName value={fullName} onChange={e => setFullName(e.target?.value)} />

            {/* @ts-ignore */}
            <Email value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          {/* Language */}
          <div className="p-2 space-y-2 rounded-2xl shadow-md border-2 border-orange-500 relative">
            <h4 className="text-2xl">
              Talen
            </h4>

            <div className="p-2 rounded-2xl shadow-md border-2 border-orange-500 relative">
              {/* Add and remove buttons */}
              <div className="absolute -top-4 right-2 flex space-x-2">
                <AddButton />
                <RemoveButton />
              </div>

              <div className="flex space-x-2">
                <LanguageSelect />
                <LanguageLevelSelect />
              </div>
            </div>

          </div>
        </form>
      </div>

      {/* Builder preview */}
      <div>
        <div className="border-2 border-orange-500 rounded-2xl p-4">
          {/* @ts-ignore */}
          <Luna name={fullName} email={email} />
        </div>
      </div>
    </div>
  );
}
