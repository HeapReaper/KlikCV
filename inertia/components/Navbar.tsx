import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="text-gray-700 shadow-md transition-colors duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-orange-500 hover:text-orange-600">
              KlikCV
            </a>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-orange-600"
            >
              Home
            </a>
            <a
              href="/builder"
              className="text-gray-700 hover:text-orange-600"
            >
              CV bouwer
            </a>
            <a
               href="#"
               className="text-gray-700 hover:text-orange-600"
            >
              Over
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600"
            >
              Contact
            </a>
          </div>

          <div className=" flex items-center space-x-4">
            <button
              id="menu-toggle"
              className="text-gray-700 md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 hover:stroke-indigo-600"
                fill="none" stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white px-4 pb-4 md:hidden z-50 shadow-md border-b`}
      >
        <a
          href="/"
          className="block py-2 text-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Home
        </a>
        <a
          href="/builder"
          className="block py-2 text-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          CV bouwer
        </a>
        <a
          href="#"
          className="block py-2 text-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Over
        </a>
        <a
          href="#"
          className="block py-2 text-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
