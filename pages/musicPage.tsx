import type { NextPage } from 'next'
import type { Music } from '@prisma/client'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import DateFormatter from '../components/dateFormatter'

import { useState, useEffect } from 'react'
import { time } from 'console'

let date: Date = new Date()

const MusicPage: NextPage = () => {
  const [data, setData] = useState<Music[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/getMusic')
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
      <section className="text-gray">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="border-gray-200 h-full overflow-hidden rounded-lg border-2 border-opacity-60">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="text-xs title-font text-gray-400 mb-1 font-medium tracking-widest">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-medium">
                    The Catalyzer
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
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
                    <span className="text-gray-400 text-sm border-gray-200 ml-auto mr-3 inline-flex items-center border-r-2 py-1 pr-3 leading-none md:ml-0 lg:ml-auto">
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
                    <span className="text-gray-400 text-sm inline-flex items-center leading-none">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="border-gray-200 h-full overflow-hidden rounded-lg border-2 border-opacity-60">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="text-xs title-font text-gray-400 mb-1 font-medium tracking-widest">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-medium">
                    The 400 Blows
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex flex-wrap items-center">
                    <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
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
                    <span className="text-gray-400 text-sm border-gray-200 ml-auto mr-3 inline-flex items-center border-r-2 py-1 pr-3 leading-none md:ml-0 lg:ml-auto">
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
                    <span className="text-gray-400 text-sm inline-flex items-center leading-none">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="border-gray-200 h-full overflow-hidden rounded-lg border-2 border-opacity-60">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="text-xs title-font text-gray-400 mb-1 font-medium tracking-widest">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg text-gray-900 mb-3 font-medium">
                    Shooting Stars
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                      Learn More
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
                    <span className="text-gray-400 text-sm border-gray-200 ml-auto mr-3 inline-flex items-center border-r-2 py-1 pr-3 leading-none md:ml-0 lg:ml-auto">
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
                    <span className="text-gray-400 text-sm inline-flex items-center leading-none">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="top-0 m-0 h-full min-h-screen w-full text-white">
        <h1 className="text-gray-800 m-0 p-0 text-31xl font-semibold capitalize tracking-wider text-white">
          music
        </h1>
        <div>
          {data &&
            data.map((data) => (
              <div key={data.id}>
                <h1>{data.title}</h1>
                <DateFormatter date={new Date(data.createdAt)} time={true} />
                <br />
                <p>{data.content}</p>
                <br />
                <p>{data.link}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MusicPage
