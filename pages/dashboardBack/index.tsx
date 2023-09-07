import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import SearchBar from '../components/searchBar';
import router, { useRouter } from 'next/router';

const Dashboard: NextPage = () => {
  const [activeTab, setActiveTab] = useState('publicUsers');
  const router = useRouter(); // Initialisez useRouter


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
          {activeTab === 'news' && <NewsTab />}
        </div>
      </div>
    </>
  );
};

const PublicUsersTab = () => {
    const [publicUsers, setPublicUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const usersPerPage = 40;
  
    useEffect(() => {
      const fetchPublicData = async () => {
        try {
          const response = await axios.get('/api/users/getUserData');
          const userData = response.data;
  
          if (userData.publicUsers && Array.isArray(userData.publicUsers)) {
            setPublicUsers(userData.publicUsers);
          }
        } catch (error: any) {
          toast.error(error.message);
        }
      };
  
      fetchPublicData();
    }, []);
  
    const handleSearch = (query) => {
      if (!query) {
        setSearchResults([]);
        return;
      }
  
      const filteredUsers = publicUsers.filter((user) => {
        return (
          user.username.toLowerCase().includes(query.toLowerCase()) ||
          user.phoneNumber.toString().includes(query.toString()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
        );
      });
  
      setSearchResults(filteredUsers);
    };
  
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = searchResults.length > 0 ? searchResults.slice(0, usersPerPage) : publicUsers.slice(indexOfFirstUser, indexOfLastUser);
  
    const nextPage = () => {
      if (currentPage < Math.ceil((searchResults.length > 0 ? searchResults.length : publicUsers.length) / usersPerPage)) {
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
        <h2>Utilisateurs Publique</h2>
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
            {currentUsers.map((user) => (
              <tr key={user._id}>
                <td className="text-center">{user._id}</td>
                <td className="text-center">{user.genre}</td>
                <td className="text-center">{user.username}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.phoneNumberCountry}</td>
                <td className="text-center">{user.phoneNumber}</td>
                <td className="text-center">{user.isVerified ? 'Oui' : 'Non'}</td>
                <td className="text-center">{user.isAdmin ? 'Oui' : 'Non'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {((searchResults.length === 0 && publicUsers.length > usersPerPage) || (searchResults.length > 0 && searchResults.length > usersPerPage)) && (
          <div className="mt-4 flex justify-center">
            {currentPage > 1 && (
              <button
                className="bg-primary text-black px-4 py-2 rounded-full font-semibold mr-2"
                onClick={prevPage}
              >
                Page précédente
              </button>
            )}
            {currentPage < Math.ceil((searchResults.length > 0 ? searchResults.length : publicUsers.length) / usersPerPage) && (
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
    const [artistUsers, setArtistUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const usersPerPage = 40;
  
    useEffect(() => {
      const fetchArtistData = async () => {
        try {
          const response = await axios.get('/api/users/getUserData');
          const userData = response.data;
  
          if (userData.artistUsers && Array.isArray(userData.artistUsers)) {
            setArtistUsers(userData.artistUsers);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
  
      fetchArtistData();
    }, []);
  
    const handleSearch = (query) => {
      if (!query) {
        setSearchResults([]);
        return;
      }
  
      const filteredUsers = artistUsers.filter((user) => {
        return (
            user.username.toLowerCase().includes(query.toLowerCase()) ||
            user.firstName.toLowerCase().includes(query.toLowerCase()) ||
            user.phoneNumber.toString().includes(query.toString()) || // Recherche par numéro de téléphone
            user.email.toLowerCase().includes(query.toLowerCase())
        );
      });
  
      setSearchResults(filteredUsers);
    };
  
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = searchResults.length > 0 ? searchResults.slice(0, usersPerPage) : artistUsers.slice(indexOfFirstUser, indexOfLastUser);
  
    const nextPage = () => {
      if (currentPage < Math.ceil((searchResults.length > 0 ? searchResults.length : artistUsers.length) / usersPerPage)) {
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
            </tr>
          </thead>
          <tbody className="bg-primary">
            {currentUsers.map((user) => (
              <tr key={user._id}>
                <td className="text-center">{user._id}</td>
                <td className="text-center">{user.genre}</td>
                <td className="text-center">{user.firstName}</td>
                <td className="text-center">{user.username}</td>
                <td className="text-center">{user.age}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.phoneNumberCountry}</td>
                <td className="text-center">{user.phoneNumber}</td>
                <td className="text-center">{user.country}</td>
                <td className="text-center">{user.city}</td>
                <td className="text-center">{user.isVerified ? 'Oui' : 'Non'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {((searchResults.length === 0 && artistUsers.length > usersPerPage) || (searchResults.length > 0 && searchResults.length > usersPerPage)) && (
          <div className="mt-4 flex justify-center">
            {currentPage > 1 && (
              <button
                className="bg-primary text-black px-4 py-2 rounded-full font-semibold mr-2"
                onClick={prevPage}
              >
                Page précédente
              </button>
            )}
            {currentPage < Math.ceil((searchResults.length > 0 ? searchResults.length : artistUsers.length) / usersPerPage) && (
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
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
  
      axios
        .get('/api/dashboard/getVideo')
        .then((response) => {
          const data = response.data;
  
          if (data && Array.isArray(data)) {
            setVideos(data);
          }
  
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, []);
  
    const redirectToUpdateVideo = (videoId) => {
      router.push(`/dashboardBack/video/updateVideo/${videoId}`);
    };
    const redirectToDeleteVideo = (videoId) => {
      router.push(`/dashboardBack/video/deleteVideo/${videoId}`);
    };
  
    return (
      <div className="mt-20 ml-10 text-white">
        <h2>Vidéos</h2>
        <button
          className="text-left mb-4 text-center transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black"
          onClick={() => router.push(`/dashboardBack/video/addVideo`)}
        >
          Ajouter Video
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
              <tr key={video._id}>
                <td className="text-center">{video._id}</td>
                <td className="text-center">{video.title}</td>
                <td className="text-center">{video.content}</td>
                <td className="text-center">{video.link}</td>
                <td className="text-center">{video.published ? 'Oui' : 'Non'}</td>
                <td className="text-center">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => redirectToUpdateVideo(video._id)}
                  >
                    Modifier
                  </button>
                  <button 
                  onClick={() => redirectToDeleteVideo(video._id)}
                  className="text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

  const NewsTab: React.FC = () => {
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
  
      axios
        .get('/api/dashboard/getMusic')
        .then((response) => {
          const data = response.data;
  
          if (data && Array.isArray(data)) {
            setMusic(data);
          }
  
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, []);
  
    const redirectToUpdateMusic = (musicId) => {
      router.push(`/dashboardBack/music/updateMusic/${musicId}`);
    };
    const redirectToDeleteMusic = (musicId) => {
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
            {music.map((music) => (
              <tr key={music._id}>
                <td className="text-center">{music._id}</td>
                <td className="text-center">{music.title}</td>
                <td className="text-center">{music.content}</td>
                <td className="text-center">{music.link}</td>
                <td className="text-center">{music.published ? 'true' : 'false'}</td>
                <td className="text-center">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => redirectToUpdateMusic(music._id)}
                  >
                    Modifier
                  </button>
                  <button 
                  onClick={() => redirectToDeleteMusic(music._id)}
                  className="text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Dashboard;
