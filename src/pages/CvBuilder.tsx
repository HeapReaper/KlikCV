import { useState } from 'preact/hooks';
// Input components
import FullName from '../components/inputs/FullName';
import Email from '../components/inputs/Email';
import Phone from '../components/inputs/Phone';
import City from '../components/inputs/City';
import Birthdate from '../components/inputs/Birthdate';
import AboutMeDescription from '../components/inputs/aboutMeDescription';
import ColorPicker from '../components/inputs/Color';
import FontFamilySelect from '../components/select/FontSelect';

// Templates
import Luna from '../templates/Luna';

export default function CvBuilder() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [aboutMeDescription, setAboutMeDescription] = useState('');

  // Theme
  const [primaryColor, setPrimaryColor] = useState('#4169E1');
  const [secondaryColor, setSecondaryColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('font-sans');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
      {/* Builder form */}
      <div>
        <form className="space-y-2 bg-white p-2 rounded-2xl border-2 border-orange-500">

          {/* Personal info */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">
              Persoonlijke informatie
            </h4>

            <FullName
              value={fullName}
              onChange={setFullName}
            />

            <Email
              value={email}
               onChange={setEmail}
            />

            <Phone
              value={phone}
             onChange={setPhone}
            />

            <City
              value={city}
              onChange={setCity}
            />

            <Birthdate
              value={birthdate}
              onChange={setBirthdate}
            />
          </div>

          {/* About me */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">
              Profiel
            </h4>

            <AboutMeDescription
              value={aboutMeDescription}
              onChange={html => setAboutMeDescription(html)}
            />
          </div>

          {/* Theme */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Thema</h4>

            <div className="space-y-4 p-4 bg-white rounded-lg shadow-md w-full max-w-sm">
              <div className="flex gap-4">
                <ColorPicker
                  label="Primary kleur"
                  value={primaryColor}
                  onChange={setPrimaryColor}
                />
                <ColorPicker
                  label="Secondary kleur"
                  value={secondaryColor}
                  onChange={setSecondaryColor}
                />
              </div>

              <FontFamilySelect
                value={fontFamily}
                onChange={setFontFamily}
              />
            </div>
          </div>

        </form>
      </div>

      {/* Builder preview */}
      <div>
        <div className="border-2 border-orange-500 rounded-2xl p-4">
          {/* @ts-ignore */}
          <Luna
            name={fullName}
            email={email}
            phone={phone}
            city={city}
            birthdate={birthdate}
            aboutMeDescription={aboutMeDescription}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            fontFamily={fontFamily}
          />
        </div>
      </div>
    </div>
  );
}
