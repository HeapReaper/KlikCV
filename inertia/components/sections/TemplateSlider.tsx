import LeftButton from "~/components/buttons/Left";
import RightButton from "~/components/buttons/Right";

export default function TemplateSlider() {
  return (
    <div className="space-y-4 bg-black rounded-lg pt-3 pb-3">
      <h1 className="text-5xl font-bold text-center text-orange-500">
        De leukste in-house gemaakte sjablonen
      </h1>


      <div className="mt-10 relative max-w-7xl mx-auto px-4">
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center">
            <img
              src="https://placehold.co/250x370"
              alt="Template Toronto"
              className="rounded mb-4 mx-auto"
            />
            <h3 className="font-bold text-lg">Toronto</h3>
            <p className="text-sm">87K gebruikers kozen dit template</p>
          </div>
          <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center">
            <img
              src="https://placehold.co/250x370"
              alt="Template Cornell"
              className="rounded mb-4 mx-auto"
            />
            <h3 className="font-bold text-lg">Cornell</h3>
            <p className="text-sm">76K gebruikers kozen dit template</p>
          </div>
          <div className="min-w-[250px] snap-start rounded-xl p-4 text-orange-500 text-center">
            <img
              src="https://placehold.co/250x370"
              alt="Template Cornell"
              className="rounded mb-4 mx-auto"
            />
            <h3 className="font-bold text-lg">Cornell</h3>
            <p className="text-sm">76K gebruikers kozen dit template</p>
          </div>
        </div>

        <LeftButton />
        <RightButton />
      </div>
    </div>
  );
}
