export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-white text-sm">
        <div className="mb-4 md:mb-0 text-gray-700 dark:text-white">
          &copy; {new Date().getFullYear()}
          <a href="https://heapreaper.nl" className=" ms-1 underline decoration-orange-500 hover:text-orange-600" target="_blank">
            KlikCV
          </a>.
          Alle rechten voorbehouden.
        </div>
        <div className="space-x-4 text-gray-700 dark:text-white">
          <a href="/privacy" className="hover:text-orange-600">
            Privacybeleid
          </a>
          <a href="/faq" className="hover:text-orange-600">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
