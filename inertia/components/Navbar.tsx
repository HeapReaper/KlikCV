import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>(null); // `null` before client mount

  useEffect(() => {
    if (typeof window !== "undefined") {
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
          <div className="flex items-center space-x-2">
            <a href="/" className="text-xl font-bold text-orange-500 hover:text-orange-600">
              KlikCV
            </a>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <a href="/" className={isActive("/")}>Home</a>
            <a href="/cv/bouw" className={isActive("/cv/bouw")}>CV bouwer</a>
            <a href="/blog" className={isActive("/blog")}>Blog</a>
            <a href="/over-ons" className={isActive("/over-ons")}>Over ons</a>
            <a href="/privacy" className={isActive("/privacy")}>Privacy</a>
            <a href="/contact" className={isActive("/contact")}>Contact</a>
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

      <div
        id="mobile-menu"
        className={`${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white px-4 pb-4 md:hidden z-50 shadow-md border-b`}
      >
        <a href="/" className={`block py-2 ${isActive("/")}`}>Home</a>
        <a href="/cv/bouw" className={`block py-2 ${isActive("/cv/bouw")}`}>CV bouwer</a>
        <a href="/over-ons" className={`block py-2 ${isActive("/over-ons")}`}>Over ons</a>
        <a href="/contact" className={`block py-2 ${isActive("/contact")}`}>Contact</a>
      </div>
    </nav>
  );
}
