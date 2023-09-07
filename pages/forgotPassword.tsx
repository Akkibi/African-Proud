"use client"
import type { NextPage } from 'next'
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar';
import Footer from './components/footer';

const ForgotPassword: NextPage = () => {
  const [user, setUser] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const resetPassword = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post('/api/users/forgotPassword', user);

      if (response.data.success) {
        setErrorOccurred(true);
        toast.success('Un lien pour réinitialiser votre mot de passe a été envoyé à votre adresse e-mail.');
      } else {
        setErrorOccurred(true);
        toast.error("L'e-mail n'existe pas dans notre système. Veuillez vérifier l'adresse e-mail.");
      }
    } catch (error) {
      setErrorOccurred(true);
      toast.error("Une erreur s'est produite l'e-mail n'existe peut être pas dans notre système.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {errorOccurred && ( 
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      )}
      <Navbar />
      <div className="dark:bg-gray-900 bg-black text-white">
        <div className="flex h-screen justify-center">
          <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-1/3">
            <div className="flex-1">
              <div className="text-center">
                <div className="mx-auto flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-12 w-auto rounded-full bg-primary p-2 text-black sm:h-14"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h1 className="text-animate text-gray-800 text-11xl font-semibold capitalize tracking-wider text-white sm:text-31xl">
                  <span>Mot de passe</span> <span>oublié?</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-300 mt-3">
                  Saisissez votre adresse e-mail.
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
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={resetPassword}
                      className=" button-animate w-full transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black transition-colors duration-300"
                    >
                      {loading ? 'Processing' : 'Réinitialiser le mot de passe'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
