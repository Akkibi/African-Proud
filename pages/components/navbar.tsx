import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const Navbar: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [show, setShow] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const logout = async () => {
    await signOut(); 
    router.push('/');
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && burgerOpen === false) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      }
    }
  }, [lastScrollY]);

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
          onClick={() => router.push(`/`)}
        >
          <span className="h-5  w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Accueil</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          onClick={() => router.push(`/videoPage`)}
        >
          <span className="h-5  w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Videos</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          onClick={() => router.push(`/musicPage`)}
        >
          <span className="h-5  w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Musique</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          onClick={() => router.push(`/faq`)}
        >
          <span className="h-5 w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">FAQ</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          onClick={() => router.push(`/agenda`)}
        >
          <span className="h-5 w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">Agenda</span>
        </a>
        <a
          className="flex cursor-pointer flex-row items-center border-b-2 border-solid border-tertiary py-5 no-underline duration-150 hover:translate-x-5 hover:font-bold hover:tracking-widest"
          onClick={() => router.push(`/apropos`)}
        >
          <span className="h-5 w-7 -translate-x-10 rounded bg-primary"></span>
          <span className=" ml-5 w-full text-11xl text-white">À propos</span>
        </a>
        <div className="block md:hidden">
          {session  ? (
            <>
              <button
                className="ml-1 mt-4 inline-flex items-center rounded border-0 bg-white px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                onClick={() => router.push(`/profile/${session?.user.id}`)}
              >
                Profile
              </button>
              <button
                className="ml-2 mt-4 rounded border-0 bg-primary px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                onClick={logout}
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <button
                className="ml-1 mt-4 inline-flex items-center rounded border-0 bg-white px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                onClick={() => router.push('/register')}
              >
                S'inscrire
              </button>
              <button
                className="ml-2 mt-4 rounded border-0 bg-primary px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                onClick={() => router.push('/sign-in')}
              >
                Se connecter
              </button>
            </>
          )}
        </div>
      </div>
      <header
        className={`body-font fixed top-0 z-50 w-full bg-[rgba(0,0,0,0.5)] text-white duration-150 ${
          !show && document ? '-translate-y-full' : ''
        }`.trim()}
        id="navbar"
      >
        <div className="container mx-auto flex max-w-[1200px] flex-row flex-wrap items-center justify-between p-2">
          <a
            onClick={() => router.push(`/`)} 
            className="flex cursor-pointer items-center">
            <img
              src="/logo.png"
              className="h-20 w-20 rounded-full p-2 text-black"
            >
            </img>
            <span className="ml-3 font-title-font text-xl">African Proud</span>
          </a>
          <nav className="text-base hidden flex-wrap items-center justify-center md:ml-auto md:mr-auto lg:flex">
            <a
              className="hover:text-gray-400 ml-1 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/`)}
            >
              Accueil
            </a>
            <a
              className="hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/concours`)}
            >
              Concours
            </a>
            <a
              className="hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/musicPage`)}
            >
              Musique
            </a>
            <a
              className="hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/videoPage`)}
            >
              Vidéo
            </a>
            <a
              className="hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/agenda`)}
            >
              Agenda
            </a>
            <a
              className="hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/faq`)}
            >
              FAQ
            </a>
            <a
              className="hover:text-gray-400 ml-4 cursor-pointer text-white no-underline"
              onClick={() => router.push(`/apropos`)}
            >
              À propos
            </a>
          </nav>
          <div className="hidden md:block">
            {session  ? (
              <>
              <button
                  className="ml-1 mt-4 inline-flex items-center rounded border-0 bg-white px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                  onClick={() => router.push(`/profile/${session.user.id}`)}
                >
                  Profile
                </button>
                <button
                  className="ml-2 mt-4 rounded border-0 bg-primary px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                  onClick={logout}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <button
                  className="ml-1 mt-4 inline-flex items-center rounded border-0 bg-white px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                  onClick={() => router.push('/register')}
                >
                  S'inscrire
                </button>
                <button
                  className="ml-2 mt-4 rounded border-0 bg-primary px-5 py-[9.5px] font-bold opacity-75 duration-200 hover:opacity-100 focus:outline-none md:mt-0"
                  onClick={() => router.push('/sign-in')}
                >
                  Se connecter
                </button>
              </>
            )}
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
