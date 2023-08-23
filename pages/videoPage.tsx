import type { NextPage } from 'next'
import type { Video } from '@prisma/client'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import DateFormatter from '../components/dateFormatter'

import { useState, useEffect } from 'react'
import { time } from 'console'

let date: Date = new Date()

const VideoPage: NextPage = () => {
  const [data, setData] = useState<Video[] | null>([])
  const [isLoading, setLoading] = useState(false)
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('/api/getVideo')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data || data.length === 0) return <p>No profile data</p>
  return (
    <>
      <Navbar />

      <section className="min-h-screen py-10 text-gray">
        <h1 className="text-animate w-full text-center text-11xl font-bold text-white sm:text-31xl">
          <span>Vidéo</span>
        </h1>
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            {!data && (
              <p className="w-full p-4 text-center">
                Acune vidéo n'à encore été posté
              </p>
            )}
            {data &&
              data.map((data) => (
                <div className="p-4 md:w-1/2 lg:w-1/3">
                  <div className="h-full overflow-hidden rounded-lg border border-solid border-light-gray border-opacity-60">
                    <img
                      onClick={() => setSelectedVideoId(data.id)}
                      className="w-full cursor-pointer object-cover object-center md:h-36 lg:h-48"
                      src={
                        'https://i.ytimg.com/vi/' + data.link + '/hqdefault.jpg'
                      }
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="mt-0 text-xl font-medium text-gray">
                        <DateFormatter
                          date={new Date(data.createdAt)}
                          time={false}
                        />
                      </h2>
                      <h1 className="text-lg mb-3 font-medium text-white">
                        {data.title}
                      </h1>
                      <p className="mb-3 line-clamp-3 overflow-ellipsis leading-relaxed">
                        {data.content}
                      </p>
                      <div className="flex flex-wrap items-center ">
                        <a
                          // href="#"
                          onClick={() => setSelectedVideoId(data.id)}
                          className="inline-flex cursor-pointer items-center text-secondary md:mb-2 lg:mb-0"
                        >
                          Voir la vidéo
                          <svg
                            className="ml-2 h-4 w-4"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-sm ml-auto mr-3 inline-flex items-center border-r-2 border-gray py-1 pr-3 leading-none text-gray md:ml-0 lg:ml-auto">
                          <svg
                            className="mr-1 h-4 w-4"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {data.map((data) => (
        <div
          key={data.id}
          id={data.id.toString()}
          className={`scroll fixed left-0 top-0 z-50 h-full w-full overflow-y-scroll bg-[rgba(0,0,0,0.75)] text-white ${
            selectedVideoId === data.id ? 'block' : 'hidden'
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
          <div className=" mx-auto flex min-h-screen max-w-[1200px] flex-col gap-5 px-5 py-24">
            <div className="aspect-video w-full" allow="fullscreen;">
              <iframe
                width="100%"
                height="100%"
                src={
                  selectedVideoId === data.id
                    ? 'https://www.youtube.com/embed/' + data.link.toString()
                    : 'https://www.youtube.com/embed/'
                }
                title="YouTube video player"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope, fullscreen;
              picture-in-picture; web-share"
              ></iframe>
            </div>
            <h1 className="m-0 text-31xl">{data.title}</h1>
            <DateFormatter date={new Date(data.createdAt)} time={true} />
            <p className="m-0">{data.content}</p>
          </div>
        </div>
      ))}
      <Footer />
    </>
  )
}

export default VideoPage