import { useState } from 'preact/hooks';
import Navbar from '../components/core/navbar';
import Footer from '../components/core/Footer';
import FooterAd from '../components/ads/FooterAd';
import CookieBanner from '../components/core/CookieBanner';
import { Router } from 'preact-router';
import Home from '../pages/Home';
import CvBuilder from '../pages/CvBuilder';
import Blog from '../pages/Blog';
import BlogShow from '../pages/BlogShow';
import AboutUs from '../pages/AboutUs';
import Privacy from '../pages/Privacy';
import Faq from '../pages/Faq';

export default function MainLayout() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  return (
    <div class="min-h-screen flex flex-col">
      <Navbar currentPath={currentPath} />

      <main class="flex-grow ps-4 pe-4">
        <Router onChange={e => setCurrentPath(e.url)}>
          {/* @ts-ignore */}
          <Home path="/" />
          {/* @ts-ignore */}
          <CvBuilder path="/cv/bouw" />
          {/* @ts-ignore */}
          <Blog path="/blog" />
          {/* @ts-ignore */}
          <BlogShow path="/blog/:slug" />
          {/* @ts-ignore */}
          <AboutUs path="/over-ons" />
          {/* @ts-ignore */}
          <Privacy path="/privacy" />
          {/* @ts-ignore */}
          <Faq path="/faq" />
        </Router>
      </main>

      <FooterAd route={currentPath} />

      <CookieBanner />

      <Footer />
    </div>
  );
}
