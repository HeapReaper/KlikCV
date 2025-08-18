import FAQ from '../components/core/Faq';

export default function Faq() {
  return (
    <div className="pt-4 h-full flex flex-col items-center">
      <div className="container max-w-4xl px-4">
        <h1 className="text-5xl font-bold text-orange-500 mb-8">
          Veelgestelde vragen
        </h1>
        <FAQ />
      </div>
    </div>
  )
}
