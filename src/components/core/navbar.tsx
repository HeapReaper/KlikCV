import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';
import { Router } from 'preact-router';

import AboutUs from '../../pages/AboutUs';
import Home from '../../pages/Home';
import Privacy from '../../pages/Privacy';
import Blog from '../../pages/Blog';
import CvBuilder from '../../pages/CvBuilder';
import BlogShow from '../../pages/BlogShow';
import Faq from '../../pages/Faq';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) => {
    if (currentPath === null) return "text-gray-700 hover:text-orange-600";

    return currentPath === path
      ? "text-orange-600 font-semibold"
      : "text-gray-700 hover:text-orange-600";
  };

  return (
    <nav className="text-gray-700 transition-colors duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-orange-500 hover:text-orange-600">
              KlikCV
            </a>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            {/* @ts-ignore */}
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            {/* @ts-ignore */}
            <Link href="/cv/bouw" className={isActive("/cv/bouw")}>
              CV bouwer
            </Link>
            {/* @ts-ignore */}
            <Link href="/blog" className={isActive("/blog")}>
              Blog
            </Link>
            {/* @ts-ignore */}
            <Link href="/over-ons" className={isActive("/over-ons")}>
              Over ons
            </Link>
            {/* @ts-ignore */}
            <Link href="/privacy" className={isActive("/privacy")}>
              Privacy
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              id="menu-toggle"
              className="text-gray-700 md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 hover:stroke-orange-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white px-4 pb-4 md:hidden z-50 border-b`}
      >
        {/* @ts-ignore */}
        <Link href="/" className={`block py-2 ${isActive("/")}`}>
          Home
        </Link>
        {/* @ts-ignore */}
        <Link href="/cv/bouw" className={`block py-2 ${isActive("/cv/bouw")}`}>
          CV bouwer
        </Link>
        {/* @ts-ignore */}
        <Link href="/blog" className={`block py-2 ${isActive("/blog")}`}>
          Blog
        </Link>
        {/* @ts-ignore */}
        <Link href="/over-ons" className={`block py-2 ${isActive("/over-ons")}`}>
          Over ons
        </Link>
        {/* @ts-ignore */}
        <Link href="/privacy" className={isActive("/privacy")}>
          Privacy
        </Link>
      </div>
      <Router>
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
    </nav>
  );
}
