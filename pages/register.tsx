"use client";
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import Footer from './components/footer';
import Navbar from './components/navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useSession } from 'next-auth/react';

const Register: NextPage = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const { data: session, status } = useSession();
  
  useEffect(() => {
 
    if (session) {
      router.push('/'); 
    }
  }, [session, router])

  const [formData, setFormData] = useState({
    userType: '', 
    genre: '',
    username: '',
    email: '',
    phoneNumber: '',
    phoneNumberCountry: '',
    password: '',
    confirmPassword: '',
    firstName: '', 
    age: 0, 
    country: '', 
    isAdmin: false,
    city: '', 
  });

  const onSignup = async (e) => {
    e.preventDefault();
  
    if (
      !formData.genre ||
      !formData.username ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.phoneNumberCountry ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrorOccurred(true);
      toast.error('Veuillez remplir tous les champs.');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setErrorOccurred(true);
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }
  
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", formData);
      console.log("Signup Success", response.data);
      router.push("/sign-in");
    } catch (error: any) {
      setErrorOccurred(true); // Set errorOccurred to true
      toast.error(error.message);
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (formData.email.length > 0 && formData.password.length > 0 && formData.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const recaptchaChange = (value) => {
    // Gérez le changement de ReCAPTCHA ici
    setCaptcha(value);
  };

  const [showForm, setShowForm] = useState<string>('');

  return (
    <>
      {errorOccurred && (
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      )}
      <Navbar />
      <section className="border-lighter-gray bg-light-gray bg-opacity-40 text-white">
        <div className="justify-center lg:flex">
          <div className="h-screen border-r border-solid border-tertiary bg-cover lg:w-1/2">
            <div className="flex h-full w-full items-center justify-center bg-[url(../public/sponsor.jpg)] px-20">
              <div className={`${showForm == 'artiste' ? 'block' : 'hidden'}`}>
                <h2 className="sm:text-3xl text-center text-11xl font-bold">
                  Explication concours
                </h2>
                <iframe
                  className="aspect-video w-[80vw] rounded lg:w-[40vw]"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/EUPmRCeCbPQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={`${showForm != 'artiste' ? 'block' : 'hidden'}`}>
                <h2 className="sm:text-3xl text-center text-11xl font-bold">
                  Contenus exclusif
                </h2>
                <iframe
                  className="aspect-video w-[80vw] rounded lg:w-[40vw]"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QV9M6zj-pPE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex min-h-screen w-full items-center bg-black p-8 px-12 lg:w-1/2">
            <div className="w-full">
              <h1 className="text-animate text-gray-800 text-11xl font-semibold capitalize tracking-wider text-white sm:text-31xl">
                <span>Créez votre compte.</span>
              </h1>
              <div className="mt-6">
                <h2>Selectionnez le type de compte</h2>
                <div className="mt-3 md:-mx-2 md:flex md:items-center">
                <button
                  value="public"
                  className={`button-animate w-full rounded bg-primary px-6 py-3 font-bold text-black focus:outline-none md:mx-2 md:w-auto ${
                    showForm === 'public' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, userType: 'public' });
                    setShowForm('public');
                  }}
                >
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
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
                  value="artiste"
                  className={`button-animate mt-4 w-full rounded border border-solid bg-tertiary px-6 py-3 font-bold text-white focus:outline-none md:mx-2 md:mt-0 md:w-auto ${
                    showForm === 'artiste' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, userType: 'artiste' });
                    setShowForm('artiste');
                  }}
                >
                    <span className="mx-2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
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
                className={` mt-8 grid-cols-1 gap-6 md:grid-cols-2 ${
                  showForm == 'public' ? 'grid' : 'hidden'
                }`}
              >
                <div>
                  <label className="text-sm mb-2 block text-gray">Genre</label>
                  <fieldset                  
                    value={formData.genre}
                    onChange={(e) => setFormData({...formData, genre: e.target.value})}
                    className=" flex	w-full select-none list-none flex-wrap overflow-hidden rounded border border-solid border-lighter-gray p-0 leading-7"
                  >
                    <div className="flex w-1/3 border-lighter-gray bg-light-gray bg-opacity-40 px-[0.2vw]">
                      <input
                        type="radio"
                        id="malePublic"
                        name="public"
                        value="homme"
                        required
                      />
                      <label
                        htmlFor="malePublic"
                        className=" w-full py-1 text-center leading-8 text-white"
                      >
                        Homme
                      </label>
                    </div>
                    <div className="flex w-1/3 border-l-[1px] border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-[0.2vw]">
                      <input
                        className="bg-secondary"
                        type="radio"
                        id="femalePublic"
                        name="public"
                        value="femme"
                        required
                      />
                      <label
                        htmlFor="femalePublic"
                        className=" w-full py-1 text-center leading-8 text-white"
                      >
                        Femme
                      </label>
                    </div>
                    <div className="flex w-1/3 border-l-[1px] border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-[0.2vw]">
                      <input
                        type="radio"
                        id="otherPublic"
                        name="public"
                        value="autre"
                        required
                      />
                      <label
                        htmlFor="otherPublic"
                        className=" w-full py-1 text-center leading-8 text-white"
                      >
                        Autre
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">Pseudo</label>
                  <input
                    id = "username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    placeholder="Exemple Akkibi"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary  focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">
                    Numéro de téléphone
                  </label>
                  <div className="m-0 flex flex-row p-0 ">
                    <select
                      className="text-gray-700 block w-1/3 rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                      aria-required="true"
                      aria-invalid="false"
                      id="phoneNumber"
                      value={formData.phoneNumberCountry}
                      onChange={(e) => setFormData({...formData, phoneNumberCountry: e.target.value})}
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
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      className="text-gray-700 block w-2/3 rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray-600">Adresse E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    id="emailPublic"
                    placeholder="example@example.com"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray-600">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Entrez votre mot de passe"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray-600">
                    Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder="Confirmez votre mot de passe"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <button
                  type='submit'
                  onClick={onSignup}
                  className="button-animate text-sm w-full transform rounded bg-secondary px-10 py-3 font-bold tracking-wide text-black transition-colors duration-300 focus:bg-primary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
                  <span 
                  className="inline-flex items-center">
                    {loading ? "Processing" : "Créer un compte"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rtl:-scale-x-100"
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
                  <p className="text-sm text-red-500">
                    Les mots de passe ne correspondent pas
                  </p>
                )}
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={recaptchaChange}
                />
              </form>
              <form
                className={` mt-8 grid-cols-1 gap-6 md:grid-cols-2 ${
                  showForm == 'artiste' ? 'grid' : 'hidden'
                }`}
              >
                <div>
                  <label className="text-sm mb-2 block text-gray">Genre</label>
                  <fieldset
                    name={formData.genre}
                    onChange={(e) =>
                      setFormData((prevUser) => ({
                        ...prevUser,
                        genre: (e.target as HTMLInputElement).value,
                      }))
                    }
                    className=" flex	w-full select-none list-none flex-wrap overflow-hidden rounded border border-solid border-lighter-gray p-0 leading-7"
                  >
                    <div className="flex w-1/3 border-lighter-gray bg-light-gray bg-opacity-40 px-[0.2vw]">
                      <input
                        type="radio"
                        id="maleArtist"
                        name="artist"
                        value="male"
                        required
                      />
                      <label
                        htmlFor="maleArtist"
                        className=" w-full py-1 text-center leading-8 text-white"
                      >
                        Homme
                      </label>
                    </div>
                    <div className="flex w-1/3 border-l-[1px] border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-[0.2vw]">
                      <input
                        type="radio"
                        id="femaleArtist"
                        name="artist"
                        value="female"
                        required
                      />
                      <label
                        htmlFor="femaleArtist"
                        className=" w-full py-1 text-center leading-8 text-white"
                      >
                        Femme
                      </label>
                    </div>
                    <div className="flex w-1/3 border-l-[1px] border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-[0.2vw]">
                      <input
                        type="radio"
                        id="otherArtist"
                        name="artist"
                        value="other"
                        required
                      />
                      <label
                        htmlFor="otherArtist"
                        className=" w-full py-1 text-center leading-8 text-white"
                      >
                        Autre
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">Nom et Prénom</label>
                  <input
                    id="fristName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    type="text"
                    className="text-gray-700 bg- mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary  focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">
                    Nom d'artiste
                  </label>
                  <input
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    type="text"
                    placeholder="Snow"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary  focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">
                    Phone number
                  </label>
                  <div className="m-0 flex flex-row p-0 ">
                    <select
                      id="phoneNumberCountry"
                      value={formData.phoneNumberCountry}
                      onChange={(e) => setFormData({...formData, phoneNumberCountry: e.target.value})}
                      className="text-gray-700 block w-1/3 rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                      aria-required="true"
                      aria-invalid="false"
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
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      type="tel"
                      placeholder="XX XX XX XX XX"
                      className="text-gray-700 block w-2/3 rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">
                    Adresse E-mail
                  </label>
                  <input
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    type="email"
                    id="emailArtist"
                    placeholder="example@example.com"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white   focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block text-gray">Age</label>
                  <input
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    type="number"
                    id="age"
                    placeholder="1-100"
                    min="1"
                    max="100"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white   focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block text-gray">Pays</label>

                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white   focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    aria-required="true"
                    aria-invalid="false"

                  >
                    <option value="">Veuillez choisir un pays</option>
                    <option value="" disabled>
                      —————
                    </option>
                    <option value="Algérie">Algérie</option>
                    <option value="Bénin">Bénin</option>
                    <option value="Burkina Faso">Burkina Faso</option>
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
                    <option value="Maroc">Maroc</option>
                    <option value="RDC">RDC</option>
                    <option value="Sénégal">Sénégal</option>
                    <option value="Togo">Togo</option>
                    <option value="Tunisie">Tunisie</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">Ville</label>
                  <input
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    type="text"
                    id="city"
                    placeholder="Exemple Lagos"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white   focus:border-secondary focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block text-gray">
                    Mot de passe
                  </label>
                  <input
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary  focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm mb-2 block text-gray">
                    Confirmez le mot de passe
                  </label>
                  <input
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    className="text-gray-700 mt-2 block w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-5 py-3 text-white  focus:border-secondary  focus:bg-black focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-40"
                    required
                  />
                </div>
                <button
                  type='submit'
                  onClick={onSignup}
                  className="button-animate text-sm w-full transform rounded bg-secondary px-10 py-3 font-bold tracking-wide text-black transition-colors duration-300 focus:bg-primary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
                  <span 
                  className="inline-flex items-center">
                    {loading ? "Processing" : "Créer un compte"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rtl:-scale-x-100"
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
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={recaptchaChange}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register