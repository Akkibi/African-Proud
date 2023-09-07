"use client"
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ResetMdp: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Validation des mots de passe
      if (newPassword !== confirmPassword) {
        setError("Les mots de passe ne correspondent pas");
        setLoading(false);
        return;
      }

      // Envoyez une requête au serveur pour réinitialiser le mot de passe avec le token
      const response = await axios.post('/api/users/resetPassword', {
        token,
        newPassword,
      });

      if (response.data.success) {
        // Mot de passe réinitialisé avec succès, redirigez l'utilisateur vers la page de connexion
        router.push('/sign-in');
      } else {
        setError('Une erreur s\'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.');
      }
    } catch (error) {
      // Gérez les erreurs de réinitialisation du mot de passe ici
      console.error(error); // Affichez l'erreur dans la console pour le débogage
      setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get('token');
    setToken(urlToken || '');
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-black text-white">
      <div className="flex h-screen justify-center">
        <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-1/3">
          <div className="flex-1">
            <div className="text-center">
              <h1 className="text-animate text-gray-800 text-11xl font-semibold tracking-wider text-white sm:text-31xl">
                Réinitialisation du mot de passe
              </h1>
            </div>
            <div className="mt-8">
              <form>
                <div>
                  <label htmlFor="newPassword" className="text-sm mb-2 block text-gray">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="Nouveau mot de passe"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="text-sm mb-2 block text-gray">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirmer le mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  />
                  {error && <div className="text-red-500">{error}</div>}
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
  );
};

export default ResetMdp;
