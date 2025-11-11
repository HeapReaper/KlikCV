import type { CvBuilderType } from '@/types/templates';
import { fontMap } from '@/config/fonts';
import { formatDate } from '@/utils/formatDate';

export const settings = {
  padding: '10' as const,
};

export default function Luna({
  name,
  email,
  phone,
  city,
  birthdate,
  preferredFunction,
  aboutMeDescription,
  profilePicture,
  primaryColor,
  secondaryColor,
  fontFamily,
  skills,
  languages,
  workExperiences,
  educations,
  certifications,
}: CvBuilderType) {
  return (
    <>
      <div style={{ fontFamily: fontMap[fontFamily] }}>
        <header role="banner" className="pb-4 text-black">
          <h1 className="text-3xl font-bold mt-3">
            {name || "John Doe"}
          </h1>
          <h1 className="text-xl" style={{ color: primaryColor }}>
            {preferredFunction || "Web Developer"}
          </h1>
          <address className="not-italic mt-2 text-gray-600 space-y-1 text-sm">
            <div className="grid grid-cols-3 gap-4">
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="size-4 mr-1" style={{ color: primaryColor }}>
                  <path fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"/>
                </svg>
                <a href="tel:+31 6 12345678"
                   className=" hover:underline focus:outline-2" style={{ outlineColor: primaryColor }}>
                  {phone || "06-123456780"}
                </a>
              </p>

              {/*
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="currentColor"
                     viewBox="0 0 24 24" style={{ color: primaryColor }}>
                  <path
                    d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11.667 19h-3v-9h3zm-1.5-10.271a1.726 1.726 0 110-3.451 1.726 1.726 0 010 3.451zm13.167 10.271h-3v-4.671c0-1.115-.021-2.55-1.554-2.55-1.557 0-1.794 1.216-1.794 2.472v4.749h-3v-9h2.885v1.228h.041a3.165 3.165 0 012.847-1.563c3.044 0 3.607 2.005 3.607 4.609z"/>
                </svg>
                <a href="https://nl.linkedin.com/idk" target="_blank" rel="noopener noreferrer"
                   className=" hover:underline focus:outline-2" style={{ outlineColor: primaryColor }}>
                  nl.linkedin.com/idk
                </a>
              </p>
              */}

              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-1" style={{ color: primaryColor }}>
                  <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v2h-8V6a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1zm-7 7h14a1 1 0 0 1 1 1v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a1 1 0 0 1 1-1zm3 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z" clipRule="evenodd"/>
                </svg>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"
                   className=" hover:underline focus:outline-2" style={{ outlineColor: primaryColor }}>
                  {formatDate(birthdate) || "1-1-2000"}
                </a>
              </p>

              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="size-5 mr-2" style={{ color: primaryColor }}>
                  <path
                    d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/>
                  <path
                    d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/>
                </svg>
                {city || "Amsterdam"}
              </p>

              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="size-4 mr-1" style={{ color: primaryColor }}>
                  <path
                    d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z"/>
                  <path
                    d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z"/>
                </svg>
                <a href={`mailto:${email}`}
                   className=" hover:underline focus:outline-2" style={{ outlineColor: primaryColor }}>
                  {email || "john.doe@example.com"}
                </a>
              </p>
            </div>
          </address>
        </header>

        <main role="main" className="space-y-8">
          <section>
            <h2
              className="text-2xl font-semibold text-black border-b-4 pb-1 mb-3"
              style={{ borderColor: secondaryColor }}
            >
              Over mij
            </h2>

            <div className="flex flex-wrap gap-4 items-center">
              {profilePicture && (
                <div className="flex-shrink-0 flex items-center">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-32 h-32 object-cover rounded-full shadow-md"
                  />
                </div>
              )}

              <div className="text-gray-800 text-sm max-w-prose">
                <div
                  dangerouslySetInnerHTML={{ __html: aboutMeDescription || "" }}
                />
              </div>
            </div>
          </section>

          {educations.length > 0 && educations[0].name !== '' && (
            <section>
              <h2 className="text-2xl font-semibold text-black dark:text-black border-b-4 pb-1 mb-3" style={{ borderColor: secondaryColor }}>Opleiding</h2>
              {educations.map((edu, index: number) => (
                <article className="mb-5" key={index}>
                  <h3 className="text-xl text-black dark:text-black mb-1">{edu.name || 'BSc Computer Science'}</h3>
                  <h3 className="text-lg mb-1 dark:text-black" style={{ color: primaryColor }}>
                    {edu.institution || 'Universiteit van Amsterdam'}
                  </h3>
                  <p className="flex items-center space-x-2 text-sm dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-4 mr-1" style={{ color: primaryColor }}>
                      <path
                        d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
                      <path fill="evenodd"
                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                            clipRule="evenodd"/>
                    </svg>
                    {edu.startMonth.slice(0, 3)}-{edu.startYear} - {edu.current ? 'Huidig' : `${edu.endMonth?.slice(0, 3)}-${edu.endYear}`}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-4 mr ml-1" style={{ color: primaryColor }}>
                      <path fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"/>
                    </svg>
                    {edu.place}
                  </p>
                  {edu.description && (
                    <div className="prose prose-sm text-gray-800 mt-2" dangerouslySetInnerHTML={{ __html: edu.description }}/>
                  )}
                </article>
              ))}
            </section>
          )}

          {workExperiences.length > 0 && workExperiences[0].jobTitle !== '' && (
            <section>
              <h2 className="text-2xl font-semibold text-black border-b-4 pb-1 mb-3" style={{ borderColor: secondaryColor }}>Werkervaring</h2>
              {workExperiences.map((exp, index) => (
                <article key={index} aria-labelledby={`functie${index}-heading`} className="mb-5">
                  <h3 id={`functie${index}-heading`} className="text-xl text-black mb-1">
                    {exp.jobTitle || "Functie"}
                  </h3>
                  <h3 className="text-lg mb-1 dark:text-black" style={{ color: primaryColor }}>
                    {exp.employer || "Werkgever"}
                  </h3>
                  <p className="flex items-center space-x-2 text-gray-700 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-4 mr-1" style={{ color: primaryColor }}>
                      <path
                        d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
                      <path fillRule="evenodd"
                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                            clipRule="evenodd"/>
                    </svg>
                    {`${exp.startMonth.slice(0, 3)}-${exp.startYear}`} - {exp.current ? 'Huidig' : `${exp.endMonth?.slice(0, 3)}-${exp.endYear}`}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-4 mr ml-1" style={{ color: primaryColor }}>
                      <path fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"/>
                    </svg>
                    {exp.place}
                  </p>
                  {exp.description && (
                    <div className="prose prose-sm text-gray-800 mt-2" dangerouslySetInnerHTML={{ __html: exp.description }}/>
                  )}
                </article>
              ))}
            </section>
          )}

          {certifications.length > 0 && certifications[0].name !== '' && (
            <section>
              <h2 className="text-2xl font-semibold text-black border-b-4 pb-1 mb-3" style={{ borderColor: secondaryColor }}>
                Certificaten
              </h2>
              {certifications.map((cert, index) => (
                <article key={index} aria-labelledby={`functie${index}-heading`} className="mb-5">
                  <h3 id={`functie${index}-heading`} className="text-xl text-black mb-1">
                    {cert.name || ""}
                  </h3>
                  <p className="flex items-center space-x-2 text-gray-700 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="size-4 mr-1" style={{ color: primaryColor }}>
                      <path
                        d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
                      <path fillRule="evenodd"
                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                            clipRule="evenodd"/>
                    </svg>
                    {cert.current ? 'Huidig' : `${cert.month?.slice(0, 3)}-${cert.year}`}
                  </p>
                  {cert.description && (
                    <div className="prose prose-sm text-gray-800 mt-2" dangerouslySetInnerHTML={{ __html: cert.description }}/>
                  )}
                </article>
              ))}
            </section>
          )}


          {skills.length > 0 && skills[0].skill !== '' && (
            <section>
              <h2
                className="text-2xl font-semibold text-black border-b-4 pb-1 mb-3"
                style={{ borderColor: secondaryColor }}
              >
                Vaardigheden
              </h2>
              <ul
                className={`list-disc list-inside space-y-1 text-gray-800 text-base ${
                  skills.length > 3 ? 'grid grid-cols-2 gap-x-4 gap-y-1 list-inside' : ''
                }`}
              >
                {skills.map((skill, index) => (
                  <li key={index}>
                    {skill.skill} - {skill.level}
                  </li>
                ))}
              </ul>
            </section>
          )}


          {languages.length > 0 && languages[0].language !== '' && (
            <section>
              <h2
                className="text-2xl font-semibold text-black border-b-4 pb-1 mb-3"
                style={{ borderColor: secondaryColor }}
              >
                Talen
              </h2>
              <ul
                className={`list-disc list-inside space-y-1 text-gray-800 text-base ${
                  languages.length > 3 ? 'grid grid-cols-2 gap-x-4 gap-y-1 list-inside' : ''
                }`}
              >
                {languages.map((language, index) => (
                  <li key={index}>
                    {language.language} - {language.level}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>

        <footer role="contentinfo" className="mt-8 text-center text-gray-500 text-xs">
          <p>CV gegenereerd door {name || "John Doe"} &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}
