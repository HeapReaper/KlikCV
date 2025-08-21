import { useEffect, useState } from 'preact/hooks';

type Consent = 'personalized' | 'non-personalized' | null;

interface FooterAdProps {
  route: string;
}

export default function FooterAd({ route }: FooterAdProps) {
  const [consent, setConsent] = useState<Consent>(null);

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

    const pushAd = () => {
      const ins = document.querySelector('.adsbygoogle') as HTMLDivElement;
      if (!ins) return;

      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push(
          consent === 'non-personalized' ? { params: { npa: 1 } } : {}
        );
      } catch (e) {
        console.error('Adsense error:', e);
      }
    };

    // wait for DOM complete render
    requestAnimationFrame(pushAd);
  }, [consent, route]);

  if (!consent) return null;

  return (
    <div className="mt-2">
      <ins
        key={route}
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
