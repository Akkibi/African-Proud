import type { NextPage } from 'next';
import Footer from './components/footer';
import Navbar from './components/navbar';
import DateFormatter from './components/dateFormatter';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface MediaData {
  id: number;
  title: string;
  content: string;
  link: string;
  published: boolean;
  createdAt: string;
}

const VideoPage: NextPage = () => {
  const [data, setData] = useState<MediaData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    setLoading(true);
    fetch('/api/dashboard/getVideo')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

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
              {!data && (
                <p className="w-full p-4 text-center">
                  Aucune vidéo n'a encore été postée
                </p>
              )}
              {data &&
                data.map((video) => (
                  <div className="p-4 md:w-1/2 lg:w-1/3" key={video.id}>
                    <div className="h-full overflow-hidden rounded-lg border border-solid border-light-gray border-opacity-60">
                      <img
                        onClick={() => setSelectedVideoId(video.id)}
                        className="w-full cursor-pointer object-cover object-center md:h-36 lg:h-48"
                        src={`https://i.ytimg.com/vi/${video.link}/hqdefault.jpg`}
                        alt="video-thumbnail"
                      />
                      <div className="p-6">
                        <h2 className="mt-0 text-xl font-medium text-gray">
                          <DateFormatter date={new Date(video.createdAt)} time={false} />
                        </h2>
                        <h1 className="text-lg mb-3 font-medium text-white">
                          {video.title}
                        </h1>
                        <p className="mb-3 line-clamp-3 overflow-ellipsis leading-relaxed">
                          {video.content}
                        </p>
                        <div className="flex flex-wrap items-center">
                          <a
                            onClick={() => setSelectedVideoId(video.id)}
                            className="inline-flex cursor-pointer items-center text-secondary md:mb-2 lg:mb-0"
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
                          <span className="text-sm ml-auto mr-3 inline-flex items-center border-r-2 border-gray py-1 pr-3 leading-none text-gray md:ml-0 lg:ml-auto">
                            {/* Insérez ici d'autres éléments si nécessaire */}
                          </span>
                        </div>
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

      {data.map((video) => (
        <div
          key={video.id}
          id={video.id.toString()}
          className={`scroll fixed left-0 top-0 z-50 h-full w-full overflow-y-scroll bg-[rgba(0,0,0,0.75)] text-white ${
            selectedVideoId === video.id ? 'block' : 'hidden'
          }`}
        >
          <div
            className="fixed flex cursor-pointer select-none items-center fill-white p-5 text-white"
            onClick={() => setSelectedVideoId(null)}
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
                title="YouTube video player"
                allowFullScreen
                src={video.link}
              ></iframe>
            </div>
            <h1 className="m-0 text-31xl">{video.title}</h1>
            <DateFormatter date={new Date(video.createdAt)} time={true} />
            <p className="m-0">{video.content}</p>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default VideoPage;
