import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SectionImageType = {
  /** Style props */
  mainTitle?: string;
  text1?: string;
  text2?: string;
  button1?: string;
  button2?: string;
  image?: string;
  lienIframe?: string;
};

const SectionImage: NextPage<SectionImageType> = ({
  mainTitle,
  text1,
  text2,
  button1,
  button2,
  image,
  lienIframe,
}) => {
  return (
    <section className="text-gray-400 bg-black body-font w-full min-h-screen border-t border-solid border-tertiary">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col gap-5 items-center min-h-screen">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-31xl text-11xl mb-4 font-medium text-white">
            {mainTitle}
          </h1>
          <p className="mb-8 text-gray">
            {text1}
            <br />
            <br />
            {text2}
          </p>
          <div className="flex justify-center">
            {button1 != "" && (
              <button className="button-animate text-xl inline-flex bg-primary font-bold border-0 py-3 px-10 focus:outline-none rounded">
                <span>{button1}</span>
              </button>
            )}

            {button2 != "" && (
              <button className="button-animate text-xl ml-4 inline-flex bg-tertiary text-white border-0 py-3 px-10 font-bold focus:outline-none rounded">
                <span>{button2}</span>
              </button>
            )}
          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 aspect-video">
          {image != "" && (
            <img
              className="object-cover object-center rounded h-full w-full"
              alt="hero"
              src={image}
            />
          )}
          {lienIframe != "" && (
            <iframe
              width="100%"
              height="100%"
              src={lienIframe}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionImage;
