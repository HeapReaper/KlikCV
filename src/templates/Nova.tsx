import type { CvBuilderType } from '../types/Templates';

export default function Nova({
  name,
  email,
  phone,
  city,
  birthdate,
  preferredFunction,
  aboutMeDescription,
  primaryColor,
  secondaryColor,
  fontFamily,
  skills,
  languages,
  workExperiences,
  educations,
}: CvBuilderType) {
  const fontMap: any = {
    "font-sans": "ui-sans-serif, system-ui, -apple-system, sans-serif",
    "font-serif": "ui-serif, Georgia, serif",
    "font-mono": "ui-monospace, SFMono-Regular, monospace",
  };

  return (
    <div
      style={{ fontFamily: fontMap[fontFamily] }}
      className="grid grid-cols-3 gap-7 p-1 bg-white text-gray-800"
    >
      {/* Sidebar */}
      <aside
        className="col-span-1 bg-gray-50 rounded-2xl pl flex flex-col gap-6 shadow-sm"
        style={{ borderColor: primaryColor }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold" style={{ color: primaryColor }}>
            {name || "John Doe"}
          </h1>
          <p className="text-sm text-gray-600">
            {preferredFunction || "Web Developer"}
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p>{city || "Amsterdam"}</p>
          <p>{birthdate || "01-01-2000"}</p>
          <a
            href={`mailto:${email}`}
            className="hover:underline break-words"
          >
            {email || "john.doe@example.com"}
          </a>
          <a href={`tel:${phone}`} className="hover:underline">
            {phone || "06-12345678"}
          </a>
        </div>

        {skills.length > 0 && skills[0].skill !== "" && (
          <div>
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: secondaryColor }}
            >
              Skills
            </h2>
            <ul className="space-y-1 text-sm">
              {skills.map((s, i) => (
                <li key={i}>{s.skill} - {s.level}</li>
              ))}
            </ul>
          </div>
        )}

        {languages.length > 0 && languages[0].language !== "" && (
          <div>
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: secondaryColor }}
            >
              Languages
            </h2>
            <ul className="space-y-1 text-sm">
              {languages.map((l, i) => (
                <li key={i}>{l.language} • {l.level}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main */}
      <main className="col-span-2 space-y-3">
        <section>
          <h2
            className="text-xl font-semibold border-b pb-1 mb-3"
            style={{ borderColor: secondaryColor, color: primaryColor }}
          >
            About Me
          </h2>
          <div
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: aboutMeDescription || "" }}
          />
        </section>

        <section>
          <h2
            className="text-xl font-semibold border-b pb-1 mb-3"
            style={{ borderColor: secondaryColor, color: primaryColor }}
          >
            Experience
          </h2>
          {workExperiences.map((exp, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-medium">{exp.jobTitle || "Functie"}</h3>
              <p className="text-sm text-gray-600">{exp.employer}</p>
              <p className="text-xs text-gray-500">
                {`${exp.startMonth}-${exp.startYear}`} → {exp.current ? "Now" : `${exp.endMonth}-${exp.endYear}`} ({exp.place})
              </p>
              {exp.description && (
                <div
                  className="text-sm mt-2"
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              )}
            </div>
          ))}
        </section>

        <section>
          <h2
            className="text-xl font-semibold border-b pb-1 mb-3"
            style={{ borderColor: secondaryColor, color: primaryColor }}
          >
            Education
          </h2>
          {educations.map((edu, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-medium">{edu.name}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-xs text-gray-500">
                {`${edu.startMonth}-${edu.startYear}`} → {edu.current ? "Now" : `${edu.endMonth}-${edu.endYear}`} ({edu.place})
              </p>
              {edu.description && (
                <div
                  className="text-sm mt-2"
                  dangerouslySetInnerHTML={{ __html: edu.description }}
                />
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
