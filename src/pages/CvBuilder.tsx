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
import MonthSelect from '../components/select/MonthSelect';
import YearSelect from '../components/select/YearSelect';
import RichTextEditor from '../components/editors/EditorMin';
import CheckBox from '../components/inputs/Checkbox';

// Templates
import Luna from '../templates/Luna';
import TextInput from "../components/inputs/Text.tsx";
import SkillLevelSelect from "../components/select/LevelSelect.tsx";

export default function CvBuilder() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [preferredFunction, setPreferredFunction] = useState('');
  const [aboutMeDescription, setAboutMeDescription] = useState('...');

  const [languages, setLanguages] = useState([
    { language: '', level: '' },
  ]);

  const [skills, setSkills] = useState([
    { skill: '', level: '' },
  ]);

  const [workExperiences, setWorkExperiences] = useState([
    {
      jobTitle: '',
      employer: '',
      place: '',
      startMonth: new Date().getMonth(),
      startYear: new Date().getFullYear(),
      endMonth: new Date().getMonth(),
      endYear: new Date().getFullYear(),
      current: false,
      description: '',
    },
  ]);

  // TODO: move to utils
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


  // TODO: Move to utils
  const addSkill = () => {
    setSkills(prev => [
      ...prev, { skill: '', level: '' }
    ]);
  };

  const removeSkills = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const updateSkills = (index: number, field: 'skill' | 'level', value: string) =>
    setSkills(prev =>
      prev.map((lang, i) => i === index ? { ...lang, [field]: value } : lang)
    );

  // TODO: Move to utils
  const addWorkExperience = () => {
    setWorkExperiences(prev => [
      ...prev,
      {
        jobTitle: '',
        employer: '',
        place: '',
        startMonth: new Date().getMonth(),
        startYear: new Date().getFullYear(),
        endMonth: new Date().getMonth(),
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperiences(prev => prev.filter((_, i) => i !== index));
  };

  const updateWorkExperience = (
    index: number,
    field:
      | 'jobTitle'
      | 'employer'
      | 'place'
      | 'startMonth'
      | 'startYear'
      | 'endMonth'
      | 'endYear'
      | 'current'
      | 'description',
    value: string | number | boolean
  ) => {
    setWorkExperiences(prev =>
      prev.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp))
    );
  };

  // Theme
  const [primaryColor, setPrimaryColor] = useState('#4169E1');
  const [secondaryColor, setSecondaryColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('font-sans');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
      {/* Builder form */}
      <div>
        <form className="space-y-4 bg-white p-2 rounded-2xl border-2 border-orange-500">
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

            <TextInput
              label="Gewenste functie"
              placeholder="Gewenste functie"
              value={preferredFunction}
              onChange={setPreferredFunction}
            />

            <AboutMeDescription
              value={aboutMeDescription}
              onChange={html => setAboutMeDescription(html)}
            />
          </div>

          {/* Education */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">
              Opleiding
            </h4>

              <div  className="p-2 relative space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                  <AddButton onClick={addSkill} />
                  <RemoveButton onClick={() => removeSkills(index)} />
                </div>

                <TextInput
                  id="title"
                  label="Opleiding"
                  placeholder="Naam"
                  value=""
                  onChange=""
                />

                <div className="flex space-x-4">
                  <TextInput
                    id="institution"
                    label="Instituut"
                    placeholder="School naam.."
                    value=""
                    onChange=""
                  />

                  <TextInput
                    id="Place"
                    label="Plaats"
                    placeholder="Plaats"
                    value=""
                    onChange=""
                  />
                </div>

                <div className="flex space-x-4 gap-2">
                  <div>
                    <p className="font-medium text-gray-700">
                      Startdatum
                    </p>
                    <div className="flex space-x-4 gap-2">
                      <MonthSelect
                        value="Januari"
                        onChange=""
                      />

                      <YearSelect
                        value="2019"
                        onChange=""
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">Einddatum</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Huidig</span>
                        <label className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300
                        peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-[2px]
                        after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                        after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4">
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-4 gap-2">
                      <MonthSelect
                        value="Januari"
                        onChange=""
                      />

                      <YearSelect
                        value="2019"
                        onChange=""
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-700">
                    Omschrijving
                  </p>

                  <RichTextEditor
                    value=""
                    onChange=""
                  />
                </div>
              </div>
          </div>

          {/* Work experience */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Werkervaring</h4>
            {workExperiences.map((experience, index) => (
              <div key={index}  className="p-2 relative space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                  <AddButton onClick={addWorkExperience} />
                  <RemoveButton onClick={() => removeWorkExperience(index)} />
                </div>

                <TextInput
                  id={`function-${index}`}
                  label="Functie"
                  placeholder="Functie"
                  value={experience.jobTitle}
                  onChange={e =>
                    updateWorkExperience(index, 'function', e.target.value)
                  }
                />

                <div className="flex space-x-4">
                  <TextInput
                    id={`employer-${index}`}
                    label="Werkgever"
                    placeholder="Werkgever"
                    value={experience.employer}
                    onChange={e =>
                      updateWorkExperience(index, 'employer', e.target.value)
                    }
                  />
                  <TextInput
                    id={`place-${index}`}
                    label="Plaats"
                    placeholder="Plaats"
                    value={experience.place}
                    onChange={e =>
                      updateWorkExperience(index, 'place', e.target.value)
                    }
                  />
                </div>

                <div className="flex space-x-4 gap-2">
                  <div>
                    <p className="font-medium text-gray-700">Startdatum</p>
                    <div className="flex space-x-4 gap-2">
                      <MonthSelect
                        value={experience.startMonth}
                        onChange={month =>
                          updateWorkExperience(index, 'startMonth', Number(month))
                        }
                      />
                      <YearSelect
                        value={experience.startYear}
                        onChange={year =>
                          updateWorkExperience(index, 'startYear', Number(year))
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">Einddatum</p>
                      <CheckBox
                        label="Huidig"
                        checked={experience.current}
                        onChange={e =>
                          updateWorkExperience(index, 'current', e.target.checked)
                        }
                      />
                    </div>

                    <div className="flex space-x-4 gap-2">
                      <MonthSelect
                        value={experience.endMonth}
                        onChange={month =>
                          updateWorkExperience(index, 'endMonth', Number(month))
                        }
                      />
                      <YearSelect
                        value={experience.endYear}
                        onChange={year =>
                          updateWorkExperience(index, 'endYear', Number(year))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Omschrijving</p>
                  <RichTextEditor
                    value={experience.description}
                    onChange={val => updateWorkExperience(index, 'description', val)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">
              Skills
            </h4>

            {skills.map((skillsObj, index) => (
              <div key={index} className="p-2 relative flex space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                  <AddButton onClick={addSkill} />
                  <RemoveButton onClick={() => removeSkills(index)} />
                </div>

                <TextInput
                  id="skill[]"
                  label="Naam"
                  placeholder="Project management"
                  value={skillsObj.skill}
                  onChange={value => updateSkills(index, 'skill', value)}
                />

                <SkillLevelSelect
                  value={skillsObj.level}
                  onChange={value => updateSkills(index, 'level', value)}
                />
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">
              Talen
            </h4>

            {languages.map((langObj, index) => (
              <div key={index} className="p-2 relative flex space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
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
            preferredFunction={preferredFunction}
            aboutMeDescription={aboutMeDescription}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            fontFamily={fontFamily}
            skills={skills}
            workExperiences={workExperiences}
            languages={languages}
          />
        </div>
      </div>
    </div>
  );
}
