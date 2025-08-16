import { useState } from 'preact/hooks';

import FullName from '../components/inputs/FullName';
import Email from '../components/inputs/Email';
import Phone from '../components/inputs/Phone';
import City from '../components/inputs/City';
import Birthdate from '../components/inputs/Birthdate';
import AboutMeDescription from '../components/inputs/aboutMeDescription';
import ColorPicker from '../components/inputs/Color';
import FontFamilySelect from '../components/select/FontSelect';
import AddButton from '../components/buttons/Add';
import RemoveButton from '../components/buttons/Remove';
import LanguageSelect from '../components/select/LanguageSelect';
import LanguageLevelSelect from '../components/select/LanguageLevelSelect';

// Templates
import Luna from '../templates/Luna';

export default function CvBuilder() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [aboutMeDescription, setAboutMeDescription] = useState('');

  const [languages, setLanguages] = useState([
    { language: '', level: '' },
  ]);

  // TODO: move to utils file
  const addLanguage = () => {
    setLanguages(prev => [
      ...prev, { language: '', level: '' }
    ]);
  };

  const removeLanguage = (index: number) => {
    setLanguages(prev => prev.filter((_, i) => i !== index));
  };

  const updateLanguage = (index: number, field: 'language' | 'level', value: string) =>
    setLanguages(prev =>
      prev.map((lang, i) => i === index ? { ...lang, [field]: value } : lang)
    );

  // Theme
  const [primaryColor, setPrimaryColor] = useState('#4169E1');
  const [secondaryColor, setSecondaryColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('font-sans');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
      {/* Builder form */}
      <div>
        <form className="space-y-4 bg-white p-2 rounded-2xl border-2 border-orange-500">

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

          {/* Languages */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">
              Talen
            </h4>

            {languages.map((langObj, index) => (
              <div key={index} className="p-1 relative flex space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                  <AddButton onClick={addLanguage} />
                  <RemoveButton onClick={() => removeLanguage(index)} />
                </div>

                <LanguageSelect
                  value={langObj.language}
                  onChange={value => updateLanguage(index, 'language', value)}
                />

                <LanguageLevelSelect
                  value={langObj.level}
                  onChange={value => updateLanguage(index, 'level', value)}
                />
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Builder preview */}
      <div>
        <div className="border-2 border-orange-500 rounded-2xl p-4 h-[842px] overflow-auto lg:sticky lg:top-8">
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
            languages={languages}
          />
        </div>
      </div>
    </div>
  );
}
