import type { NextPage } from "next";

const PartnersSection: NextPage = () => {
  return (
    <div className="bg-white w-[1920px] h-[1080px] flex flex-col py-10 px-[50px] box-border items-center justify-start gap-[30px] text-left text-131xl text-gray font-helvetica">
      <div className="relative tracking-[-0.37px]">Partenaires</div>
      <div className="self-stretch relative text-11xl tracking-[-0.37px] text-center">
        <p className="m-0">
          <span className="font-helvetica">Trace Academia</span>
          <span>
            {" "}
            travaille avec de nombreux partenaires. notamment des grandes
            entreprises, des institutions et des experts dans le divertissement,
          </span>
        </p>
        <p className="m-0">
          le numérique et l'éducation. Tous sont engagés en faveur de la
          jeunesse et partagent notre mission : aider à résoudre la crise du
          chômage des jeunes
        </p>
        <p className="m-0">grâce à des formations ludiques et pertinentes.</p>
      </div>
      <img
        className="relative w-[602px] h-[633px] object-cover"
        alt=""
        src="/image-16@2x.png"
      />
    </div>
  );
};

export default PartnersSection;
