import type { NextPage } from 'next'
import { LinkHTMLAttributes, useEffect } from 'react'
import image2 from '../public/2.png'
import image4 from '../public/4.png'
import image6 from '../public/6.png'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { URL } from 'url'

const prod1 = image2.src
const prod2 = image4.src
const prod3 = image6.src

const Concours: NextPage = () => {
  const downloadFileAtURL = (url: string) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', url.split('/').pop())
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
      })
    })
  }
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font min-h-screen py-24 text-white">
        <h1 className="text-animate w-full text-center text-11xl font-bold text-white sm:text-31xl">
          <span>Concours</span>
        </h1>
        <div className="container mx-auto px-5 py-10">
          <div className="flex flex-col flex-wrap gap-4 pb-10">
            <h2 className="mx-auto my-0 text-xl sm:text-11xl">
              Vidéo explication
            </h2>
            <div className="mx-auto aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UwsrzCVZAb8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mx-auto my-0">
              Voici une vidéo recapitulatif des étapes du concours.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font min-h-screen py-24 text-white">
        <div className="container mx-auto px-5 py-10">
          <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4">
            <div className="mb-6 w-full p-4 sm:mb-0 md:w-1/3">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={image2.src}
                />
              </div>
              <h2 className="text-gray-900 mt-5 text-xl font-medium sm:text-11xl">
                Telecharger les instrumentales
              </h2>
              <p className="mt-2 leading-relaxed text-gray">
                Clickez le bouton pour télécharger les prod
              </p>
              <button
                className="button-animate mt-6 flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold text-black focus:outline-none"
                onClick={() => {
                  downloadFileAtURL(prod1)
                }}
              >
                <span>Instrumentale 1</span>
              </button>

              <button
                className="button-animate mt-6 flex rounded border-0 bg-secondary px-10 py-3 text-xl font-bold text-black focus:outline-none"
                onClick={() => {
                  downloadFileAtURL(prod1)
                }}
              >
                <span>Instrumentale 2</span>
              </button>

              <button
                className="button-animate mt-6 flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold text-black focus:outline-none"
                onClick={() => {
                  downloadFileAtURL(prod1)
                }}
              >
                <span>Instrumentale 3</span>
              </button>
            </div>
            <div className="mb-6 w-full  p-4 sm:mb-0 md:w-1/3">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={image4.src}
                />
              </div>
              <h2 className="text-gray-900 mt-5 text-xl font-medium sm:text-11xl">
                Production
              </h2>
              <p className="mt-2 leading-relaxed text-gray">
                Rajoutez votre voix sur un dex trois sons et modifiez la jusqu'à
                ce que vous soyez satisfait
              </p>
            </div>
            <div className="mb-6 w-full p-4  sm:mb-0 md:w-1/3">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={image6.src}
                />
              </div>
              <h2 className="text-gray-900 mt-5 text-xl font-medium sm:text-11xl">
                Uploader
              </h2>
              <p className="mt-2 leading-relaxed text-gray">
                Rendez vous sur la plateforme de depot et signez le contrat de
                royalties.
              </p>
              <button className="button-animate mt-6 flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold text-black focus:outline-none">
                <span>Y aller</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Concours
