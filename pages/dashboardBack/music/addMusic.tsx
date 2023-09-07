import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const AjoutMusic: NextPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPublished, setIsPublished] = useState('false');

  const addMusic = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/dashboard/postMusic', {
        title,
        content,
        link,
        published: true,
      });

      if (response.data.success) {
        router.push('/dashboardBack'); // Remplacez '/confirmation' par la page que vous souhaitez afficher après l'ajout
      } else {
        setError('Une erreur s\'est produite lors de l\'ajout de la vidéo. Veuillez réessayer.');
      }
    } catch (error) {
      // Gérez les erreurs d'ajout de vidéo ici
      console.error(error);
      setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark:bg-gray-900 bg-black text-white">
      <div className="flex h-screen justify-center">
        <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-1/3">
          <div className="flex-1">
            <button
            onClick={() => router.push(`/dashboardBack`)}
            className="text-left mb-4 w-1/2 text-center transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black">
                Retour
            </button>
            <div className="text-center">
              <h1 className="text-animate text-gray-800 text-11xl font-semibold tracking-wider text-white sm:text-31xl">
                Ajout de la musique
              </h1>
            </div>
            <div className="mt-8">
              <form>
                <div>
                  <label htmlFor="title" className="text-sm mb-2 block text-gray">
                    Titre de la musique
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Titre de la vidéo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  />
                </div>
                <div>
                  <label htmlFor="content" className="text-sm mb-2 block text-gray">
                    Contenu de la musique
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    placeholder="Contenu de la vidéo"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="link" className="text-sm mb-2 block text-gray">
                    Lien de la musique
                  </label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    placeholder="Lien de la vidéo"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  />
                </div>
                <div>
                  <label htmlFor="isPublished" className="text-sm mb-2 block text-gray">
                    Publier la musique ?
                  </label>
                  <select
                    name="isPublished"
                    id="isPublished"
                    value={isPublished}
                    onChange={(e) => setIsPublished(e.target.value)}
                    className="text-base text-gray-100 w-full rounded border border-solid border-lighter-gray bg-light-gray bg-opacity-40 px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:bg-dark-gray focus:ring-2 focus:ring-yellow-900"
                  >
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                  </select>
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <div className="mt-6">
                  <button
                    onClick={addMusic}
                    className=" button-animate w-full transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black transition-colors duration-300"
                  >
                    {loading ? 'En cours de traitement' : 'Ajouter la vidéo'}
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

export default AjoutMusic;
