import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

interface UserData {
  id: number;
  genre: string;
  username: string;
  email: string;
  phoneNumberCountry: string;
  phoneNumber: string;
  contrat: string;
}

const Profile: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { id } = router.query;
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Fonction pour récupérer les informations de l'utilisateur depuis l'API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/me');
        const userData = response.data;

        // Vérifier si l'utilisateur est un artiste
        if (userData.user) {
          setUserData({
            genre: userData.user.genre,
            username: userData.user.username,
            phoneNumber: userData.user.phoneNumber,
            phoneNumberCountry: userData.user.phoneNumberCountry,
            email: userData.user.email,
            contrat: userData.user.contrat, // Convert contrat to string
          } as UserData);
        }
      } catch (error: any) {
        console.error(error.message);
        toast.error(error.message);
      }
    };

    if (id) {
      fetchUserData(); 
    }
  }, [id]);

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté
    if (!session) {
      router.push('/sign-in');
    } else {
      // Si un ID de profil est spécifié dans l'URL
      if (id) {
        // Convertissez l'ID de chaîne en nombre
        const profileIdNumber = parseInt(id as string); // Use type assertion here

        // Vérifiez si l'ID de session ne correspond pas à l'ID de profil demandé
         if (session.id !== profileIdNumber.toString()) { 
          // Redirigez l'utilisateur vers son propre profil
          router.push(`/profile/${session.id}`);
          return; // Sortez de la fonction pour éviter de charger les données du profil demandé
        }
      }
    }
  }, [session, router, id]);

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-900 bg-black text-white mt-20">
        <div className="flex h-screen justify-center">
          <div className="w-full lg:w-1/3 p-8 rounded-lg flex flex-col items-center mt-20">
            <h1 className="text-3xl font-bold mb-10">Profile Utilisateur</h1>
            <div className="bg-secondary p-4 rounded-lg w-full mb-6">
              <p className="text-xl text-black font-bold">Id: {id}</p>
              <p className="text-xl text-black font-bold">Pseudo: {userData?.username}</p>
              <p className="text-xl text-black font-bold">Genre: {userData?.genre}</p>
              <p className="text-xl text-black font-bold">Email: {userData?.email}</p>
              <p className="text-xl text-black font-bold">
                Téléphone: {userData?.phoneNumberCountry ? userData.phoneNumberCountry + ' ' : ''}
                {userData?.phoneNumber}
              </p>
              {userData?.contrat && (
                <a href={userData?.contrat} download className="text-xl text-black font-bold">
                  Télécharger le contrat
                </a>
              )}
              </div>
              {session?.userType === "artiste" && (
                <button
                  onClick={() =>
                    window.open(
                      'https://www.wiseband.com/admin/register.php?plan=free&affiliate=4ec81625d3',
                      '_blank'
                    )
                  }
                  className="ml-2 mt-4 rounded border-0 bg-primary px-6 py-5 text-xl font-bold duration-200 hover:opacity-70 focus:outline-none md:mt-5"
                >
                  Participer Au Concours
                </button>
              )}
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
