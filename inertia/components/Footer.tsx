export default function Footer() {
  return (
    <footer className="shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-300 text-sm">
        <div className="mb-4 md:mb-0 text-gray-700">
          &copy; {new Date().getFullYear()} KlikCV. Alle rechten voorbehouden.
        </div>
        <div className="space-x-4 text-gray-700">
          <a href="/privacy" className="hover:text-orange-600">
            Privacybeleid
          </a>
          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
