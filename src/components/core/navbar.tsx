import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';
import { Router } from 'preact-router';
import AboutUs from '../../pages/AboutUs';
import Home from '../../pages/Home';

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
    <nav className="text-gray-700 shadow-md transition-colors duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-orange-500 hover:text-orange-600">
              KlikCV
            </a>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/cv/bouw" className={isActive("/cv/bouw")}>CV bouwer</Link>
            <Link href="/blog" className={isActive("/blog")}>Blog</Link>
            <Link href="/over-ons" className={isActive("/over-ons")}>Over ons</Link>
            <Link href="/privacy" className={isActive("/privacy")}>Privacy</Link>
            <Link href="/contact" className={isActive("/contact")}>Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              id="menu-toggle"
              className="text-gray-700 md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 hover:stroke-indigo-600"
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
        className={`${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white px-4 pb-4 md:hidden z-50 shadow-md border-b`}
      >
        <Link href="/" className={`block py-2 ${isActive("/")}`}>Home</Link>
        <Link href="/cv/bouw" className={`block py-2 ${isActive("/cv/bouw")}`}>CV bouwer</Link>
        <Link href="/over-ons" className={`block py-2 ${isActive("/over-ons")}`}>Over ons</Link>
        <Link href="/contact" className={`block py-2 ${isActive("/contact")}`}>Contact</Link>
      </div>
      <Router>
        <Home path="/" />
        <AboutUs path="/over-ons" />
      </Router>
    </nav>
  );
}
