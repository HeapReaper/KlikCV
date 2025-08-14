import type { CvBuilderType } from '../types/Templates.ts';

export default function Luna({ name, email }: CvBuilderType) {
  return (
    <>
      <header role="banner" className="pb-4">
        <h1 className="text-6xl font-bold mt-3">
          {name || "John Doe"}
        </h1>
        <h1 className="text-4xl text-blue-800">
          Software Engineer
        </h1>
        <address className="not-italic mt-2 text-gray-600 space-y-1 text-base">
          <div className="grid grid-cols-3 gap-4">
            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"/>
              </svg>
              <a href="tel:+31 6 12345678"
                 className=" hover:underline focus:outline-2 focus:outline-blue-600">
                +31 6 12345678
              </a>
            </p>

            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path
                  d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z"/>
                <path
                  d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z"/>
              </svg>
              <a href="mailto:john.doe@example.com"
                 className=" hover:underline focus:outline-2 focus:outline-blue-600">
                {email || "john.doe@example.com"}
              </a>
            </p>

            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-700 mr-1" fill="currentColor"
                   viewBox="0 0 24 24">
                <path
                  d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11.667 19h-3v-9h3zm-1.5-10.271a1.726 1.726 0 110-3.451 1.726 1.726 0 010 3.451zm13.167 10.271h-3v-4.671c0-1.115-.021-2.55-1.554-2.55-1.557 0-1.794 1.216-1.794 2.472v4.749h-3v-9h2.885v1.228h.041a3.165 3.165 0 012.847-1.563c3.044 0 3.607 2.005 3.607 4.609z"/>
              </svg>
              <a href="https://nl.linkedin.com/idk" target="_blank" rel="noopener noreferrer"
                 className=" hover:underline focus:outline-2 focus:outline-blue-600">
                nl.linkedin.com/idk
              </a>
            </p>

            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path
                  d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .297Z"/>
              </svg>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"
                 className=" hover:underline focus:outline-2 focus:outline-blue-600">
                github.com/johndoe
              </a>
            </p>

            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path
                  d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"/>
              </svg>
              <a href="https://portfolio.domain.com" target="_blank" rel="noopener noreferrer"
                 className=" hover:underline focus:outline-2 focus:outline-blue-600">
                portfolio.domain.com
              </a>
            </p>

            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-5 mr-2 text-blue-700">
                <path
                  d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/>
                <path
                  d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/>
              </svg>
              Amsterdam
            </p>
          </div>
        </address>
      </header>

      <main role="main" className="space-y-10">
        <section>
          <h2 className="text-3xl font-semibold text-black border-b-4 border-black pb-1 mb-4">Werkervaring</h2>

          <article aria-labelledby="functie1-heading" className="mb-6">
            <h3 id="functie1-heading" className="text-2xl text-black mb-1">
              Frontend Developer
            </h3>
            <h3 id="functie1-heading" className="text-xl text-blue-700 mb-1">
              Tech Corp
            </h3>
            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path
                  d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
                <path fill-rule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clip-rule="evenodd"/>
              </svg>
              2020-01 - 2023-06

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path fill-rule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clip-rule="evenodd"/>
              </svg>
              Amsterdam
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-800">
              - Worked on frontend features and improved performance.
            </ul>
          </article>

        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black border-b-4 border-black pb-1 mb-4">Opleiding</h2>

          <article className="mb-6">
            <h3 className="text-2xl text-black mb-1">BSc Computer Science</h3>
            <h3 className="text-xl text-blue-700 mb-1">University of Amsterdam</h3>
            <p className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path
                  d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
                <path fill-rule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clip-rule="evenodd"/>
              </svg>
              2010-09 - 2014-06

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   className="size-4 mr-1 text-blue-700">
                <path fill-rule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clip-rule="evenodd"/>
              </svg>
              Amsterdam
            </p>

            <p className="italic text-gray-600 mb-2">
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                Studied algorithms, data structures, and web technologies.
              </ul>
            </p>
          </article>

        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black border-b-4 border-black pb-1 mb-4">Vaardigheden</h2>

          <ul className="list-disc list-inside space-y-1 text-gray-800 text-lg">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black border-b-4 border-black pb-1 mb-4">Talen</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800 text-lg">
            <li>Nederlands - Moedertaal</li>
            <li>Engels - Vloeiend</li>
            <li>Frans - Basis</li>
          </ul>
        </section>
      </main>

      <footer role="contentinfo" className="mt-12 text-center text-gray-500 text-sm">
        <p>CV gegenereerd door {name || "John Doe"} &copy; {new Date().getFullYear()}</p>
      </footer>

    </>
);
}
