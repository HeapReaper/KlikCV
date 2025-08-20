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
import { getCookie, setCookie } from '../../utils/cookies';

import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    const modePreference = getCookie('mode');

    if (modePreference !== null ) {
      setDarkMode(modePreference === 'true');
      document.documentElement.classList.toggle('dark', modePreference === 'true');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = (): void => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    setCookie('darkMode', newMode.toString(), 365); // persist for 1 year
  };

  const isActive = (path: string) => {
    if (currentPath === null) return 'text-gray-700 dark:text-white hover:text-orange-600';

    return currentPath === path
      ? 'text-orange-600 font-semibold'
      : 'text-gray-700 hover:text-orange-600 dark:text-white';
  };

  return (
    <nav className="text-gray-700 dark:text-white transition-colors duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-orange-500 hover:text-orange-600">
              KlikCV
            </a>
          </div>

          <div className="hidden md:flex space-x-4 items-center dark:text-white">
            {/* @ts-ignore */}
            <Link href="/" className={isActive('/')}>
              Home
            </Link>
            {/* @ts-ignore */}
            <Link href="/cv/bouw" className={isActive('/cv/bouw')}>
              CV bouwer
            </Link>
            {/* @ts-ignore */}
            <Link href="/blog" className={isActive('/blog')}>
              Blog
            </Link>
            {/* @ts-ignore */}
            <Link href="/over-ons" className={isActive('/over-ons')}>
              Over ons
            </Link>
            {/* @ts-ignore */}
            <Link href="/privacy" className={isActive('/privacy')}>
              Privacy
            </Link>
          </div>

          <div className="flex items-center space-x-4 dark:text-white">
            <button
              className="p-2 rounded hover:bg-orange-500"
              onClick={toggleDarkMode}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              id="menu-toggle"
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-orange-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  animate={menuOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  animate={menuOpen ? { opacity: 0 } : { d: "M4 12h16", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  animate={menuOpen ? { d: "M6 6L18 18" } : { d: "M4 18h16" }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ y: -20, opacity: 0 }}
        animate={menuOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-white dark:text-white dark:bg-gray-950 px-4 pb-4 md:hidden z-50
              ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* @ts-ignore */}
        <Link href="/" className={`block py-2 ${isActive('/')}`} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        {/* @ts-ignore */}
        <Link href="/cv/bouw" className={`block py-2 ${isActive('/cv/bouw')}`} onClick={() => setMenuOpen(false)}>
          CV bouwer
        </Link>
        {/* @ts-ignore */}
        <Link href="/blog" className={`block py-2 ${isActive('/blog')}`} onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        {/* @ts-ignore */}
        <Link href="/over-ons" className={`block py-2 ${isActive('/over-ons')}`} onClick={() => setMenuOpen(false)}>
          Over ons
        </Link>
      </motion.div>

      <Router onChange={e => setCurrentPath(e.url)} >
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
