import type { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";

const Navbar: NextPage = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <div className="fixed flex flex-col bg-black h-full w-full z-40">
        <div className=" h-16 w-full bg-tertiary"></div>
        <a
          className="py-5 border-t border-solid border-tertiary no-underline hover:translate-x-5 duration-150 flex flex-row items-center cursor-pointer"
          href="./"
        >
          <span className="h-5  w-7 bg-primary -translate-x-10 rounded"></span>
          <span className=" text-white ml-5 text-11xl hover:text-gray-400">
            Accueil
          </span>
        </a>
        <a
          className="py-5 border-t border-solid border-tertiary no-underline hover:translate-x-5 duration-150 flex flex-row items-center cursor-pointer"
          href="./faq"
        >
          <span className="h-5 w-7 bg-primary -translate-x-10 rounded"></span>
          <span className=" text-white ml-5 text-11xl hover:text-gray-400">
            FAQ
          </span>
        </a>
        <a
          className="py-5 border-t border-solid border-tertiary no-underline hover:translate-x-5 duration-150 flex flex-row items-center cursor-pointer"
          href="./sponsor"
        >
          <span className="h-5 w-7 bg-primary -translate-x-10 rounded"></span>
          <span className=" text-white ml-5 text-11xl hover:text-gray-400">
            Partenariat
          </span>
        </a>
        <a
          className="py-5 border-t border-solid border-tertiary no-underline hover:translate-x-5 duration-150 flex flex-row items-center cursor-pointer"
          href="./agenda"
        >
          <span className="h-5 w-7 bg-primary -translate-x-10 rounded"></span>
          <span className=" text-white ml-5 text-11xl hover:text-gray-400">
            Agenda
          </span>
        </a>
        <a
          className="py-5 border-t border-solid border-tertiary no-underline hover:translate-x-5 duration-150 flex flex-row items-center cursor-pointer"
          href="./about"
        >
          <span className="h-5 w-7 bg-primary -translate-x-10 rounded"></span>
          <span className=" text-white ml-5 text-11xl hover:text-gray-400">
            À propos
          </span>
        </a>
        <a
          className="py-5 border-t border-solid border-tertiary no-underline hover:translate-x-5 duration-150 flex flex-row items-center cursor-pointer"
          href="./contact"
        >
          <span className="h-5 w-7 bg-primary -translate-x-10 rounded"></span>
          <span className=" text-white ml-5 text-11xl hover:text-gray-400">
            Contact
          </span>
        </a>
        <div className="block md:hidden">
          <button className=" ml-3 inline-flex items-center border-0 py-3 bg-white opacity-75 hover:opacity-100 px-6 focus:outline-none duration-200 rounded font-bold mt-4 md:mt-0">
            S'inscrire
          </button>
          <button className=" ml-3 bg-primary border-0 py-3 px-6 focus:outline-none opacity-75 hover:opacity-100 rounded mt-4 md:mt-0 duration-200 font-bold">
            Se connecter
          </button>
        </div>
      </div>
      <header
        className={`body-font top-0 w-full fixed z-50 text-white bg-[rgba(0,0,0,0.5)] duration-150  active ${
          !show && "-translate-y-full"
        }`}
        id="navbar"
      >
        <div className="container flex flex-wrap justify-between p-2 flex-row items-center max-w-[1200px] mx-auto">
          <a className="flex items-center mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-black p-2 bg-primary rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-title-font">African Proud</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden lg:block">
            <a
              className=" no-underline text-white ml-5 hover:text-gray-400 cursor-pointer"
              href="./"
            >
              Accueil
            </a>
            <a
              className=" no-underline text-white ml-5 hover:text-gray-400 cursor-pointer"
              href="./faq"
            >
              FAQ
            </a>
            <a
              className=" no-underline text-white ml-5 hover:text-gray-400 cursor-pointer"
              href="./sponsor"
            >
              Partenariat
            </a>
            <a
              className=" no-underline text-white ml-5 hover:text-gray-400 cursor-pointer"
              href="./agenda"
            >
              Agenda
            </a>
            <a
              className=" no-underline text-white ml-5 hover:text-gray-400 cursor-pointer"
              href="./about"
            >
              À propos
            </a>
            <a
              className=" no-underline text-white ml-5 hover:text-gray-400 cursor-pointer"
              href="./contact"
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <button className=" ml-3 inline-flex items-center border-0 py-3 bg-white opacity-75 hover:opacity-100 px-6 focus:outline-none duration-200 rounded font-bold mt-4 md:mt-0">
              S'inscrire
            </button>
            <button className=" ml-3 bg-primary border-0 py-3 px-6 focus:outline-none opacity-75 hover:opacity-100 rounded mt-4 md:mt-0 duration-200 font-bold">
              Se connecter
            </button>
          </div>
          <button
            className="bg-black h-10 w-10 scale-110 ml-5 lg:hidden rounded-full display flex flex-col items-center justify-center border-solid hover:border border-light-gray hover:bg-dark-gray duration-150"
            id="burger-button"
          >
            <div className="h-[2px] w-6 bg-white rounded"></div>
            <div className="h-[2px] w-6 bg-white rounded my-1"></div>
            <div className="h-[2px] w-6 bg-white rounded"></div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
