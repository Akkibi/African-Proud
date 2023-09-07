import type { NextPage } from 'next'
import Footer from './components/footer'
import Navbar from './components/navbar'
import DateFormatter from './components/dateFormatter'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

interface Music {
  id: number;
  title: string;
  content: string;
  link: string;
  createdAt: string;
}

const MusicPage: NextPage = () => {

  const [musicData, setMusicData] = useState<Music[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedMusicId, setSelectedMusicId] = useState<number | null>(null);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      return; 
    }

    setLoading(true);
    fetch('/api/dashboard/getMusic')
      .then((res) => res.json())
      .then((data) => {
        setMusicData(data);
        setLoading(false);
      });
  }, [session]);

  const handleMusicClick = (musicId: number) => {
    setSelectedMusicId(musicId);
  };

  const handleCloseMusic = () => {
    setSelectedMusicId(null);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <section className="min-h-screen py-10 text-gray">
        <h1 className="text-animate w-full text-center text-11xl font-bold text-white sm:text-31xl">
          <span>Vidéo</span>
        </h1>
        <div className="container mx-auto px-5 py-24">
          {session ? (
            <div className="-m-4 flex flex-wrap">
              {!musicData && (
                <p className="w-full p-4 text-center">
                  Aucune vidéo n'a encore été postée
                </p>
              )}
              {musicData && musicData.map((music) => (
            <div
              key={music.id}
              className="border-t border-solid border-light-gray"
            >
              <div className="flex flex-wrap gap-4 py-4 md:flex-nowrap">
                <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                  <img
                    onClick={() => handleMusicClick(music.id)}
                    className="h-full w-full cursor-pointer rounded object-cover object-center"
                    src={`https://i.ytimg.com/vi/${music.link}/hqdefault.jpg`}
                    alt="music"
                  />
                </div>
                <div className="md:flex-grow">
                  <span className="text-sm font-bold text-gray">
                    <DateFormatter date={new Date(music.createdAt)} time={false} />
                  </span>
                  <h2 className="text-2xl mb-2 font-medium text-white">
                    {music.title}
                  </h2>
                  <p className="line-clamp-2 leading-relaxed">{music.content}</p>
                  <a
                    className="my-2 inline-flex cursor-pointer items-center text-secondary"
                    onClick={() => handleMusicClick(music.id)}
                  >
                    Voir la vidéo
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
          ) : (
            <p className="text-center text-white">
              Veuillez vous connecter pour voir le contenu de cette page.
            </p>
          )}
        </div>
      </section>
      {musicData.map((music) => (
        <div
          key={music.id}
          id={music.id.toString()}
          className={`scroll fixed left-0 top-0 z-50 h-full w-full overflow-y-scroll bg-[rgba(0,0,0,0.75)] text-white ${
            selectedMusicId === music.id ? 'block' : 'hidden'
          }`}
        >
          <div
            className="fixed flex cursor-pointer select-none items-center fill-white p-5 text-white"
            onClick={handleCloseMusic}
          >
            <svg
              className="left-0 top-0 z-50 h-8 w-8"
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
            </svg>
            Retour
          </div>
          <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-5 px-5 py-24">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={music.link}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="m-0 text-31xl">{music.title}</h1>
            <DateFormatter date={new Date(music.createdAt)} time={true} />
            <p className="m-0">{music.content}</p>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default MusicPage;
