import type { NextPage } from "next";
import PartnersSection from "../components/partners-section";
import { useState, useEffect } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Sponsor: NextPage = () => {
  const [gray, setGray] = useState(true);

  useEffect(() => {
    const participate = document.querySelector("#sponsor-participate");

    if (participate) {
      participate.addEventListener("mouseover", () => {
        setGray(false);
        console.log("enter");
      });

      participate.addEventListener("mouseout", () => {
        setGray(true);
        console.log("leave");
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full h-20 bg-black"></div>
      <PartnersSection />
      <div className="relative border-t border-solid text-white border-tertiary bg-black max-w-[1800] min-h-[80vh] flex flex-col py-10 items-center justify-center gap-lg">
        <img
          src="./sponsor.jpg"
          alt=""
          className="absolute h-full w-full  object-cover opacity-75"
        />
        <div
          className={`h-full w-full duration-500 absolute ${
            !gray && "opacity-0"
          }`}
          id="backdrop-grayscale"
        ></div>
        <div className="self-stretch relative text-center text-31xl">
          Devenir partenaire
        </div>
        <div className="self-stretch relative text-gray text-center">
          <p className="m-0">
            En devenant partenaire de Trace Academia, vous pourrez nous
            accompagner
            <br /> dans notre mission former 26 millions de jeunes d'ici 2026
          </p>
        </div>
        <button
          className="button-animate relative mx-auto mt-20 text-xl px-10 py-3 bg-primary font-bold rou nded"
          id="sponsor-participate"
        >
          <span className="inline-flex items-center">
            Participer
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Sponsor;
