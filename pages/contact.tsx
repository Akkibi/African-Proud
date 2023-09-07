"use client"
import type { NextPage } from 'next'
import Footer from './components/footer'
import Navbar from './components/navbar'

const Contact: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="body-font relative min-h-screen bg-black text-gray">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="text-animate sm:text-3xl title-font mb-4 text-31xl font-medium text-white">
              <span>Contactez</span> <span>nous</span>
            </h1>
            <p className="text-base mx-auto leading-relaxed lg:w-2/3">
              Une question, un problème?
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <fieldset className="flex w-full list-none flex-wrap overflow-hidden rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-0 py-1 outline-none">
              <div className="flex w-1/3 pl-2">
                <input
                  type="radio"
                  id="Public"
                  name="drone"
                  value="Public"
                  checked
                />
                <label
                  htmlFor="Public"
                  className="w-full pl-2 text-center leading-8 text-white"
                >
                  Public
                </label>
              </div>
              <div className="flex w-1/3 border-x border-solid pl-2">
                <input
                  type="radio"
                  id="Artistes"
                  name="drone"
                  value="Artistes"
                  checked
                />
                <label
                  htmlFor="Artistes"
                  className="w-full pl-2 text-center leading-8 text-white"
                >
                  Artistes
                </label>
              </div>
              <div className="flex w-1/3 pl-2">
                <input
                  type="radio"
                  id="Partenariat"
                  name="drone"
                  value="Partenariat"
                  checked
                />
                <label
                  htmlFor="Partenariat"
                  className="w-full pl-2 text-center leading-8 text-white"
                >
                  Partenariat
                </label>
              </div>
            </fieldset>

            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label htmlFor="name" className="text-sm leading-8 text-gray">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="text-base text-gray-100  w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-400 leading-8"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900 "
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 leading-8"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={1000}
                    className="text-base text-gray-100 h-32 w-full resize-y overflow-x-hidden rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-6 text-white outline-none transition-colors duration-200 ease-in-out focus:border-secondary focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  ></textarea>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="text-lg mx-auto flex rounded border-0 bg-primary px-10 py-3 text-black hover:bg-secondary focus:outline-none">
                  Envoyer
                </button>
              </div>
              <div className="mt-8 w-full border-t border-solid border-light-gray p-2 pt-8 text-center">
                <a className="text-yellow-400">example@email.com</a>
                <p className="my-5 leading-normal">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500 ml-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
