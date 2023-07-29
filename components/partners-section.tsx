import type { NextPage } from "next";

import useIntersectionObserver from "../components/useIntersectionObserver";

const PartnersSection: NextPage = () => {
  const IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.5, // The percentage of the element's visibility needed to trigger the intersection
  };
  useIntersectionObserver(IntersectionObserverInit);
  return (
    <section className="bg-black border-t border-tertiary border-solid">
      <div className="container mx-auto flex mt-10 px-5 items-center justify-center flex-col">
        <div className="viewHide text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-31xl text-11xl mb-4 font-medium text-white">
            Ce projet à été propulsé par ses partenaires
          </h1>
          <p className="text-gray mb-8 text-xl">
            Trace Academia travaille avec de nombreux partenaires, notamment des
            grandes entreprises, des institutions et des experts dans le
            divertissement. le numérique et l'éducation. Tous sont engagés en
            faveur de la jeunesse et partagent notre mission : aider à résoudre
            la crise du chômage des jeunes grâce à des formations ludiques et
            pertinentes.
          </p>
          <div className="flex justify-center p-2">
            <button className="button-animate font-bold inline-flex text-black border-0 py-3 px-10 focus:outline-none bg-primary rounded text-xl">
              <span>Participer</span>
            </button>
            <button className="button-animate ml-4 inline-flex font-bold text-white border-0 py-3 px-10 focus:outline-none bg-tertiary rounded text-xl">
              <span>Contacter</span>
            </button>
          </div>
        </div>
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 py-24 object-cover object-center rounded"
          alt="hero"
          src="/image-16@2x.png"
        />
      </div>
    </section>
  );
};

export default PartnersSection;
