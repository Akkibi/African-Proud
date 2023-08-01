import type { NextPage } from 'next'

import useIntersectionObserver from '../components/useIntersectionObserver'

const PartnersSection: NextPage = () => {
  const IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // The percentage of the element's visibility needed to trigger the intersection
  }
  useIntersectionObserver(IntersectionObserverInit)
  return (
    <section className="border-t border-solid border-tertiary bg-black">
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center px-5">
        <div className="viewHide w-full text-center lg:w-2/3">
          <h1 className="title-font mb-4 text-11xl font-medium text-white sm:text-31xl">
            Ce projet à été propulsé par ses partenaires
          </h1>
          <p className="mb-8 text-xl text-gray">
            Trace Academia travaille avec de nombreux partenaires, notamment des
            grandes entreprises, des institutions et des experts dans le
            divertissement. le numérique et l'éducation. Tous sont engagés en
            faveur de la jeunesse et partagent notre mission : aider à résoudre
            la crise du chômage des jeunes grâce à des formations ludiques et
            pertinentes.
          </p>
          <div className="flex justify-center p-2">
            <button className="button-animate inline-flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold text-black focus:outline-none">
              <span>Participer</span>
            </button>
            <button className="button-animate ml-4 inline-flex rounded border-0 bg-tertiary px-10 py-3 text-xl font-bold text-white focus:outline-none">
              <span>Contacter</span>
            </button>
          </div>
        </div>
        <img
          className="w-5/6 rounded object-cover object-center py-24 md:w-3/6 lg:w-2/6"
          alt="hero"
          src="/image-16@2x.png"
        />
      </div>
    </section>
  )
}

export default PartnersSection
