import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';


interface UserData {
  id: number;
  genre: string;
  username: string;
  firstName: string;
  age: string;
  city: string;
  country: string;
  email: string;
  phoneNumberCountry: string;
  phoneNumber: string;
  contrat: number;
  isVerified: boolean;
  userType: string;
  role: string;
}

interface MediaData {
  id: number;
  title: string;
  content: string;
  link: string;
  published: boolean;
}

const Dashboard: NextPage = () => {
  const [activeTab, setActiveTab] = useState('publicUsers');
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-primary">
        <div className="w-full lg:w-1/6 h-auto lg:h-screen bg-primary">
          <div className="p-4 mt-20">
            <h2 className="text-lg text-black font-bold mb-4">Tableau de Bord</h2>
            <ul className="space-y-2 list-none mt-10">
              <li
                className={`cursor-pointer text-black text-xl ${
                  activeTab === 'publicUsers' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabClick('publicUsers')}
              >
                Utilisateurs Publique
              </li>
              <li
                className={`cursor-pointer text-black text-xl ${
                  activeTab === 'artistUsers' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabClick('artistUsers')}
              >
                Utilisateurs Artistes
              </li>
              <li
                className={`cursor-pointer text-black text-xl ${
                  activeTab === 'videos' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabClick('videos')}
              >
                Vidéo
              </li>
              <li
                className={`cursor-pointer text-black text-xl ${
                  activeTab === 'news' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabClick('news')}
              >
                Musique
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-5/6 h-auto lg:h-screen bg-black p-4">
          {activeTab === 'publicUsers' && <PublicUsersTab />}
          {activeTab === 'artistUsers' && <ArtistUsersTab />}
          {activeTab === 'videos' && <VideosTab />}
          {activeTab === 'news' && <MusicTab />}
        </div>
      </div>
    </>
  );
};

const PublicUsersTab = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<UserData[] | []>([]);
  const usersPerPage = 40;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users/getUserData');
        const userData = response.data.users;
    
        // Filtrer les utilisateurs pour ne conserver que ceux avec userType === 'public'
        const publicUsers = userData.filter((user: UserData) => user.userType === 'public');
    
        setUsers(publicUsers);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
  
    const filteredUsers = users.filter((user) => {
      const searchFields = [
        user.username,
        user.phoneNumber,
        user.email,
      ];
  
      // Vérifiez si l'une des propriétés contient la requête de recherche
      return searchFields.some((field) => field.toLowerCase().includes(query.toLowerCase()));
    });
  
    setSearchResults(filteredUsers);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers =
    searchResults.length > 0
      ? searchResults.slice(0, usersPerPage)
      : users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (
      currentPage <
      Math.ceil(
        (searchResults.length > 0 ? searchResults.length : users.length) / usersPerPage
      )
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-20 ml-10 text-white">
      <h2>Utilisateurs Publics</h2>
      <SearchBar onSearch={handleSearch} />
      <table className="mt-4 w-full table-auto bg-black text-black font-bold">
        <thead className="border-2 border-black bg-secondary">
          <tr>
          <th>ID</th>
            <th>Genre</th>
            <th>Pseudo</th>
            <th>Email</th>
            <th>Pays du numéro de téléphone</th>
            <th>Numéro de téléphone</th>
            <th>Vérifié</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody className="bg-primary">
          {currentUsers.map((userData) => (
            <tr key={userData.id}>
              <td className="text-center">{userData.id}</td>
              <td className="text-center">{userData.genre}</td>
              <td className="text-center">{userData.username}</td>
              <td className="text-center">{userData.email}</td>
              <td className="text-center">{userData.phoneNumberCountry}</td>
              <td className="text-center">{userData.phoneNumber}</td>
              <td className="text-center">{userData.isVerified ? 'Oui' : 'Non'}</td>
              <td className="text-center">{userData.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {((searchResults.length === 0 && users.length > usersPerPage) ||
        (searchResults.length > 0 && searchResults.length > usersPerPage)) && (
        <div className="mt-4 flex justify-center">
          {currentPage > 1 && (
            <button
              className="bg-primary text-black px-4 py-2 rounded-full font-semibold mr-2"
              onClick={prevPage}
            >
              Page précédente
            </button>
          )}
          {currentPage <
            Math.ceil(
              (searchResults.length > 0 ? searchResults.length : users.length) / usersPerPage
            ) && (
            <button
              className="bg-primary text-black px-4 py-2 rounded-full font-semibold"
              onClick={nextPage}
            >
              Page suivante
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const ArtistUsersTab = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<UserData[] | []>([]);
  const usersPerPage = 40;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users/getUserData');
        const userData = response.data.users;
    
        // Filtrer les utilisateurs pour ne conserver que ceux avec userType === 'artiste'
        const artistUsers = userData.filter((user: UserData) => user.userType === 'artiste');
    
        setUsers(artistUsers);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
  
    const filteredUsers = users.filter((user) => {
      const searchFields = [
        user.username,
        user.phoneNumber,
        user.email,
        user.firstName, 
      ];
  
      // Vérifiez si l'une des propriétés contient la requête de recherche
      return searchFields.some((field) => field.toLowerCase().includes(query.toLowerCase()));
    });
  
    setSearchResults(filteredUsers);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers =
    searchResults.length > 0
      ? searchResults.slice(0, usersPerPage)
      : users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (
      currentPage <
      Math.ceil(
        (searchResults.length > 0 ? searchResults.length : users.length) / usersPerPage
      )
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-20 ml-10 text-white">
      <h2>Utilisateurs Artistes</h2>
      <SearchBar onSearch={handleSearch} />
      <table className="mt-4 w-full table-auto bg-black text-black font-bold">
        <thead className="border-2 border-black bg-secondary">
            <tr>
              <th>ID</th>
              <th>Genre</th>
              <th>Prénom</th>
              <th>Pseudo</th>
              <th>Âge</th>
              <th>Email</th>
              <th>Pays du numéro de téléphone</th>
              <th>Numéro de téléphone</th>
              <th>Pays</th>
              <th>Ville</th>
              <th>Vérifié</th>
              <th>Admin</th>
          </tr>
        </thead>
        <tbody className="bg-primary">
          {currentUsers.map((userData) => (
            <tr key={userData.id}>
              <td className="text-center">{userData.id}</td>
              <td className="text-center">{userData.genre}</td>
              <td className="text-center">{userData.firstName}</td>
              <td className="text-center">{userData.username}</td>
              <td className="text-center">{userData.age}</td>
              <td className="text-center">{userData.email}</td>
              <td className="text-center">{userData.phoneNumberCountry}</td>
              <td className="text-center">{userData.phoneNumber}</td>
              <td className="text-center">{userData.country}</td>
              <td className="text-center">{userData.city}</td>
              <td className="text-center">{userData.isVerified ? 'Oui' : 'Non'}</td>
              <td className="text-center">{userData.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {((searchResults.length === 0 && users.length > usersPerPage) ||
        (searchResults.length > 0 && searchResults.length > usersPerPage)) && (
        <div className="mt-4 flex justify-center">
          {currentPage > 1 && (
            <button
              className="bg-primary text-black px-4 py-2 rounded-full font-semibold mr-2"
              onClick={prevPage}
            >
              Page précédente
            </button>
          )}
          {currentPage <
            Math.ceil(
              (searchResults.length > 0 ? searchResults.length : users.length) / usersPerPage
            ) && (
            <button
              className="bg-primary text-black px-4 py-2 rounded-full font-semibold"
              onClick={nextPage}
            >
              Page suivante
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const VideosTab: React.FC = () => {
  const [videos, setVideos] = useState<MediaData[]>([]);
  const [searchResults, setSearchResults] = useState<MediaData[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    axios
      .get('/api/dashboard/getVideo')
      .then((response) => {
        const data = response.data;

        if (data && Array.isArray(data)) {
          setVideos(data);
          setSearchResults(data);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const redirectToUpdateVideo = (videoId: number) => {
    router.push(`/dashboardBack/video/updateVideo/${videoId}`);
  };

  const redirectToDeleteVideo = (videoId: number) => {
    router.push(`/dashboardBack/video/deleteVideo/${videoId}`);
  };

  return (
    <div className="mt-20 ml-10 text-white">
      <h2>Vidéos</h2>
      <button
        className="text-left mb-4 text-center transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black"
        onClick={() => router.push(`/dashboardBack/video/addVideo`)}
      >
        Ajouter Vidéo
      </button>
      <table className="mt-4 w-full table-auto bg-black text-black font-bold">
        <thead className="border-2 border-black bg-secondary">
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Contenu</th>
            <th>Lien</th>
            <th>Publier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-primary">
          {videos.map((video) => (
            <tr key={video.id}>
              <td className="text-center">{video.id}</td>
              <td className="text-center">{video.title}</td>
              <td className="text-center">{video.content}</td>
              <td className="text-center">{video.link}</td>
              <td className="text-center">{video.published ? 'Oui' : 'Non'}</td>
              <td className="text-center">
                <button
                  className="text-blue-500 hover:underline mr-2"
                  onClick={() => redirectToUpdateVideo(video.id)}
                >
                  Modifier
                </button>
                <button
                  onClick={() => redirectToDeleteVideo(video.id)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MusicTab: React.FC = () => {
  const [music, setMusic] = useState<MediaData[]>([]);
  const [searchResults, setSearchResults] = useState<MediaData[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    axios
      .get('/api/dashboard/getMusic')
      .then((response) => {
        const data = response.data;

        if (data && Array.isArray(data)) {
          setMusic(data);
          setSearchResults(data);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const redirectToUpdateMusic = (musicId: number) => {
    router.push(`/dashboardBack/music/updateMusic/${musicId}`);
  };

  const redirectToDeleteMusic = (musicId: number) => {
    router.push(`/dashboardBack/music/deleteMusic/${musicId}`);
  };

  return (
    <div className="mt-20 ml-10 text-white">
      <h2>Musique</h2>
      <button
        className="text-left mb-4 text-center transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black"
        onClick={() => router.push(`/dashboardBack/music/addMusic`)}
      >
        Ajouter Musique
      </button>
      <table className="mt-4 w-full table-auto bg-black text-black font-bold">
        <thead className="border-2 border-black bg-secondary">
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Contenu</th>
            <th>Lien</th>
            <th>Publier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-primary">
          {music.map((musicItem) => (
            <tr key={musicItem.id}>
              <td className="text-center">{musicItem.id}</td>
              <td className="text-center">{musicItem.title}</td>
              <td className="text-center">{musicItem.content}</td>
              <td className="text-center">{musicItem.link}</td>
              <td className="text-center">{musicItem.published ? 'Oui' : 'Non'}</td>
              <td className="text-center">
                <button
                  className="text-blue-500 hover:underline mr-2"
                  onClick={() => redirectToUpdateMusic(musicItem.id)}
                >
                  Modifier
                </button>
                <button
                  onClick={() => redirectToDeleteMusic(musicItem.id)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
