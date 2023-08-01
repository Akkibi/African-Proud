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
      <div className="top-0 m-0 h-full min-h-screen w-full">
        <h1 className="text-gray-800 m-0 p-0 text-31xl font-semibold capitalize tracking-wider text-black">
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
