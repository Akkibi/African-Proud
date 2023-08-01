import type { NextPage } from 'next'
import { useMemo } from 'react'
import CSS, { Property } from 'csstype'
import useIntersectionObserver from '../components/useIntersectionObserver'

type SectionContentType = {
  /** Style props */
  frameHeight?: Property.Height
}

const SectionContent: NextPage<SectionContentType> = ({ frameHeight }) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: frameHeight,
    }
  }, [frameHeight])
  const IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // The percentage of the element's visibility needed to trigger the intersection
  }
  useIntersectionObserver(IntersectionObserverInit)

  return (
    <section className="text-gray-400 body-font min-h-[80vh] w-full bg-black">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="viewHide mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h2 className="title-font mb-4 text-11xl font-medium text-white sm:text-31xl">
            First of its kind concert <br className="hidden lg:inline-block" />
            readymade video
          </h2>
          <p className="mb-8 text-gray">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="button-animate inline-flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold focus:outline-none">
              <span>Button</span>
            </button>
            <button className="button-animate ml-4 inline-flex rounded border-0 bg-tertiary px-10 py-3 text-xl font-bold text-white focus:outline-none">
              <span>Button</span>
            </button>
          </div>
        </div>
        <div className="aspect-video w-5/6 md:w-1/2 lg:w-full lg:max-w-2xl">
          <img
            className="h-full w-full rounded object-cover object-center"
            alt="hero"
            src="https://dummyimage.com/1920x1080/1d594e/ffffff.jpg&text=16/9+vid%C3%A9o+"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionContent
