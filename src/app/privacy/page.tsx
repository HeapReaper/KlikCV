import BottomAd from "@/components/ads/bottom";
import {getAndParse} from "@/utils/getandParseMarkup";
import ShowParsed from "@/components/core/showParsed";

export default async function PrivacyPage() {
  const article: string = await getAndParse('privacy.md');

  return (
    <>
      <div className="max-w-[800px]">
        <ShowParsed html={article} />

        <BottomAd />
      </div>
    </>
  )
}
