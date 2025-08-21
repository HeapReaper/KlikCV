import Navbar from '../components/core/navbar';
import Footer from '../components/core/Footer';
import FooterAd from '../components/ads/FooterAd';
import CookieBanner from '../components/core/CookieBanner';

export default function MainLayout() {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />

      <main class="flex-grow ps-4 pe-4">
      </main>

      <FooterAd />

      <CookieBanner />

      <Footer />
    </div>
  );
}
