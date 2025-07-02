import LeftButton from "~/components/buttons/Left";
import RightButton from "~/components/buttons/Right";

export default function TemplateSlider() {
  return (
    <div className="mt-10 relative max-w-7xl mx-auto px-4">
      <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-3 border-solid border-orange-500">
          <img
            src="https://placehold.co/250x370"
            alt="Template Toronto"
            className="rounded mb-4 mx-auto"
          />
          <h3 className="font-bold text-lg">
            Orion
          </h3>
          <p className="text-sm">
            69 gebruikers kozen dit template
          </p>
        </div>
        <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-3 border-solid border-orange-500">
          <img
            src="https://placehold.co/250x370"
            alt="Template Cornell"
            className="rounded mb-4 mx-auto"
          />
          <h3 className="font-bold text-lg">
            Luna
          </h3>
          <p className="text-sm">
            69 gebruikers kozen dit template
          </p>
        </div>
        <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-3 border-solid border-orange-500">
          <img
            src="https://placehold.co/250x370"
            alt="Template Cornell"
            className="rounded mb-4 mx-auto"
          />
          <h3 className="font-bold text-lg">
            Nova
          </h3>
          <p className="text-sm">
            69 gebruikers kozen dit template
          </p>
        </div>
        <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center border-3 border-solid border-orange-500">
          <img
            src="https://placehold.co/250x370"
            alt="Template Cornell"
            className="rounded mb-4 mx-auto"
          />
          <h3 className="font-bold text-lg">
            Solaris
          </h3>
          <p className="text-sm">
            69 gebruikers kozen dit template
          </p>
        </div>
      </div>

      <LeftButton />
      <RightButton />
    </div>
  );
}
