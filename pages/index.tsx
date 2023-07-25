import type { NextPage } from "next";
import SectionContent from "../components/section-content";
import PartnersSection from "../components/partners-section";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative text-white w-full min-h-screen">
        <img
          className="absolute w-full h-full object-cover"
          alt=""
          src="/home-background.jpg"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw]">
          <h1 className="w-full text-center text-[8vw] font-title-font m-0">
            <span className="text-secondary">AFRICAN </span>
            <span id="outline-title">PROUD</span>
          </h1>
          <h2 className="w-full text-center text-11xl m-0 md:text-31xl">
            Concours organisé par DJ Moh green
          </h2>
          <p className="w-full text-center">
            Le premier concours 100% digital en afrique francophone
          </p>
          <button className="button-animate relative m-auto mt-20 text-xl px-10 py-3 bg-primary font-bold rounded">
            <span>Participer</span>
          </button>
        </div>
      </div>
      <SectionContent frameHeight="100vh" />
      <section
        className="text-gray-400 bg-black w-full body-font border-y-2 border-solid border-fourth"
        id="numbers"
      >
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-31xl text-11xl text-white">
                430K
              </h2>
              <p className="text-white">Abonnés instagram</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-31xl text-11xl text-white">
                1K
              </h2>
              <p className="text-white">Clubs dans le monde</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-31xl text-11xl text-white">
                250M
              </h2>
              <p className="text-white">Vue total</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-31xl text-11xl text-white">
                20
              </h2>
              <p className="text-white">Années de carrière</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="./concert.jpg"
                />
              </div>
              <h2 className="font-title-font text-31xl font-medium text-white mt-6 mb-3">
                Public
              </h2>
              <p className="text-gray text-base">
                Votez pour vos artistes préférés et suivez le concours et les
                évènements.
              </p>
              <button className="button-animate flex mx-auto mt-6 text-black bg-primary text-xl font-bold border-0 py-3 px-10 focus:outline-none rounded">
                <span>Participer</span>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="./concert-dj.jpg"
                />
              </div>
              <h2 className="font-title-font text-31xl font-medium text-white mt-6 mb-3">
                Artiste
              </h2>
              <p className="text-gray text-base">
                Participez au concours et tentez de remporter [ le grand prix ]
                ainsi qu'un voyage et une production tous frais payés.
              </p>
              <button className="button-animate flex mx-auto mt-6 bg-tertiary text-white text-xl font-bold border-0 py-3 px-10 focus:outline-none rounded">
                <span>Participer</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <PartnersSection />
      <Footer />
    </>
  );
};

export default Home;
