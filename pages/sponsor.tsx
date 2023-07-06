import type { NextPage } from "next";
import PartnersSection from "../components/partners-section";

const Sponsor: NextPage = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start text-left text-131xl text-white font-helvetica">
      <div className="self-stretch flex flex-col items-start justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[129px] shrink-0 object-cover"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
      <PartnersSection />
      <div className="bg-black w-[1920px] h-[900px] flex flex-col py-10 px-[50px] box-border items-center justify-center gap-[30px]">
        <div className="relative tracking-[-0.37px]">Devenir partenaire</div>
        <div className="self-stretch relative text-11xl tracking-[-0.37px] text-center">
          <p className="m-0">
            <span className="font-helvetica">Trace Academia</span>
            <span>
              {" "}
              travaille avec de nombreux partenaires. notamment des grandes
              entreprises, des institutions et des experts dans le
              divertissement,
            </span>
          </p>
          <p className="m-0">
            le numérique et l'éducation. Tous sont engagés en faveur de la
            jeunesse et partagent notre mission : aider à résoudre la crise du
            chômage des jeunes
          </p>
          <p className="m-0">grâce à des formations ludiques et pertinentes.</p>
        </div>
        <div className="flex flex-col p-[25px] items-center justify-start text-31xl text-black font-krona-one">
          <div className="bg-gold overflow-hidden flex flex-row py-4 px-16 items-center justify-center">
            <div className="relative">Participer</div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative h-[558px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[558px] object-cover"
          alt=""
          src="/image-20@2x.png"
        />
      </div>
    </div>
  );
};

export default Sponsor;
