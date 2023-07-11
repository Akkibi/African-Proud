import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SectionContentType = {
  /** Style props */
  frame65Height?: Property.Height;
};

const SectionContent: NextPage<SectionContentType> = ({ frame65Height }) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: frame65Height,
    };
  }, [frame65Height]);

  return (
    <section className="text-gray-400 bg-black body-font w-full">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-31xl text-11xl mb-4 font-medium text-white">
            First of its kind concert <br className="hidden lg:inline-block" />
            readymade video
          </h1>
          <p className="mb-8 text-gray">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="button-animate text-xl inline-flex bg-primary font-bold border-0 py-3 px-10 focus:outline-none rounded">
              <span>Button</span>
            </button>
            <button className="button-animate text-xl ml-4 inline-flex bg-tertiary text-white border-0 py-3 px-10 font-bold focus:outline-none rounded">
              <span>Button</span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 aspect-video">
          <img
            className="object-cover object-center rounded h-full w-full"
            alt="hero"
            src="https://dummyimage.com/1920x1080/1d594e/ffffff.jpg&text=16/9+vid%C3%A9o+"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
