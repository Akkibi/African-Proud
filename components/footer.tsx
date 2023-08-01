import type { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <>
      <footer className="body-font border-t border-solid border-tertiary bg-black text-gray">
        <div className="container mx-auto px-5 py-24">
          <div className="order-first flex flex-wrap text-center md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font text-sm mb-3 font-medium tracking-widest text-white">
                PARTICIPER
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray hover:text-white" href="./contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white" href="./sponsor">
                    Partenaires
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-gray hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font text-sm mb-3 font-medium tracking-widest text-white">
                EXPLORER
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray hover:text-white" href="./about">
                    Qui sommes nous?
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white" href="./faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white">Concours</a>
                </li>
                <li>
                  <a className="text-gray hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font text-sm mb-3 font-medium tracking-widest text-white">
                CONTACTER
              </h2>
              <nav className="mb-10 list-none">
                <li>All Stars Project Inc.543 West</li>
                <li>42nd Street</li>
                <li>New York, NY 10036</li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font text-sm mb-3 font-medium tracking-widest text-white">
                NEWSLETTER
              </h2>
              <div className="xl:flex-nowrap flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap">
                <div className="xl:mr-4 relative mr-2 w-40 sm:mr-4 sm:w-auto lg:mr-0">
                  <label
                    htmlFor="footer-field"
                    className="text-sm leading-7 text-gray"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="border-gray-700 text-base text-gray-100 w-full rounded border border-solid bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-900"
                  />
                </div>
                <button className=" button-animate xl:mt-0 inline-flex flex-shrink-0 rounded border-0 bg-primary px-10 py-3 font-bold text-black focus:outline-none lg:mt-2">
                  <span>S'abonner</span>
                </button>
              </div>
              <p className="text-sm mt-2 text-center text-gray md:text-left">
                Abonnez vous à la newsletter
                <br className="hidden lg:block" />
                pour ne rien manquer.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark-gray bg-opacity-75">
          <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
            <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10 rounded-full bg-primary p-2 text-black"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 font-title-font text-xl">
                African Proud
              </span>
            </a>
            <p className="text-sm mt-4 text-gray sm:ml-6">
              © 2020 African Proud —
              <a
                href="https://www.djmohgreen.com/"
                className="ml-1 text-gray"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mohgreen
              </a>
            </p>
            <span className="mt-4 inline-flex justify-center sm:ml-auto sm:justify-start">
              <a className="text-gray">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
