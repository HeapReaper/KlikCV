import getAndParseFaqs from "@/app/utils/getAndParseFaqs";
import type { FaqType } from "@/app/types/faq";
import FAQClient from "@/app/components/core/faqClient";

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
    </div>
    );
}
