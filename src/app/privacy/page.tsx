import BottomAd from "@/components/ads/bottom";
import {getAndParse} from "@/utils/getandParseMarkup";
import ShowParsed from "@/components/core/showParsed";

export default async function PrivacyPage() {
  const article: string = await getAndParse('privacy.md');

  return (
    <>
      <ShowParsed html={article} />

      <BottomAd />
    </>
  )
}
