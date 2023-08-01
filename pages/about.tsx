import type { NextPage } from 'next'
import SectionImage from '../components/Section-image'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-400 body-font min-h-screen w-full border-t border-solid border-tertiary bg-black">
        <div className="container mx-auto flex min-h-screen flex-col items-center gap-5 px-5 py-24">
          <h1 className="text-animate w-full text-center text-11xl text-white sm:text-31xl">
            <span>A propos</span>
          </h1>
          <div className="mb-16 flex w-full flex-col items-center md:mb-0 md:items-start md:text-left lg:flex-grow">
            <h2 className="title-font mb-4 text-xl font-medium text-white sm:text-11xl">
              <span>Projet African Proud</span>
            </h2>
            <p className="mb-8 text-gray">
              Le projet African Proud, fondé par Moh Green, voit le jour en
              2019, à l’occasion de la Coupe d’Afrique des Nations de football
              (CAN).
              <br />
              <br />
              Poussé par l’envie de mettre l’Afrique entière à l’honneur, unie
              par le sport et le fair-play face au football, il décide de
              rassembler sur une même musique 10 artistes africains venus de
              pays différents et plus de 40 célébrités apparaissant dans le
              clip. Sa vision panafricaniste lui a permis de réaliser ce son
              fédérateur, qui deviendra par ailleurs le générique officiel de la
              CAN, diffusé sur BeIN Sports.
              <br />
            </p>
            <div className="text-animate aspect-video w-full">
              <span className="h-full w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/V7kypRDQ1-Q"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </span>
            </div>

            <p className="mb-8 text-gray">
              <br />
              Mais Moh Green ne va pas s’arrêter là; il renouvèle l’expérience à
              l’occasion de la CAN 2023 en Côte d’Ivoire (décalée en janvier
              2024), en sortant son projet “African Proud 2”, toujours dans une
              même optique de rassemblement et d’ouverture à l’autre. Une seule
              Afrique fière et unifiée ; des Africains solidaires et ouverts à
              l’autre ; voilà le message de Moh Green. Que ce soit dans le sport
              ou dans la musique, l’Afrique regorge de talents. Néanmoins, le
              continent reste très limité en termes de structures et
              d’accompagnement.
              <br />
              <br />
              L’artiste compte accompagner cette sortie d’un jeu concours de
              musique et de danse, ouvert à de nombreux pays d’Afrique, innovant
              et inclusif : le African Proud Contest. Le concours, 100% digital,
              aura pour but de découvrir de jeunes talents africains, et de
              diffuser leur art à l’international. Nous considérons en effet que
              l’Afrique dispose de nombreuses richesses artistiques encore
              inexploitées ; nous avons à cœur de montrer au monde les nombreux
              talents dont regorgent l’Afrique.
              <br />
              <br />
              Une tournée dans plus de 15 pays africains aura lieu avec des
              formations, des conférences des concerts mais aussi des matches de
              gala dans le but de célébrer l’Afrique autour de deux univers liés
              : la musique et le sport.
            </p>
          </div>
        </div>
      </section>
      <SectionImage
        mainTitle="Dj Moh green"
        text1="Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
        text2=""
        button1="Voir plus"
        button2="voir plus"
        image="https://www.pmnevent.fr/wp-content/uploads/2023/04/dj-moh-green_pmn_event-1-edited-1-scaled.webp"
        lienIframe=""
      />
      <section className="body-font bg-black text-gray">
        <div className="container mx-auto px-5 py-24">
          <div className="xl:w-1/2 mx-auto w-full text-center lg:w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="mb-8 inline-block h-8 w-8 text-secondary"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="text-lg leading-relaxed text-white">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="mb-6 mt-8 inline-block h-1 w-10 rounded bg-secondary"></span>
            <h2 className="text-gray-900 title-font text-sm font-medium tracking-wider">
              DJ MOH GREEN
            </h2>
            <p className="text-gray-500">Digital creator, producer</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
