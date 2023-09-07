"use client"
import type { NextPage } from 'next'
import SectionContent from './components/section-content'
import PartnersSection from './components/partners-section'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { useRouter } from 'next/router';
import useIntersectionObserver from './components/useIntersectionObserver'

const Home: NextPage = () => {
  const router = useRouter();
  const IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // The percentage of the element's visibility needed to trigger the intersection
  }
  useIntersectionObserver(IntersectionObserverInit)

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white">
        <img
          className="absolute h-full w-full object-cover"
          alt=""
          src="/home-background.jpg"
        />
        <div className="absolute left-1/2 top-1/2 w-[90vw] -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-animate m-0 w-full text-center font-title-font text-[8vw]">
            <span className="text-secondary">AFRICAN </span>
            <span id="outline-title">PROUD</span>
          </h1>
          <h2 className="viewHide m-0 block w-full text-center text-11xl md:text-31xl">
            <span className="inline-block">
              Concours organisé par DJ Moh Green
            </span>
          </h2>
          <p className="viewHide w-full text-center">
            <span className="inline-block">
              Le premier concours 100% digital en afrique francophone
            </span>
          </p>
          <button
            onClick={() => router.push(`/register`)}
           className="button-animate relative m-auto mt-20 rounded bg-primary px-10 py-3 text-xl font-bold">
            <span>Participer</span>
          </button>
        </div>
      </div>
      <SectionContent frameHeight="100vh" />
      <section
        className="text-gray-400 body-font w-full border-y-2 border-solid border-fourth bg-black"
        id="numbers"
      >
        <div className="container mx-auto px-5 py-10">
          <div className="viewHide -m-4 flex flex-wrap text-center">
            <div className="w-1/2 p-4 sm:w-1/4">
              <h2 className="title-font text-11xl font-medium text-white sm:text-31xl">
                430K
              </h2>
              <p className="text-white">Abonnés instagram</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/4">
              <h2 className="title-font text-11xl font-medium text-white sm:text-31xl">
                1K
              </h2>
              <p className="text-white">Clubs dans le monde</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/4">
              <h2 className="title-font text-11xl font-medium text-white sm:text-31xl">
                250M
              </h2>
              <p className="text-white">Vue total</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/4">
              <h2 className="title-font text-11xl font-medium text-white sm:text-31xl">
                20
              </h2>
              <p className="text-white">Années de carrière</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font bg-black">
        <div className="container mx-auto px-5 py-24">
          <div className="-mx-4 -mb-10 flex flex-wrap text-center">
            <div className="viewHide mb-10 px-4 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src="./concert.jpg"
                />
              </div>
              <h2 className="mb-3 mt-6 font-title-font text-31xl font-medium text-white">
                Public
              </h2>
              <p className="text-base text-gray">
                Votez pour vos artistes préférés et suivez le concours et les
                évènements.
              </p>
              <div className="p-2">
                <button
                onClick={() => router.push(`/register`)} 
                className="button-animate mx-auto mt-6 flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold text-black focus:outline-none">
                  <span>Participer</span>
                </button>
              </div>
            </div>
            <div className="viewHide mb-10 px-4 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src="./concert-dj.jpg"
                />
              </div>
              <h2 className="mb-3 mt-6 font-title-font text-31xl font-medium text-white">
                Artiste
              </h2>
              <p className="text-base text-gray">
                Participez au concours et tentez de remporter <strong>10 000 euros </strong>
                ainsi qu'une performance lors d'un grand concert.
              </p>
              <div className="p-2">
                <button
                onClick={() => router.push(`/register`)} 
                className="button-animate mx-auto flex rounded border-0 bg-tertiary px-10 py-3 text-xl font-bold text-white focus:outline-none">
                  <span>Participer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnersSection />
      <Footer />
    </>
  )
}

export default Home
