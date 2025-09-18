import getAndParseFaqs from "@/utils/getAndParseFaqs";
import type { FaqType } from "@/types/faq";
import FAQClient from "@/components/core/faqClient";
import BottomAd from "@/components/ads/bottom";

interface FAQPageProps {
  searchParams?: { setAmount?: string };
}

export default async function FAQPage({ searchParams }: FAQPageProps) {
  const allFaqs: FaqType[] = await getAndParseFaqs();

  const setAmount = searchParams?.setAmount
    ? parseInt(searchParams.setAmount, 10)
    : undefined;

  const faqs: FaqType[] = setAmount ? allFaqs.slice(0, setAmount) : allFaqs;

  return (
    <div className="mt-10 max-w-[800px] w-full mx-auto flex flex-col space-y-6 px-4">
      <FAQClient faqs={faqs} />

      {/*<div className="mt-3">*/}
      {/*  <BottomAd />*/}
      {/*</div>*/}
    </div>
    );
}
