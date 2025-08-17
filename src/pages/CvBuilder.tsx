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
import { useCvState } from '../hooks/useCvState';

// Templates
import Luna from '../templates/Luna';
import TextInput from '../components/inputs/Text';
import SkillLevelSelect from '../components/select/LevelSelect';
import {exportToPdf} from "../utils/exportToPdf.ts";

export default function CvBuilder() {
  const [cvData, setCvData] = useCvState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    birthdate: '',
    preferredFunction: '',
    aboutMeDescription: '...',
    languages: [{ language: '', level: '' }],
    skills: [{ skill: '', level: '' }],
    workExperiences: [
      {
        jobTitle: '',
        employer: '',
        place: '',
        startMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        startYear: new Date().getFullYear(),
        endMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
    educations: [
      {
        name: '',
        institution: '',
        place: '',
        startMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        startYear: new Date().getFullYear(),
        endMonth: new Date().toLocaleString('nl-NL', { month: 'long' }),
        endYear: new Date().getFullYear(),
        current: false,
        description: '',
      },
    ],
  });

  const [primaryColor, setPrimaryColor] = useState('#4169E1');
  const [secondaryColor, setSecondaryColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('font-sans');

  const updateCvData = (field: any, value: any) => {
    setCvData((prev: any) => ({ ...prev, [field]: value }));
  };

  const updateListItem = (listName: any, index: number, field: any, value: any) => {
    setCvData((prev: { [x: string]: any[]; }) => ({
      ...prev,
      [listName]: prev[listName].map((item: any, i: any) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addListItem = (listName: any, newItem: any) => {
    setCvData((prev: { [x: string]: any; }) => ({
      ...prev,
      [listName]: [...prev[listName], newItem],
    }));
  };

  const removeListItem = (listName: any, index: number) => {
    setCvData((prev: { [x: string]: any[]; }) => ({
      ...prev,
      [listName]: prev[listName].filter((_: any, i: number) => i !== index),
    }));
  };


  console.log('Primary Color value:', primaryColor);

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
                <ColorPicker label="Primary kleur" value={primaryColor} onChange={setPrimaryColor} />
                <ColorPicker label="Secondary kleur" value={secondaryColor} onChange={setSecondaryColor} />
              </div>
              <FontFamilySelect value={fontFamily} onChange={setFontFamily} />
            </div>
          </div>

          {/* Personal info */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Persoonlijke informatie</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <FullName value={cvData.fullName} onChange={value => updateCvData('fullName', value)} />
              <Email value={cvData.email} onChange={value => updateCvData('email', value)} />
              <Phone value={cvData.phone} onChange={value => updateCvData('phone', value)} />
              <City value={cvData.city} onChange={value => updateCvData('city', value)} />
              <Birthdate value={cvData.birthdate} onChange={value => updateCvData('birthdate', value)} />
            </div>
          </div>

          {/* About me */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Profiel</h4>

            <TextInput label="Gewenste functie" placeholder="Gewenste functie" value={cvData.preferredFunction} onChange={value => updateCvData('preferredFunction', value)} />
            <AboutMeDescription value={cvData.aboutMeDescription} onChange={html => updateCvData('aboutMeDescription', html)} />
          </div>

          {/* Education */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Opleiding</h4>
            {cvData.educations.map((education: any, index: number) => (
              <div key={index} className="p-2 relative space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                  <AddButton onClick={() => addListItem('educations', { name: '', institution: '', place: '', startMonth: '', startYear: '', endMonth: '', endYear: '', current: false, description: '' })} />
                  <RemoveButton onClick={() => removeListItem('educations', index)} />
                </div>
                <TextInput id="title" label="Opleiding" placeholder="Naam" value={education.name} onChange={value => updateListItem('educations', index, 'name', value)} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex space-x-4">
                    <TextInput id="institution" label="Instituut" placeholder="School naam" value={education.institution} onChange={value => updateListItem('educations', index, 'institution', value)} />
                    <TextInput id="Place" label="Plaats" placeholder="Plaats" value={education.place} onChange={value => updateListItem('educations', index, 'place', value)} />
                  </div>

                  <div className="flex space-x-4 gap-2">
                    <div>
                      <p className="font-medium text-gray-700">Startdatum</p>
                      <div className="flex space-x-4 gap-2">
                        <MonthSelect value={education.startMonth} onChange={value => updateListItem('educations', index, 'startMonth', value)} />
                        <YearSelect value={education.startYear} onChange={value => updateListItem('educations', index, 'startYear', value)} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-700">Einddatum</p>
                        <CheckBox label="Huidig" checked={education.current} onChange={checked => updateListItem('educations', index, 'current', checked)} />
                      </div>
                      <div className="flex space-x-4 gap-2">
                        <MonthSelect value={education.endMonth} onChange={value => updateListItem('educations', index, 'endMonth', value)} />
                        <YearSelect value={education.endYear} onChange={value => updateListItem('educations', index, 'endYear', value)} />
                      </div>
                    </div>
                  </div>

                </div>
                <div>
                  <p className="font-medium text-gray-700">Omschrijving</p>
                  <RichTextEditor value={education.description} onChange={val => updateListItem('educations', index, 'description', val)} />
                </div>
              </div>
            ))}
          </div>

          {/* Work experience */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Werkervaring</h4>
            {cvData.workExperiences.map((experience: any, index: number) => (
              <div key={index} className="p-2 relative space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                  <AddButton onClick={() => addListItem('workExperiences', { jobTitle: '', employer: '', place: '', startMonth: '', startYear: '', endMonth: '', endYear: '', current: false, description: '' })} />
                  <RemoveButton onClick={() => removeListItem('workExperiences', index)} />
                </div>

                <TextInput id={`function-${index}`} label="Functie" placeholder="Functie" value={experience.jobTitle} onChange={value => updateListItem('workExperiences', index, 'jobTitle', value)} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                  <div className="flex space-x-4">
                    <TextInput id={`employer-${index}`} label="Werkgever" placeholder="Werkgever" value={experience.employer} onChange={value => updateListItem('workExperiences', index, 'employer', value)} />
                    <TextInput id={`place-${index}`} label="Plaats" placeholder="Plaats" value={experience.place} onChange={value => updateListItem('workExperiences', index, 'place', value)} />
                  </div>
                  <div className="flex space-x-4 gap-2">
                    <div>
                      <p className="font-medium text-gray-700">Startdatum</p>
                      <div className="flex space-x-4 gap-2">
                        <MonthSelect value={experience.startMonth} onChange={month => updateListItem('workExperiences', index, 'startMonth', month)} />
                        <YearSelect value={experience.startYear} onChange={year => updateListItem('workExperiences', index, 'startYear', Number(year))} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-700">Einddatum</p>
                        <CheckBox label="Huidig" checked={experience.current} onChange={checked => updateListItem('workExperiences', index, 'current', checked)} />
                      </div>
                      <div className="flex space-x-4 gap-2">
                        <MonthSelect value={experience.endMonth} onChange={month => updateListItem('workExperiences', index, 'endMonth', month)} />
                        <YearSelect value={experience.endYear} onChange={year => updateListItem('workExperiences', index, 'endYear', year)} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Omschrijving</p>
                  <RichTextEditor value={experience.description} onChange={val => updateListItem('workExperiences', index, 'description', val)} />
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Skills</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cvData.skills.map((skill: any, index: number) => (
                <div key={index} className="p-2 relative flex space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                  <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                    <AddButton onClick={() => addListItem('skills', { skill: '', level: '' })} />
                    <RemoveButton onClick={() => removeListItem('skills', index)} />
                  </div>
                  <TextInput id="skill[]" label="Naam" placeholder="Project management" value={skill.skill} onChange={value => updateListItem('skills', index, 'skill', value)} />
                  <SkillLevelSelect value={skill.level} onChange={value => updateListItem('skills', index, 'level', value)} />
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <h4 className="text-2xl">Talen</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cvData.languages.map((lang: any, index: number) => (
                <div key={index} className="p-2 relative flex space-y-4 space-x-4 rounded-2xl border-2 border-orange-500">
                  <div className="absolute flex gap-2 -top-4 right-1 space-x-2">
                    <AddButton onClick={() => addListItem('languages', { language: '', level: '' })} />
                    <RemoveButton onClick={() => removeListItem('languages', index)} />
                  </div>
                  <LanguageSelect value={lang.language} onChange={value => updateListItem('languages', index, 'language', value)} />
                  <LanguageLevelSelect value={lang.level} onChange={value => updateListItem('languages', index, 'level', value)} />
                </div>
              ))}
            </div>

          </div>

          <button
            type="button"
            onClick={() => exportToPdf('pdf')}
            className="mb-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Download CV als PDF
          </button>
        </form>
      </div>

      {/* Builder preview */}
      <div className="flex justify-center p-8 border border-orange-500">
        <div id="pdf" className="bg-white" style={{ width: '210mm', minHeight: '297mm', padding: '16mm' }}>
          {/* @ts-ignore */}
          <Luna
            name={cvData.fullName}
            email={cvData.email}
            phone={cvData.phone}
            city={cvData.city}
            birthdate={cvData.birthdate}
            preferredFunction={cvData.preferredFunction}
            aboutMeDescription={cvData.aboutMeDescription}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            fontFamily={fontFamily}
            skills={cvData.skills}
            workExperiences={cvData.workExperiences}
            educations={cvData.educations}
            languages={cvData.languages}
          />
        </div>
      </div>
    </div>
  );
}
