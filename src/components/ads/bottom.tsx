"use client";

import { useEffect, useState } from "react";

type Consent = "personalized" | "non-personalized" | null;

export default function BottomAd() {
  const [consent, setConsent] = useState<Consent>(null);

  // Read cookie on mount
  useEffect(() => {
    const cookieMatch = document.cookie.match(/(^| )cookieAccepted=([^;]+)/);
    if (cookieMatch) {
      if (cookieMatch[2] === "true") setConsent("personalized");
      else if (cookieMatch[2] === "non-personalized") setConsent("non-personalized");
    }
  }, []);

  // Push AdSense ad once consent is determined
  useEffect(() => {
    if (!consent) return;

    const pushAd = () => {
      const ins = document.querySelector(".adsbygoogle") as HTMLDivElement;
      if (!ins) return;

      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push(
          consent === "non-personalized" ? { params: { npa: 1 } } : {}
        );
      } catch (e) {
        console.error("Adsense error:", e);
      }
    };

    requestAnimationFrame(pushAd);
  }, [consent]);

  if (!consent) return null;

  return (
    <div className="mt-2">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-4182887018676693"
        data-ad-slot="2439643612"
      />
    </div>
  );
}
