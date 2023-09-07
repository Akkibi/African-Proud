"use client"
import type { NextPage } from 'next';
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import toast from 'react-hot-toast';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { signIn, useSession } from 'next-auth/react'

const SignIn: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [resendEmailLoading, setResendEmailLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    await signIn("credentials", {
      ...user,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          setErrorMessage(callback.error);
  
          // Check if the error message is "Veuillez vérifier votre email"
          if (callback.error === "Veuillez vérifier votre email.") {
            setShowResendButton(true);
          } else {
            setShowResendButton(false);
          }
        } else {
          toast.success("Connexion réussie.");
          router.push(`/`);
        }
      });
  };


  const onResendVerificationEmail = async () => {
    try {
      setResendEmailLoading(true);

      const email = user.email;
  
      await axios.post('/api/users/resendVerification', { email });
      toast.success('Email de vérification renvoyé avec succès');
    } catch (error: any) {
      setErrorOccurred(true); // Set errorOccurred to true
      // Gérer les erreurs d'envoi de l'e-mail de vérification
      toast.error('Erreur lors de l\'envoi de l\'email de vérification');
    } finally {
      setResendEmailLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dark:bg-gray-900 bg-black text-white">
        <div className="flex h-screen justify-center">
          <div className="hidden border-r border-solid border-tertiary bg-cover lg:block lg:w-1/2">
            <div className="flex h-full w-full items-center justify-center bg-[url(../public/sponsor.jpg)] px-20">
              <div>
                <h2 className="sm:text-3xl text-center text-11xl font-bold">
                  Explication concours
                </h2>
                <iframe
                  className=" aspect-video w-[40vw] rounded"
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

          <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-1/3">
            <div className="flex-1">
              <div className="text-center">
                <div className="mx-auto flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-12 w-auto rounded-full bg-primary p-2 text-black sm:h-14"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h1 className="text-animate text-gray-800 text-11xl font-semibold capitalize tracking-wider text-white sm:text-31xl">
                  <span>Connectez</span> <span>vous.</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-300 mt-3">
                  Connecte toi pour accéder à ton compte
                </p>
              </div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm mb-2 block text-gray"
                    >
                      Adresse E-mail
                    </label>
                    <input
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="text-base text-gray-100  w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm leading-8 text-gray"
                      >
                        Mot de passe
                      </label>
                      <a
                        onClick={() => router.push(`/forgotPassword`)}
                        className="text-sm text-gray hover:text-blue-500 hover:underline focus:text-primary"
                      >
                        Mot de passe oublié?
                      </a>
                    </div>

                    <input
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      type="password"
                      name="password"
                      id="password"
                      minLength={8}
                      required={true}
                      placeholder=""
                      className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 text-11xl leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={onLogin}
                      className="button-animate w-full transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black transition-colors duration-300"
                    >
                      {loading ? "Processing" : "Se Connecter"}
                    </button>
                  </div>
                </form>
                {errorMessage && (
                  <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
                )}
                {showResendButton && (
                  <div className="mt-6">
                    <button
                      onClick={onResendVerificationEmail}
                      className={`w-full transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black transition-colors duration-300 ${resendEmailLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={resendEmailLoading}
                    >
                      {resendEmailLoading ? 'Envoi en cours' : "Renvoyer l'email de vérification"}
                    </button>
                  </div>
                )}
                <p className="text-sm text-gray-400 mt-6 text-center">
                  Pas encore de compte?
                  <a
                    onClick={() => router.push(`/register`)}
                    className="text-primary cursor-pointer hover:underline focus:underline focus:outline-none"
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
  )
}

export default SignIn;
