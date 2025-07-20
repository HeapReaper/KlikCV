import { ReactElement, useState } from "react";
import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
import Birthdate from "~/components/input/Birthdate";
import City from "~/components/input/City";
import Phone from "~/components/input/Phone";
import PersonDescription from "~/components/input/PersonDescription";
import Title from "~/components/input/Title";
import SubmitButton from "~/components/buttons/Submit";
import HobbyInput from "~/components/input/HobbyInput";
import WorkExperience from "~/components/input/WorkExperience";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function CvBuilderForm({ formData, setFormData }: CvBuilderFormProps): ReactElement {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hobbiesOpen, setHobbiessOpen] = useState(false);
  const [workExperiencesOpen, setWorkExperiencesOpen] = useState(false);

  return (
    <form
      className="max-w-3xl mx-auto space-y-3 bg-white p-3 rounded-2xl shadow-md border-orange-500 border-2"
    >
      {/* Personal info */}
      <div>
        <h5
          className="text-xl font-bold cursor-pointer select-none flex justify-between items-center"
          onClick={() => setPersonalInfoOpen(!personalInfoOpen)}
          aria-expanded={personalInfoOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setPersonalInfoOpen(!personalInfoOpen);
            }
          }}
        >
          Persoonlijke info
          <span className="text-orange-500">{personalInfoOpen ? "▲" : "▼"}</span>
        </h5>

        {personalInfoOpen && (
          <>
            <FullName
              value={formData.fullName}
              onChange={(value: string) => setFormData((prev) => ({...prev, fullName: value}))}
            />

            <Email
              value={formData.email}
              onChange={(value: string) => setFormData((prev) => ({...prev, email: value}))}
            />

            <Birthdate
              value={formData.birthdate}
              onChange={(value: string) => setFormData((prev) => ({...prev, birthdate: value}))}
            />

            <City
              value={formData.city}
              onChange={(value: string) => setFormData((prev) => ({...prev, city: value}))}
            />

            <Phone
              value={formData.phone}
              onChange={(value: string) => setFormData((prev) => ({...prev, phone: value}))}
            />
          </>
        )}
      </div>

      {/* Profile */}
      <div>
        <h5
          className="text-xl font-bold cursor-pointer select-none flex justify-between items-center"
          onClick={() => setProfileOpen(!profileOpen)}
          aria-expanded={profileOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setProfileOpen(!profileOpen);
            }
          }}
        >
          Profiel
          <span className="text-orange-500">{profileOpen ? "▲" : "▼"}</span>
        </h5>

        {profileOpen && (
          <>
            <Title
              value={formData.title}
              onChange={(value: string) => setFormData((prev) => ({...prev, title: value}))}
            />

            <PersonDescription
              value={formData.personDescription}
              onChange={(value: string) => setFormData((prev) => ({...prev, personDescription: value}))}
            />
          </>
        )}
      </div>

      {/* Hobbies */}
      <div className="space-y-2">
        <h5 className="text-xl font-bold cursor-pointer select-none flex justify-between items-center"
            onClick={() => setHobbiessOpen(!hobbiesOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={hobbiesOpen}
        >
          Hobby's en Intresses
          <span className="text-orange-500">{hobbiesOpen ? "▲" : "▼"}</span>
        </h5>

        {hobbiesOpen && (
          <>
            {formData.hobbies.map((hobby, index) => (
              <HobbyInput
                key={index}
                name={hobby.name}
                description={hobby.description}
                onNameChange={(value) =>
                  setFormData((prev) => {
                    const hobbies = [...prev.hobbies];
                    hobbies[index].name = value;
                    return {...prev, hobbies};
                  })
                }
                onDescriptionChange={(value) =>
                  setFormData((prev) => {
                    const hobbies = [...prev.hobbies];
                    hobbies[index].description = value;
                    return {...prev, hobbies};
                  })
                }
                onRemove={() =>
                  setFormData((prev) => {
                    const hobbies = [...prev.hobbies];
                    hobbies.splice(index, 1);
                    return {...prev, hobbies};
                  })
                }
              />
            ))}

            <button
              type="button"
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  hobbies: [...prev.hobbies, {name: "", description: ""}],
                }))
              }
            >
              + Hobby toevoegen
            </button>
          </>
        )}
      </div>

      {/* Work Experience */}
      <div>
        <h5 className="text-xl font-bold cursor-pointer select-none flex justify-between items-center"
            onClick={() => setWorkExperiencesOpen(!workExperiencesOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={workExperiencesOpen}
        >
          Werkervaring
          <span className="text-orange-500">{workExperiencesOpen ? "▲" : "▼"}</span>
        </h5>

        {workExperiencesOpen && (
          <>
            {formData.workExperiences.map((workExperience, index) => {
              return (
                <WorkExperience
                  key={index}
                  position={workExperience.position}
                  company={workExperience.company}
                  location={workExperience.location}
                  startDate={workExperience.startDate}
                  endDate={workExperience.endDate}
                  description={workExperience.description}
                  onPositionChange={(value) => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated[index].position = value;
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                  onCompanyChange={(value) => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated[index].company = value;
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                  onLocationChange={(value) => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated[index].location = value;
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                  onStartDateChange={(value) => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated[index].startDate = value;
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                  onEndDateChange={(value) => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated[index].endDate = value;
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                  onDescriptionChange={(value) => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated[index].description = value;
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                  onRemove={() => {
                    setFormData((prev) => {
                      const updated = [...prev.workExperiences];
                      updated.splice(index, 1);
                      return { ...prev, workExperiences: updated };
                    });
                  }}
                />
              );
            })}
          </>
        )}
      </div>

      <SubmitButton label="Genereer"/>
    </form>
  ) as React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
}
