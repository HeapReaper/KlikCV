import { useEffect, useState } from 'preact/hooks';

export default function FooterAd() {
  const [consent, setConsent] = useState<'personalized' | 'non-personalized' | null>(null);

  useEffect(() => {
    const cookieMatch = document.cookie.match(/(^| )cookieAccepted=([^;]+)/);
    if (cookieMatch) {
      if (cookieMatch[2] === 'true') {
        setConsent('personalized');
      } else if (cookieMatch[2] === 'non-personalized') {
        setConsent('non-personalized');
      }
    }
  }, []);

  useEffect(() => {
    if (!consent) return;

    try {
      if (consent === 'non-personalized') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({
          params: { npa: 1 },
        });
      } else {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, [consent]);

  if (!consent) {
    return null;
  }

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-format="fluid"
         data-ad-layout-key="-fb+5w+4e-db+86"
         data-ad-client="ca-pub-4182887018676693"
         data-ad-slot="2439643612">
    </ins>
  );
}
