import { useState, useEffect } from 'preact/hooks';
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
import TextInput from '../components/inputs/Text';
import SkillLevelSelect from '../components/select/LevelSelect';
import { exportToPdf } from '../utils/exportToPdf';
import TemplateSelect from '../components/select/TemplateSelect';
import { getCookie, setCookie } from '../utils/cookies';
import FileInput from '../components/inputs/File';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

// Templates
// TODO: make it extend itself by adding files in /src/templates
import Luna from '../templates/Luna';
import Nova from '../templates/Nova';
import Orion from '../templates/Orion';

export default function CvBuilder() {
  const [cvData, setCvData] = useCvState({
    primaryColor: 'F97316',
    secondaryColor: 'F97316',
    font: 'font-sans',
    template: 'Luna',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    birthdate: '',
    preferredFunction: '',
    aboutMeDescription: '',
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
    certifications: [
      {
        name: '',
        month: new Date().toLocaleString('nl-NL', { month: 'long' }),
        year: new Date().getFullYear(),
        current: false,
        description: '',
      }
    ]
  });

  const [collapsedSections, setCollapsedSections] = useState(() => {
    const cookie = getCookie('collapsedSections');
    return cookie ? JSON.parse(cookie) : {
      theme: false,
      personalInfo: false,
      aboutMe: false,
      education: false,
      workExperience: false,
      certifications: false,
      skills: false,
      languages: false,
    };
  });

  const toggleSection = (section: string) => {
    const updated = { ...collapsedSections, [section]: !collapsedSections[section] };
    setCollapsedSections(updated);
    setCookie('collapsedSections', JSON.stringify(updated));
  };

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

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  useEffect(() => {
    setProfilePicture(loadFromLocalStorage('profilePicture'));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
      {/* Builder form */}
      <div>
        <form className="space-y-4 ps-2 pe-2 rounded-2xl">
          {/* Theme */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('theme')}>
              <h4 className="text-2xl">
                Thema <span className="text-orange-500">{collapsedSections.theme ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.theme && (
              <div className="space-y-4 p-4  rounded-lg shadow-md w-full max-w-sm">
                <div className="flex gap-4">
                  <ColorPicker label="Primary kleur" value={cvData.primaryColor} onChange={value => updateCvData('primaryColor', value)} />
                  <ColorPicker label="Secondary kleur" value={cvData.secondaryColor} onChange={value => updateCvData('secondaryColor', value)} />
                </div>
                <div className="flex gap-4">
                  <FontFamilySelect value={cvData.fontFamily} onChange={value => updateCvData('fontFamily', value)} />
                  <TemplateSelect value={cvData.template} onChange={value => updateCvData('template', value)} />
                </div>
              </div>
            )}
          </div>

          {/* Personal info */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('personalInfo')}>
              <h4 className="text-2xl">
                Persoonlijk <span className="text-orange-500">{collapsedSections.personalInfo ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.personalInfo && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FullName value={cvData.fullName} onChange={value => updateCvData('fullName', value)} />
                <Email value={cvData.email} onChange={value => updateCvData('email', value)} />
                <Phone value={cvData.phone} onChange={value => updateCvData('phone', value)} />
                <City value={cvData.city} onChange={value => updateCvData('city', value)} />
                <Birthdate value={cvData.birthdate} onChange={value => updateCvData('birthdate', value)} />
              </div>
            )}
          </div>

          {/* About me */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('aboutMe')}>
              <h4 className="text-2xl">
                Over mij <span className="text-orange-500">{collapsedSections.aboutMe ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.aboutMe && (
              <>
                <TextInput
                  label="Gewenste functie"
                  placeholder="Gewenste functie"
                  value={cvData.preferredFunction} onChange={value => updateCvData('preferredFunction', value)}
                />
                <AboutMeDescription
                  value={cvData.aboutMeDescription}
                  onChange={html => updateCvData('aboutMeDescription', html)}
                />

                <FileInput
                  id="profilePicture"
                  label="Profiel foto"
                  accept="image/*"
                  onChange={(e: any) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      saveToLocalStorage("profilePicture", file);
                      const reader = new FileReader();
                      reader.onload = () => {
                        setProfilePicture(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />

              </>
            )}

          </div>

          {/* Education */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('education')}>
              <h4 className="text-2xl">
                Opleiding <span className="text-orange-500">{collapsedSections.education ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.education && (
              <div className="space-y-2">
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
                          <p className="font-medium text-gray-700 dark:text-white">Startdatum</p>
                          <div className="flex space-x-4 gap-2">
                            <MonthSelect value={education.startMonth} onChange={value => updateListItem('educations', index, 'startMonth', value)} />
                            <YearSelect value={education.startYear} onChange={value => updateListItem('educations', index, 'startYear', value)} />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-700 dark:text-white">Einddatum</p>
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
            )}
          </div>

          {/* Work experience */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('workExperience')}>
              <h4 className="text-2xl">
                Werkervaring <span className="text-orange-500">{collapsedSections.workExperience ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.workExperience && (
              <div className="space-y-2">
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
                          <p className="font-medium text-gray-700 dark:text-white">Startdatum</p>
                          <div className="flex space-x-4 gap-2">
                            <MonthSelect value={experience.startMonth} onChange={month => updateListItem('workExperiences', index, 'startMonth', month)} />
                            <YearSelect value={experience.startYear} onChange={year => updateListItem('workExperiences', index, 'startYear', Number(year))} />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-700 dark:text-white">Einddatum</p>
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
                      <p className="font-medium text-gray-700 dark:text-white">Omschrijving</p>
                      <RichTextEditor value={experience.description} onChange={val => updateListItem('workExperiences', index, 'description', val)} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Certificates */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('certifications')}>
              <h4 className="text-2xl">
                Certificaten <span className="text-orange-500">{collapsedSections.certifications ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.certifications && (
              <div className="space-y-2">
                {cvData.certifications?.map((cert: any, index: number) => (
                  <div
                    key={index}
                    className="p-2 relative space-y-4 rounded-2xl border-2 border-orange-500"
                  >
                    {/* Add / Remove Buttons */}
                    <div className="absolute flex gap-2 -top-4 right-1">
                      <AddButton
                        onClick={() =>
                          addListItem('certifications', {
                            name: '',
                            month: '',
                            year: '',
                            current: false,
                            description: '',
                          })
                        }
                      />
                      <RemoveButton onClick={() => removeListItem('certifications', index)} />
                    </div>

                    {/* Certification Name */}
                    <TextInput
                      id={`cert-name-${index}`}
                      label="Naam"
                      placeholder="Certificaat naam"
                      value={cert.name}
                      onChange={value =>
                        updateListItem('certifications', index, 'name', value)
                      }
                    />

                    {/* Month, Year, Current */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex space-x-4 gap-2">
                        <div>
                          <p className="font-medium text-gray-700 dark:text-white">Datum</p>
                          <div className="flex space-x-4 gap-2">
                            <MonthSelect
                              value={cert.month}
                              onChange={month =>
                                updateListItem('certifications', index, 'month', month)
                              }
                            />
                            <YearSelect
                              value={cert.year}
                              onChange={year =>
                                updateListItem('certifications', index, 'year', Number(year))
                              }
                            />
                          </div>
                        </div>
                        <div className="flex items-center mt-6">
                          <CheckBox
                            label="Huidig"
                            checked={cert.current}
                            onChange={checked =>
                              updateListItem('certifications', index, 'current', checked)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="font-medium text-gray-700 dark:text-white">Omschrijving</p>
                      <RichTextEditor
                        value={cert.description}
                        onChange={val =>
                          updateListItem('certifications', index, 'description', val)
                        }
                      />
                    </div>
                  </div>

                ))}
              </div>
            )}
          </div>

          {/* Skills */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('skills')}>
              <h4 className="text-2xl">
                Skills <span className="text-orange-500">{collapsedSections.skills ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.skills && (
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
            )}
          </div>

          {/* Languages */}
          <div className="p-2 space-y-2 rounded-2xl border-2 border-orange-500">
            <button type="button" className="w-full text-left" onClick={() => toggleSection('languages')}>
              <h4 className="text-2xl">
                Talen <span className="text-orange-500">{collapsedSections.languages ? '▼' : '▲'}</span>
              </h4>
            </button>

            {collapsedSections.languages && (
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
            )}
          </div>

          {/* Custom section*/}

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
      <div className="flex justify-center border-2 border-orange-500 rounded-xl">
        <div id="pdf" className="bg-white" style={{ width: '210mm', minHeight: '297mm', padding: '10mm' }}>
          {cvData.template === 'Luna' && (
            <Luna
              name={cvData.fullName}
              email={cvData.email}
              phone={cvData.phone}
              city={cvData.city}
              birthdate={cvData.birthdate}
              preferredFunction={cvData.preferredFunction}
              aboutMeDescription={cvData.aboutMeDescription}
              profilePicture={profilePicture}
              primaryColor={cvData.primaryColor}
              secondaryColor={cvData.secondaryColor}
              fontFamily={cvData.fontFamily}
              skills={cvData.skills}
              workExperiences={cvData.workExperiences}
              educations={cvData.educations}
              certifications={cvData.certifications}
              languages={cvData.languages}
            />
          )}

          {cvData.template === 'Nova' && (
            <Nova
              name={cvData.fullName}
              email={cvData.email}
              phone={cvData.phone}
              city={cvData.city}
              birthdate={cvData.birthdate}
              preferredFunction={cvData.preferredFunction}
              aboutMeDescription={cvData.aboutMeDescription}
              profilePicture={profilePicture}
              primaryColor={cvData.primaryColor}
              secondaryColor={cvData.secondaryColor}
              fontFamily={cvData.fontFamily}
              skills={cvData.skills}
              workExperiences={cvData.workExperiences}
              educations={cvData.educations}
              certifications={cvData.certifications}
              languages={cvData.languages}
            />
          )}

          {cvData.template === 'Orion' && (
            <Orion
              name={cvData.fullName}
              email={cvData.email}
              phone={cvData.phone}
              city={cvData.city}
              birthdate={cvData.birthdate}
              preferredFunction={cvData.preferredFunction}
              aboutMeDescription={cvData.aboutMeDescription}
              profilePicture={profilePicture}
              primaryColor={cvData.primaryColor}
              secondaryColor={cvData.secondaryColor}
              fontFamily={cvData.fontFamily}
              skills={cvData.skills}
              workExperiences={cvData.workExperiences}
              educations={cvData.educations}
              certifications={cvData.certifications}
              languages={cvData.languages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
