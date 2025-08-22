"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCookie, setCookie } from "../../utils/cookies";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const modePreference = getCookie("darkMode");

    if (modePreference !== null) {
      setDarkMode(modePreference === "true");
      document.documentElement.classList.toggle("dark", modePreference === "true");
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = (): void => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    setCookie("darkMode", newMode.toString(), 365); // persist for 1 year
  };

  const isActive = (path: string) => {
    if (!currentPath) return "text-gray-700 dark:text-white hover:text-orange-600";

    return currentPath === path
      ? "text-orange-600 font-semibold"
      : "text-gray-700 hover:text-orange-600 dark:text-white";
  };

  return (
    <nav className="text-gray-700 dark:text-white transition-colors duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-orange-500 hover:text-orange-600">
              KlikCV
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center dark:text-white">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/cv/bouw" className={isActive("/cv/bouw")}>
              CV bouwer
            </Link>
            <Link href="/blog" className={isActive("/blog")}>
              Blog
            </Link>
            <Link href="/over-ons" className={isActive("/over-ons")}>
              Over ons
            </Link>
            <Link href="/privacy" className={isActive("/privacy")}>
              Privacy
            </Link>
          </div>

          <div className="flex items-center space-x-4 dark:text-white">
            <button
              className="p-2 rounded hover:bg-orange-500"
              onClick={toggleDarkMode}
            >
              {darkMode ? "☀️" : "🌙"}
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
                {menuOpen ? (
                  <>
                    <path d="M6 18L18 6" />
                    <path d="M6 6L18 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 w-full bg-white dark:text-white dark:bg-gray-950 px-4 pb-4 md:hidden z-50"
        >
          <Link
            href="/"
            className={`block py-2 ${isActive("/")}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/cv/bouw"
            className={`block py-2 ${isActive("/cv/bouw")}`}
            onClick={() => setMenuOpen(false)}
          >
            CV bouwer
          </Link>
          <Link
            href="/blog"
            className={`block py-2 ${isActive("/blog")}`}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/over-ons"
            className={`block py-2 ${isActive("/over-ons")}`}
            onClick={() => setMenuOpen(false)}
          >
            Over ons
          </Link>
        </div>
      )}
    </nav>
  );
}
