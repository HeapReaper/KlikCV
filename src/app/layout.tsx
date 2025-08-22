import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/core/navbar";
import Footer from "@/app/components/core/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'KlikCV | Bouw jouw gratis CV in enkele minuten',
  description: 'Bouw eenvoudig een gratis CV met KlikCV zonder account. Kies een sjabloon, vul jouw gegevens in en download jouw CV binnen enkele minuten.',
  keywords: 'CV maken, gratis CV, CV template, CV generator, KlikCV',
  authors: [{ name: 'KlikCV' }],
  openGraph: {
    title: 'KlikCV | Bouw jouw gratis CV in enkele minuten',
    description: 'Bouw eenvoudig een gratis CV met KlikCV zonder account. Kies een sjabloon, vul jouw gegevens in en download jouw CV binnen enkele minuten.',
    url: 'https://klikcv.nl/',
    type: 'website',
    images: [
      {
        url: 'https://klikcv.nl/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KlikCV | Bouw jouw gratis CV in enkele minuten',
    description: 'Bouw eenvoudig een gratis CV met KlikCV zonder account. Kies een sjabloon, vul jouw gegevens in en download jouw CV binnen enkele minuten.',
    images: ['https://klikcv.nl/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Plausible analytics */}
        <script
          defer
          data-domain="klikcv.nl"
          src="https://analytics.heapreaper.nl/js/script.outbound-links.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.plausible = window.plausible || function() {
                  (window.plausible.q = window.plausible.q || []).push(arguments)
                }
              `,
          }}
        />
        {/* Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4182887018676693"
          crossOrigin="anonymous"
        />
        <title></title>
      </head>

      <body
        className={`
        ${geistSans.variable} ${geistMono.variable} antialiased
        bg-white text-gray-950
        dark:bg-gray-950 dark:text-white
      `}
      >
        <Navbar />

        <div className="mt-10 min-h-screen max-w-[800px] w-full mx-auto flex flex-col space-y-6 px-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
