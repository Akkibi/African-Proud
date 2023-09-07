import type { NextPage } from 'next'
import { useMemo } from 'react'
import CSS, { Property } from 'csstype'

type SectionImageType = {
  /** Style props */
  mainTitle?: string
  text1?: string
  text2?: string
  button1?: string
  lienButton1?: string
  button2?: string
  lienButton2?: string
  image?: string
  lienIframe?: string
}

const SectionImage: NextPage<SectionImageType> = ({
  mainTitle,
  text1,
  text2,
  button1,
  lienButton1,
  button2,
  lienButton2,
  image,
  lienIframe,
}) => {
  return (
    <section className="text-gray-400 body-font min-h-screen w-full border-t border-solid border-tertiary">
      <div className="container mx-auto flex min-h-screen flex-col items-center gap-5 px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow">
          <h2 className="text-animate title-font mb-4 text-xl font-medium text-white sm:text-11xl">
            <span>{mainTitle}</span>
          </h2>
          <p className="mb-8 text-gray">
            {text1}
            <br />
            <br />
            {text2}
          </p>
          <div className="flex justify-center">
            {button1 != '' && (
              <button
                onClick={() =>
                  (window.location.href = 'https://www.djmohgreen.com/')
                }
                className="button-animate inline-flex rounded border-0 bg-primary px-10 py-3 text-xl font-bold focus:outline-none"
              >
                <span>{button1}</span>
              </button>
            )}

            {button2 != '' && (
              <button
                onClick={() =>
                  (window.location.href =
                    'https://www.instagram.com/djmohgreen/')
                }
                className="button-animate ml-4 inline-flex rounded border-0 bg-tertiary px-10 py-3 text-xl font-bold text-white focus:outline-none"
              >
                <span>{button2}</span>
              </button>
            )}
          </div>
        </div>
        <div className="aspect-video w-5/6 md:w-1/2 lg:w-full lg:max-w-2xl">
          {image != '' && (
            <img
              className="h-full w-full rounded object-cover object-center"
              alt="hero"
              src={image}
            />
          )}
          {lienIframe != '' && (
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
  )
}

export default SectionImage
