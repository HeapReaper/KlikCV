import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQProps = {
  setAmount?: number;
}

const faqData = [
  {
    question: 'Hoe werkt deze gratis cv maker?',
    answer:
      'Je vult stap voor stap je gegevens in, kiest een sjabloon, en kunt direct je cv downloaden of printen.',
  },
  {
    question: 'Moet ik een account aanmaken?',
    answer:
      'Nee, je hoeft geen account aan te maken. Je kunt de cv-maker volledig gratis en zonder registratie gebruiken.',
  },
  {
    question: 'Is mijn data veilig?',
    answer:
      'Ja. We slaan geen persoonlijke gegevens op. Alles gebeurt lokaal in je browser.',
  },
  {
    question: 'Kan ik meerdere cv\'s maken?',
    answer:
      'Ja, je kunt zo vaak als je wilt een nieuw cv aanmaken en downloaden.',
  },
  {
    question: 'Hoe wordt deze website gefinancierd?',
    answer:
      'De website wordt gefinancierd door middel van advertenties. Deze helpen om de dienst gratis te houden voor alle gebruikers.',
  },
  {
    question: 'Kan ik mijn cv later nog aanpassen?',
    answer:
      'Ja, je CV wordt automatisch in je browser opgeslagen. Voor langdurige opslag kun je binnenkort een account aanmaken.',
  },
  {
    question: 'Ondersteunt de cv maker meerdere talen?',
    answer:
      'Momenteel nog niet.',
  },
  {
    question: 'Wat is het beste formaat om mijn cv op te slaan?',
    answer:
      'Wij raden aan om je cv als PDF op te slaan. Dit zorgt ervoor dat de opmaak behouden blijft, ongeacht het apparaat of programma waarmee het wordt geopend.',
  },
  {
    question: 'Welke informatie moet ik sowieso op mijn cv zetten?',
    answer:
      'Zorg dat je persoonlijke gegevens, werkervaring, opleidingen en relevante vaardigheden vermeld staan. Voeg optioneel een korte profielschets of hobby’s toe.',
  },
  {
    question: 'Hoe lang mag mijn cv zijn?',
    answer:
      'Voor de meeste functies is 1 tot 2 pagina’s ideaal. Wees beknopt en relevant, vooral bij het opsommen van werkervaring en opleidingen.',
  },
  {
    question: 'Moet ik een profielfoto toevoegen aan mijn cv?',
    answer:
      'Een foto is optioneel. In sommige landen of sectoren is het gebruikelijk, in andere juist af te raden omwille van discriminatiepreventie.',
  },
  {
    question: 'Wat zijn veelgemaakte fouten bij het maken van een cv?',
    answer:
      'Veelgemaakte fouten zijn spelfouten, onduidelijke opmaak, te lange teksten, irrelevante informatie en een onprofessioneel e-mailadres.',
  },
  {
    question: 'Hebben jullie tips om op te vallen met mijn cv?',
    answer:
      'Gebruik een professioneel en modern sjabloon, schrijf een krachtige profielschets bovenaan je cv en pas je cv aan op de vacature waarop je solliciteert.',
  },
  {
    question: 'Kan ik mijn LinkedIn-profiel toevoegen?',
    answer:
      'Ja, dat is een goede toevoeging. Voeg je LinkedIn-profiel toe onder je contactgegevens, vooral als het goed up-to-date is.',
  }
];

export default function FAQ({ setAmount }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsToShow = setAmount ? faqData.slice(0, setAmount) : faqData;

  if (faqsToShow && faqsToShow.length < faqData.length) {
  }

  return (
    <div className="space-y-4">
      {faqsToShow.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-xl p-4 transition hover:shadow-md bg-white"
        >
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-orange-500"/>
            ) : (
              <ChevronDown className="h-5 w-5 text-orange-500"/>
            )}
          </button>
          {openIndex === index && (
            <div className="mt-3 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}

      {faqsToShow.length < faqData.length && (
        <p className="text-center text-sm text-gray-600 mt-4">
          Voor alle veelgestelde vragen ga naar onze <a href="/faq" className="underline">FAQ</a>
        </p>
      )}
    </div>
  );
}
