import FAQ from '../components/core/Faq';

export default function Faq() {
  return (
    <div className="pt-4 h-full flex flex-col">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-8">
          Veelgestelde vragen
        </h1>
        <FAQ />
      </div>
    </div>
  )
}
