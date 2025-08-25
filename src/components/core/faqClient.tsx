"use client";

import { useState } from "react";
import type { FaqType } from "@/types/faq";

interface FAQClientProps {
  faqs: FaqType[];
}

export default function FAQClient({ faqs }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs.length) return <p>Loading FAQs...</p>;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-2 border-solid border-orange-500 rounded-xl p-4 transition dark:bg-gray-950 dark:text-white bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-lg font-semibold">{faq.title}</span>
              <span className="text-orange-500">{isOpen ? "▼" : "▲"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                isOpen ? "max-h-screen opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="prose prose-neutral text-black max-w-none marker:text-black dark:bg-gray-950 dark:text-white bg-white"
                dangerouslySetInnerHTML={{ __html: faq.content || "" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
