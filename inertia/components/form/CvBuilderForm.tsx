import { ReactElement, useState } from "react";
import FullName from "~/components/input/FullName";
import Email from "~/components/input/Email";
import Birthdate from "~/components/input/Birthdate";
import City from "~/components/input/City";
import Phone from "~/components/input/Phone";
import PersonDescription from "~/components/input/PersonDescription";
import Title from "~/components/input/Title";
import SubmitButton from "~/components/buttons/Submit";

import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";

export default function CvBuilderForm({ formData, setFormData }: CvBuilderFormProps): ReactElement {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

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
              onChange={(value: string) => setFormData((prev) => ({ ...prev, fullName: value }))}
            />

            <Email
              value={formData.email}
              onChange={(value: string) => setFormData((prev) => ({ ...prev, email: value }))}
            />

            <Birthdate
              value={formData.birthdate}
              onChange={(value: string) => setFormData((prev) => ({ ...prev, birthdate: value }))}
            />

            <City
              value={formData.city}
              onChange={(value: string) => setFormData((prev) => ({ ...prev, city: value }))}
            />

            <Phone
              value={formData.phone}
              onChange={(value: string) => setFormData((prev) => ({ ...prev, phone: value }))}
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
              onChange={(value: string) => setFormData((prev) => ({ ...prev, title: value }))}
            />

            <PersonDescription
              value={formData.personDescription}
              onChange={(value: string) => setFormData((prev) => ({ ...prev, personDescription: value }))}
            />
          </>
        )}
      </div>

      <SubmitButton label="Genereer" />
    </form>
  );
}
