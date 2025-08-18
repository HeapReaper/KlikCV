import type { CvBuilderType } from '../types/Templates';
import { fontMap} from '../config/fonts';

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
}: CvBuilderType) {
  return (
    <div style={{fontFamily: fontMap[fontFamily]}} className="bg-gray-100 p-4 md:p-8">
      <main className="mx-auto max-w-5xl shadow-xl bg-white">
        <div className="grid md:grid-cols-[300px_1fr]">
          <aside className="bg-orange-500 text-white p-6 md:p-8">
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop"
                   alt="Profielfoto" className="h-20 w-20 rounded-full object-cover ring-4 ring-white/20"/>
              <div className="font-semibold leading-tight">
                <div className="text-2xl">Robin Garcia</div>
                <div className="text-white/90">Muziekliefhebber • Starter</div>
              </div>
            </div>

            <div className="mt-8 space-y-7 text-sm">
              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Personalia</h3>
                <ul className="space-y-1.5">
                  <li>
                    <div className="text-white/80">Telefoonnummer</div>
                    <div className="font-medium">06-12345678</div>
                  </li>
                  <li>
                    <div className="text-white/80">E-mailadres</div>
                    <div className="font-medium">robin.garcia@outlook.com</div>
                  </li>
                  <li>
                    <div className="text-white/80">Adres</div>
                    <div className="font-medium">Boomerweg 34<br/>7830 MN Nietveld</div>
                  </li>
                  <li>
                    <div className="text-white/80">Geboortedatum</div>
                    <div className="font-medium">12-08-2004</div>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Skills</h3>
                <ul className="list-disc list-inside space-y-1 font-medium">
                  <li>Communicatieve vaardigheden</li>
                  <li>Organisatie en planning</li>
                  <li>Creatief probleemoplossen</li>
                  <li>Klantenservice</li>
                  <li>Teamspeler</li>
                </ul>
              </section>

              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Talen</h3>
                <ul className="space-y-1 font-medium">
                  <li>Spaans (C2 – tweede taal)</li>
                  <li>Engels (C1)</li>
                  <li>Nederlands (moedertaal)</li>
                </ul>
              </section>

              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Hobby's</h3>
                <ul className="space-y-1 font-medium">
                  <li>Concerten</li>
                  <li>Gitaar &amp; eigen muziek</li>
                  <li>Vlogs maken</li>
                  <li>Wielrennen</li>
                </ul>
              </section>

              <section>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-3 opacity-90">Referenties</h3>
                <p className="font-medium">Op verzoek beschikbaar</p>
              </section>
            </div>
          </aside>

          <section className="p-6 md:p-10">
            <header className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl font-semibold">Cv</h1>
                <p className="text-orange-500 font-semibold -mt-1">VOORBEELD</p>
                <h2 className="sr-only">Robin Garcia</h2>
                <p className="mt-6 text-gray-700 max-w-2xl leading-relaxed">
                  Hoi, ik ben Robin, een enthousiaste muziekliefhebber die net is afgestudeerd aan eventmanagement.
                  Mijn droom is om een dag mijn eigen muziekevents te runnen en met een zo groot mogelijk publiek te
                  werken op festivals en tours.
                  Daarom zet ik graag mijn eerste stappen bij een toffe startersfunctie in de event management wereld.
                </p>
              </div>
            </header>

            <div className="mt-10 space-y-10 text-sm">
              <section>
                <h3 className="text-xl font-semibold">Opleidingen</h3>
                <div className="mt-4 grid gap-6">
                  <article className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Hogeschool Utrecht</h4>
                      <span className="text-gray-500">(2023–2024)</span>
                    </div>
                    <p className="text-gray-600">Associate degree gericht op eventmanagement.</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                      <li>Stedentossier: evenement bedacht en georganiseerd met een projectgroep.</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold">Werkervaring</h3>
                <div className="mt-4 grid gap-6">
                  <article className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Freelance</h4>
                      <span className="text-gray-500">(2022–nu)</span>
                    </div>
                    <p className="text-gray-600">Gitaardocent aan beginners bij leerlingen thuis.</p>
                  </article>
                  <article className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Bureau Muziekmuze</h4>
                      <span className="text-gray-500">(2021–2022)</span>
                    </div>
                    <p className="text-gray-600">Help ik mee met organiseren van het jaarlijkse
                      muziekevenement <em>Muziekplein</em>.</p>
                  </article>
                  <article className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Altzher Hemij – <span className="italic">Bakker met overheerlijk brood</span>
                      </h4>
                      <span className="text-gray-500">(2020–2023)</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 mt-1">
                      <li>Achter de kassa en helpen van klanten.</li>
                      <li>Magazijn netjes en schoon houden.</li>
                      <li>Af en toe meedraaien, assisteren, taken vastpakken en meedenken.</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold">Nevenactiviteiten</h3>
                <div className="mt-4 grid gap-6">
                  <article className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Volleybalvereniging Smash</h4>
                      <span className="text-gray-500">(2019–nu)</span>
                    </div>
                    <p className="text-gray-600">Betrokken bij de jeugdtraining, administratieve bijhoudingen en in
                      bijzonder bestuursondersteuning.</p>
                  </article>
                </div>
              </section>
            </div>

            <p className="mt-12 text-xs text-gray-500">© 2025 Robin Garcia — CV Voorbeeld</p>
          </section>
        </div>
      </main>
    </div>
  );
}
