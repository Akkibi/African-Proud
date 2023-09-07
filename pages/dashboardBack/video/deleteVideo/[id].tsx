import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmDeleteVideo: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState<{ title: string } | null>(null); // État pour stocker les données de la vidéo

  useEffect(() => {
    // Récupérer les détails de la vidéo depuis l'API
    if (id) {
      axios
        .get(`/api/dashboard/getVideoById?id=${id}`)
        .then((response) => {
          const videoData = response.data;
          setVideoData(videoData);
        })
        .catch((error) => {
          console.error(error);
          setError('Une erreur s\'est produite lors de la récupération des données de la vidéo.');
        });
    }
  }, [id]);

  const deleteVideo = async () => {
    try {
      setLoading(true);

      const response = await axios.delete(`/api/dashboard/deleteVideo?id=${id}`);

      if (response.data.message) {
        router.push('/dashboardBack');
      } else {
        setError('Une erreur s\'est produite lors de la suppression de la vidéo. Veuillez réessayer.');
      }
    } catch (error) {
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
              className="text-left mb-4 w-1/2 text-center transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black"
            >
              Retour
            </button>
            <div className="text-center">
              <h1 className="text-animate text-gray-800 text-11xl font-semibold tracking-wider text-white sm:text-31xl">
                Confirmation de suppression de vidéo
              </h1>
            </div>
            <div className="mt-8">
              {videoData && (
                <>
                  <p>Voulez-vous vraiment supprimer cette vidéo ?</p>
                  <p>Titre de la vidéo: {videoData.title}</p>
                </>
              )}
              {error && <div className="text-red-500">{error}</div>}
              <div className="mt-6">
                <button
                  onClick={deleteVideo}
                  className="button-animate w-full transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black transition-colors duration-300"
                >
                  {loading ? 'En cours de traitement' : 'Confirmer la suppression'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteVideo;
