import type { NextPage } from "next";
import { useState } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Register: NextPage = () => {
  const [genre, setGenre] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberCountry, setPhoneNumberCountry] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [incorrectPassword, setIncorrectPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      genre,
      username,
      email,
      phoneNumber,
      phoneNumberCountry,
      password,
    });
    if (password !== confirmPassword) {
      setIncorrectPassword(true);
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          genre,
          username,
          email,
          phoneNumber,
          phoneNumberCountry,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  const [showForm, setShowForm] = useState<string>("");
  return (
    <>
      <Navbar />
      <section className="text-white bg-light-gray border-lighter-gray bg-opacity-40">
        <div className="lg:flex justify-center">
          <div className="h-screen bg-cover lg:w-1/2 border-r border-tertiary border-solid">
            <div className="flex items-center justify-center h-full w-full px-20 bg-[url(../public/sponsor.jpg)]">
              <div className={`${showForm == "artiste" ? "block" : "hidden"}`}>
                <h2 className="text-11xl text-center font-bold sm:text-3xl">
                  Explication concours
                </h2>
                <iframe
                  className="w-[80vw] lg:w-[40vw] aspect-video rounded"
                  width="100%"
                  height="100%"
                  // src="https://www.youtube.com/embed/NpEaa2P7qZI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={`${showForm != "artiste" ? "block" : "hidden"}`}>
                <h2 className="text-11xl text-center font-bold sm:text-3xl">
                  Contenus exclusif
                </h2>
                <iframe
                  className="w-[80vw] lg:w-[40vw] aspect-video rounded"
                  width="100%"
                  height="100%"
                  // src="https://www.youtube.com/embed/eEzD-Y97ges"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-1/2 w-full bg-black p-8 px-12 min-h-screen">
            <div className="w-full">
              <h1 className="text-animate text-11xl sm:text-31xl font-semibold tracking-wider text-gray-800 capitalize text-white">
                <span>Créez votre compte.</span>
              </h1>
              <div className="mt-6">
                <h2>Selectionnez le type de compte</h2>

                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button
                    className="button-animate w-full px-6 py-3 text-black bg-primary rounded md:w-auto md:mx-2 focus:outline-none font-bold"
                    onClick={() => setShowForm("public")}
                  >
                    <span className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Public
                    </span>
                  </button>

                  <button
                    className="button-animate bg-tertiary w-full px-6 py-3 mt-4  border border-solid rounded md:mt-0 md:w-auto md:mx-2 text-white font-bold  focus:outline-none"
                    onClick={() => setShowForm("artiste")}
                  >
                    <span className="mx-2 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Artiste
                    </span>
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                method="post"
                action="/api/register"
                className={` grid-cols-1 gap-6 mt-8 md:grid-cols-2 ${
                  showForm == "public" ? "grid" : "hidden"
                }`}
              >
                <div>
                  <label className="block mb-2 text-sm text-gray">Genre</label>
                  <fieldset
                    name={genre}
                    onChange={(e) =>
                      setGenre((e.target as HTMLInputElement).value)
                    }
                    className=" select-none	w-full flex flex-wrap list-none leading-7 p-0 rounded overflow-hidden border-solid border border-lighter-gray"
                  >
                    <div className="px-[0.2vw] w-1/3 flex bg-light-gray border-lighter-gray bg-opacity-40">
                      <input
                        type="radio"
                        id="malePublic"
                        name="public"
                        value="male"
                        required
                      />
                      <label
                        htmlFor="malePublic"
                        className=" py-1 leading-8 text-center w-full text-white"
                      >
                        Homme
                      </label>
                    </div>
                    <div className="px-[0.2vw] w-1/3 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border-l-[1px] flex">
                      <input
                        className="bg-secondary"
                        type="radio"
                        id="femalePublic"
                        name="public"
                        value="female"
                        required
                      />
                      <label
                        htmlFor="femalePublic"
                        className=" py-1 leading-8 w-full text-center text-white"
                      >
                        Femme
                      </label>
                    </div>
                    <div className="px-[0.2vw] w-1/3 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border-l-[1px] flex">
                      <input
                        type="radio"
                        id="otherPublic"
                        name="public"
                        value="other"
                        required
                      />
                      <label
                        htmlFor="otherPublic"
                        className=" py-1 leading-8 w-full text-center text-white"
                      >
                        Autre
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">Pseudo</label>
                  <input
                    type="text"
                    name={username}
                    onChange={(e) =>
                      setUsername((e.target as HTMLInputElement).value)
                    }
                    placeholder="Exemple Akkibi"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Numéro de téléphone
                  </label>
                  <div className="flex flex-row m-0 p-0 ">
                    <select
                      className="block w-1/3 px-5 py-3 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                      aria-required="true"
                      aria-invalid="false"
                      name="phoneNumberCountry"
                    >
                      <option value="">+XX</option>
                      <option value="" disabled>
                        —————
                      </option>
                      <option value="+213 (Algérie)">+213 (Algérie)</option>
                      <option value="+229 (Bénin)">+229 (Bénin)</option>
                      <option value="+226(Burkina Faso)">
                        +226(Burkina Faso)
                      </option>
                      <option value="+237 (Cameroun)">+237 (Cameroun)</option>
                      <option value="+243 (République centrafricaine)">
                        +243 (République centrafricaine)
                      </option>
                      <option value="+242 (Congo)">+242 (Congo)</option>
                      <option value="+225 (Côte d&#039;Ivoire)">
                        +225 (Côte d&#039;Ivoire)
                      </option>
                      <option value="+241 (Gabon)">+241 (Gabon)</option>
                      <option value="+224 (Guinée)">+224 (Guinée)</option>
                      <option value="+223 (Mali)">+223 (Mali)</option>
                      <option value="+212 (Maronc)">+212 (Maronc)</option>
                      <option value="+236 (RDC)">+236 (RDC)</option>
                      <option value="+221 (Sénégal)">+221 (Sénégal)</option>
                      <option value="+228 (Togo)">+228 (Togo)</option>
                      <option value="+216 (Tunisie)">+216 (Tunisie)</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="XX XX XX XX XX"
                      name={phoneNumber}
                      onChange={(e) =>
                        setPhoneNumber((e.target as HTMLInputElement).value)
                      }
                      className="block w-2/3 px-5 py-3 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Adresse E-mail
                  </label>
                  <input
                    type="email"
                    name={email}
                    onChange={(e) =>
                      setEmail((e.target as HTMLInputElement).value)
                    }
                    id="emailPublic"
                    placeholder="example@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded   focus:ring focus:bg-black focus:ring-secondary focus:border-secondary focus:outline-none focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    name={password}
                    onChange={(e) =>
                      setPassword((e.target as HTMLInputElement).value)
                    }
                    placeholder="Entrez votre mot de passe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    name={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword((e.target as HTMLInputElement).value)
                    }
                    placeholder="Confirmez votre mot de passe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>
                <button className="button-animate font-bold w-full px-10 py-3 text-sm tracking-wide text-black transition-colors duration-300 transform bg-secondary rounded  focus:bg-primary  focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
                  <span className="inline-flex items-center">
                    Créer un compte
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {incorrectPassword && (
                  <p className="text-red-500 text-sm">
                    Les mot de passe ne correspondent pas
                  </p>
                )}
              </form>
              <form
                className={` grid-cols-1 gap-6 mt-8 md:grid-cols-2 ${
                  showForm == "artiste" ? "grid" : "hidden"
                }`}
              >
                <div>
                  <label className="block mb-2 text-sm text-gray">Genre</label>
                  <fieldset
                    name="genre"
                    className=" select-none	w-full flex flex-wrap list-none leading-7 p-0 rounded overflow-hidden border-solid border border-lighter-gray"
                  >
                    <div className="px-[0.2vw] w-1/3 flex bg-light-gray border-lighter-gray bg-opacity-40">
                      <input
                        type="radio"
                        id="maleArtist"
                        name="artist"
                        value="male"
                        required
                      />
                      <label
                        htmlFor="maleArtist"
                        className=" py-1 leading-8 text-center w-full text-white"
                      >
                        Homme
                      </label>
                    </div>
                    <div className="px-[0.2vw] w-1/3 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border-l-[1px] flex">
                      <input
                        type="radio"
                        id="femaleArtist"
                        name="artist"
                        value="female"
                        required
                      />
                      <label
                        htmlFor="femaleArtist"
                        className=" py-1 leading-8 w-full text-center text-white"
                      >
                        Femme
                      </label>
                    </div>
                    <div className="px-[0.2vw] w-1/3 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border-l-[1px] flex">
                      <input
                        type="radio"
                        id="otherArtist"
                        name="artist"
                        value="other"
                        required
                      />
                      <label
                        htmlFor="otherArtist"
                        className=" py-1 leading-8 w-full text-center text-white"
                      >
                        Autre
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray">Prénom</label>
                  <input
                    type="text"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded bg-  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Nom d'artiste
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Snow"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Phone number
                  </label>
                  <div className="flex flex-row m-0 p-0 ">
                    <select
                      className="block w-1/3 px-5 py-3 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                      aria-required="true"
                      aria-invalid="false"
                      name="phoneNumberCountry"
                    >
                      <option value="">+XX</option>
                      <option value="" disabled>
                        —————
                      </option>
                      <option value="+213 (Algérie)">+213 (Algérie)</option>
                      <option value="+229 (Bénin)">+229 (Bénin)</option>
                      <option value="+226(Burkina Faso)">
                        +226(Burkina Faso)
                      </option>
                      <option value="+237 (Cameroun)">+237 (Cameroun)</option>
                      <option value="+243 (République centrafricaine)">
                        +243 (République centrafricaine)
                      </option>
                      <option value="+242 (Congo)">+242 (Congo)</option>
                      <option value="+225 (Côte d&#039;Ivoire)">
                        +225 (Côte d&#039;Ivoire)
                      </option>
                      <option value="+241 (Gabon)">+241 (Gabon)</option>
                      <option value="+224 (Guinée)">+224 (Guinée)</option>
                      <option value="+223 (Mali)">+223 (Mali)</option>
                      <option value="+212 (Maronc)">+212 (Maronc)</option>
                      <option value="+236 (RDC)">+236 (RDC)</option>
                      <option value="+221 (Sénégal)">+221 (Sénégal)</option>
                      <option value="+228 (Togo)">+228 (Togo)</option>
                      <option value="+216 (Tunisie)">+216 (Tunisie)</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="XX XX XX XX XX"
                      name="phoneNumber"
                      className="block w-2/3 px-5 py-3 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Adresse E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailArtist"
                    placeholder="example@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded   focus:ring focus:bg-black focus:ring-secondary focus:border-secondary focus:outline-none focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">Age</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="1-100"
                    min="1"
                    max="100"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded   focus:ring focus:bg-black focus:ring-secondary focus:border-secondary focus:outline-none focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">Pays</label>

                  <select
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded   focus:ring focus:bg-black focus:ring-secondary focus:border-secondary focus:outline-none focus:ring-opacity-40"
                    aria-required="true"
                    aria-invalid="false"
                    name="menu-759"
                  >
                    <option value="">Veuillez choisir un pays</option>
                    <option value="" disabled>
                      —————
                    </option>
                    <option value="Algérie">Algérie</option>
                    <option value="Bénin">Bénin</option>
                    <option value="urkina Faso">Burkina Faso</option>
                    <option value="Cameroun">Cameroun</option>
                    <option value="République centrafricaine">
                      République centrafricaine
                    </option>
                    <option value="Congo">Congo</option>
                    <option value="Côte d&#039;Ivoire">
                      Côte d&#039;Ivoire
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Guinée">Guinée</option>
                    <option value="Mali">Mali</option>
                    <option value="Maronc">Maronc</option>
                    <option value="RDC">RDC</option>
                    <option value="Sénégal">Sénégal</option>
                    <option value="Togo">Togo</option>
                    <option value="Tunisie">Tunisie</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray">Ville</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Exemple Lagos"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded   focus:ring focus:bg-black focus:ring-secondary focus:border-secondary focus:outline-none focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Entrez votre mot de passe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray">
                    Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirmez votre mot de passe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-light-gray border-lighter-gray bg-opacity-40 border-solid border text-white rounded  focus:border-secondary  focus:ring-secondary focus:outline-none focus:ring focus:bg-black focus:ring-opacity-40"
                    required
                  />
                </div>
                <button className="button-animate font-bold w-full px-10 py-3 text-sm tracking-wide text-black capitalize transition-colors duration-300 transform bg-secondary rounded  focus:outline-none focus:ring focus:ring-secondary focus:bg-primary focus:ring-opacity-50">
                  <span className="inline-flex items-center">
                    Créer un compte
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
