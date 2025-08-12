import type { ComponentChildren } from 'preact';
import Navbar from '../components/core/navbar';
import Footer from '../components/core/Footer';
import FooterAd from '../components/ads/FooterAd';

type Props = {
  children: ComponentChildren;
};

export default function MainLayout({ children }: Props) {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />

      <main class="flex-grow p-4">
        {children}
      </main>

      <FooterAd />

      <Footer />
    </div>
  );
}
