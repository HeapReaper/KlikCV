import type { CvBuilderType } from '@/types/templates';
import { fontMap} from '@/config/fonts';
import { formatDate } from '@/utils/formatDate';

export const settings = {
  padding: '0' as const,
};

export default function Orion({
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
  hobbies
}: CvBuilderType) {
  return (
    <div style={{fontFamily: fontMap[fontFamily]}} className="">
      <main className="mx-auto max-w-5xl bg-white text-black">
        <div className="grid md:grid-cols-[200px_1fr]">
          <aside
            className="text-black ps-3 pe-3 flex flex-col items-center gap-4"
            style={{ backgroundColor: primaryColor }}
          >
            <img
              src={profilePicture || 'https://placehold.co/30x30'}
              alt="Profielfoto"
              className="h-24 w-24 mt-12 rounded-full object-cover ring-4 ring-white/20"
            />

            <div className="font-semibold leading-tight text-center">
              <div className="text-2xl">
                {name || 'John Doe'}
              </div>
              <div className="text-black/90">
                {preferredFunction || 'Web developer'}
              </div>
            </div>

            <div className="mt-4 space-y-4 text-sm">
              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">
                  Personalia
                </h3>
                <ul className="space-y-1.5">
                  <li>
                    <div className="text-black/80">
                      Telefoonnummer
                    </div>
                    <div className="font-medium">
                      {phone || '06-12345678'}
                    </div>
                  </li>
                  <li>
                    <div className="text-black/80">
                      E-mailadres
                    </div>
                    <div className="font-medium">
                      {email || 'john.doe@example.com'}
                    </div>
                  </li>
                  <li>
                    <div className="text-black/80">
                      Woonplaats
                    </div>
                    <div className="font-medium">
                      {city || 'Amsterdam'}
                    </div>
                  </li>
                  <li>
                    <div className="text-black/80">
                      Geboortedatum
                    </div>
                    <div className="font-medium">
                      {formatDate(birthdate) || '01-01-2000'}
                    </div>
                  </li>
                </ul>
              </section>

              {skills.length > 0 && skills[0].skill !== '' && (
                <section>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">
                    Skills
                  </h3>
                  <ul className="list-disc list-inside space-y-1 font-medium">
                    {skills.map((skill, index) => (
                      <li key={index}>
                        {skill.skill}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {languages.length > 0 && languages[0].language !== '' && (
                <section>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Talen</h3>
                  <ul className="space-y-1 list-disc list-inside font-medium">
                    {languages.map((l, i) => (
                      <li key={i}>
                        {l.language} ({l.level})
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {hobbies.length > 0 && hobbies[0].name !== '' && (
                <section>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">
                    Hobby's
                  </h3>
                  <ul className="space-y-1 list-disc list-inside font-medium">
                    {hobbies.map((hobby, i) => (
                      <li key={i}>
                        {hobby.name}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/*
              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Referenties</h3>
                <p className="font-medium">Op verzoek beschikbaar</p>
              </section>
              */}
            </div>
          </aside>

          <section className="p-3">
            <header className="flex items-start justify-between gap-6">
              <div>
                <p className=" font-semibold text-black text-4xl -mt-1" style={{ color: primaryColor }}>
                  Curriculum Vitae
                </p>
                <h2 className="sr-only">
                  {name || 'John Doe'}
                </h2>
                <p className="mt-6 text-gray-700 max-w-2xl leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: aboutMeDescription }}
                >
                </p>
              </div>
            </header>

            <div className="mt-4 space-y-4 text-sm">
              {educations.length > 0 && educations[0].name !== '' && (
                <section>
                  <h3 className="text-xl font-semibold text-black">
                    Opleidingen
                  </h3>
                  <div className="mt-4 grid gap-6">
                    {educations.map((edu, index) => (
                      <article key={index} className="border-l-4  pl-4" style={{ borderColor: secondaryColor}}>
                        <div className="flex items-center justify-between text-black">
                          <h4 className="font-semibold">
                            {edu.name || 'Bachelor of Computer Science'}
                          </h4>
                          <span className="text-gray-500">
                          ({`${edu.startYear}-${edu.current ? 'Huidig' : edu.endYear}`})
                        </span>
                        </div>
                        <p className="text-gray-600">
                          {edu.institution || 'Uni Amsterdam'}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                          <p dangerouslySetInnerHTML={{ __html: edu.description }}>
                          </p>
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {workExperiences.length > 0 && workExperiences[0].jobTitle !== ""  && (
                <section>
                  <h3 className="text-xl font-semibold text-black">
                    Werkervaring
                  </h3>
                  <div className="mt-4 grid gap-6">
                    {workExperiences.map((exp, index) => (
                      <article key={index} className="border-l-4 pl-4" style={{ borderColor: secondaryColor}}>
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-black">
                            {exp.jobTitle || 'Developer'}
                          </h4>
                          <span className="text-gray-500">
                          ({`${exp.startYear}-${exp.current ? 'Huidig' : exp.endYear}`})
                        </span>
                        </div>
                        <p className="text-gray-600">
                          {exp.employer || 'Example Tech'}
                        </p>
                        <p className="text-gray-600"
                           dangerouslySetInnerHTML={{ __html: exp.description }}
                        >
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {certifications.length > 0 && certifications[0].name !== '' && (
                <section>
                  <h3 className="text-xl font-semibold text-black">
                    Certificaten
                  </h3>
                  <div className="mt-4 grid gap-6">
                    {certifications.map((cert: any, index: any) => (
                      <article key={index} className="border-l-4 pl-4" style={{ borderColor: secondaryColor}}>
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-black">
                            {cert.name}
                          </h4>
                          <span className="text-gray-500">
                            ({cert.current ? 'Huidig' : `${cert.month?.slice(0, 3)}-${cert.year}`})
                          </span>
                        </div>
                        <p className="text-gray-600">Betrokken bij de jeugdtraining, administratieve bijhoudingen en in
                          bijzonder bestuursondersteuning.</p>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <p className="mt-12 text-xs text-gray-500 text-center">
              {name || "John Doe"} &copy; {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
