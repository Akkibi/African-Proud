import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useState } from 'react'

const Navbar: NextPage = () => {
  const [show, setShow] = useState(true)
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  //move navbar up or down
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && burgerOpen === false) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }
  //get if scroll up or down
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <>
      <div
        className={`fixed top-0 z-40 flex h-screen w-full flex-col rounded-br-[100%] bg-[rgba(0,0,0,0.85)] ease-out lg:hidden ${
          burgerOpen === false ? '-translate-y-full ' : '!rounded-none'
        }`}
        style={{
          transition: 'all .8s cubic-bezier(.7, 0, .2, 1)',
        }}
      >
        <div className=" h-16 w-full bg-black"></div>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          href="./"
        >
          <span className="h-5  w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Accueil</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          href="./videoPage"
        >
          <span className="h-5  w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Videos</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          href="./musicPage"
        >
          <span className="h-5  w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Musique</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          href="./faq"
        >
          <span className="h-5 w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">FAQ</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          href="./agenda"
        >
          <span className="h-5 w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Agenda</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          href="./about"
        >
          <span className="h-5 w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">À propos</span>
        </a>
        <div className="block md:hidden">
          <button
            className=" ml-3 mt-4 inline-flex items-center rounded border-0 bg-white px-6 py-3 font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
            onClick={() => (window.location.pathname = '/register')}
          >
            S'inscrire
          </button>
          <button
            className=" ml-3 mt-4 rounded border-0 bg-primary px-6 py-3 font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
            onClick={() => (window.location.pathname = '/sign-in')}
          >
            Se connecter
          </button>
        </div>
      </div>
      <header
        className={`body-font fixed top-0 z-50 w-full bg-[rgba(0,0,0,0.5)] text-white duration-150 ${
          !show && document ? '-translate-y-full' : ''
        }`.trim()}
        id="navbar"
      >
        <div className="container mx-auto flex max-w-[1200px] flex-row flex-wrap items-center justify-between p-2">
          <a className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-primary p-2 text-black"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 font-title-font text-xl">African Proud</span>
          </a>
          <nav className="text-base hidden flex-wrap items-center justify-center md:ml-auto md:mr-auto lg:flex">
            <a
              className=" hover:text-gray-400 ml-1 cursor-pointer text-white no-underline"
              href="./"
            >
              Accueil
            </a>
            <a
              className=" hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              href="./concours"
            >
              Concours
            </a>
            <a
              className=" hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              href="./musicPage"
            >
              Musique
            </a>
            <a
              className=" hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              href="./videoPage"
            >
              Vidéo
            </a>
            <a
              className=" hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              href="./agenda"
            >
              Agenda
            </a>
            <a
              className=" hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              href="./faq"
            >
              FAQ
            </a>
            <a
              className=" hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              href="./about"
            >
              À propos
            </a>
          </nav>
          <div className="hidden md:block">
            <button
              className=" ml-1 mt-4 inline-flex items-center rounded border-0 bg-white px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
              onClick={() => (window.location.pathname = '/register')}
            >
              S'inscrire
            </button>
            <button
              className=" ml-2 mt-4 rounded border-0 bg-primary px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
              onClick={() => (window.location.pathname = '/sign-in')}
            >
              Se connecter
            </button>
          </div>
          <button
            onClick={() =>
              burgerOpen ? setBurgerOpen(false) : setBurgerOpen(true)
            }
            className="display ml-5 flex h-10 w-10 scale-110 flex-col items-center justify-center rounded-full border-solid border-light-gray bg-black duration-150 hover:border hover:bg-dark-gray lg:hidden"
            id="burger-button"
          >
            <div className="h-[2px] w-6 rounded bg-white"></div>
            <div className="my-1 h-[2px] w-6 rounded bg-white"></div>
            <div className="h-[2px] w-6 rounded bg-white"></div>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
