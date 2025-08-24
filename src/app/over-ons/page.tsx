import BottomAd from "@/components/ads/bottom";
import {getAndParse} from "@/utils/getandParseMarkup";
import ShowParsed from "@/components/core/showParsed";

export default async function AboutPage() {
  const article: string = await getAndParse('about-us.md');

  return (
    <>
      <ShowParsed html={article} />

      <BottomAd />
    </>
  )
}
