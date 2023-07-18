import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SignIn: NextPage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-black dark:bg-gray-900 text-white">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-1/2 border-r border-tertiary border-solid">
            <div className="flex items-center justify-center h-full w-full px-20 bg-[url(../public/sponsor.jpg)]">
              <div>
                <h2 className="text-11xl text-center font-bold sm:text-3xl">
                  Explication concours
                </h2>
                <iframe
                  className=" w-[40vw] aspect-video rounded"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-1/3">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-auto h-12 sm:h-14 text-black p-2 bg-primary rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Connecte toi pour accéder à ton compte
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray"
                    >
                      Adresse E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="w-full rounded  bg-light-gray text-white bg-opacity-40 border-solid border-lighter-gray border focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="leading-8 text-sm text-gray"
                      >
                        Mot de passe
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray focus:text-primary hover:text-blue-500 hover:underline"
                      >
                        Mot de passe oublié?
                      </a>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      minLength={8}
                      required={true}
                      placeholder=""
                      className="w-full rounded text-11xl bg-light-gray text-white bg-opacity-40 border-solid border border-lighter-gray focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="mt-6">
                    <button className=" button-animate w-full px-4 py-3 tracking-wide text-black font-bold transition-colors duration-300 transform bg-secondary rounded">
                      <span>Se connecter</span>
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Pas encore de compte?{" "}
                  <a
                    href="#"
                    className="text-primary focus:outline-none focus:underline hover:underline"
                  >
                    S'inscrire
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
