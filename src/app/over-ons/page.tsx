import BottomAd from "@/components/ads/bottom";
import {getAndParse} from "@/utils/getandParseMarkup";
import ShowParsed from "@/components/core/showParsed";

export default async function AboutPage() {
  const article: string = await getAndParse('about-us.md');

  return (
    <>
      <div className="max-w-[800px]">
        <ShowParsed html={article} />

        <div className="mt-3">
          <BottomAd />
        </div>
      </div>
    </>
  )
}
