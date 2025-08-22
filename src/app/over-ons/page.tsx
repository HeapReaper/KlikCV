import BottomAd from "@/app/components/ads/bottom";
import {getAndParse} from "@/app/utils/getandParseMarkup";
import ShowParsed from "@/app/components/core/showParsed";

export default async function AboutPage() {
  const article: string = await getAndParse('about-us.md');

  return (
    <>
      <ShowParsed html={article} />

      <BottomAd />
    </>
  )
}
