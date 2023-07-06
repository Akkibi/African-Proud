import type { NextPage } from "next";
import SectionContent from "../components/section-content";
import PartnersSection from "../components/partners-section";

const Home: NextPage = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start text-left text-131xl text-lemonchiffon font-helvetica">
      <div className="self-stretch flex flex-col items-start justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[129px] shrink-0 object-cover"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
      <SectionContent frame65Height="1080px" />
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[131px] shrink-0 object-cover"
        alt=""
        src="/image-27@2x.png"
      />
      <div className="bg-gray w-[1920px] h-[1080px] flex flex-row items-center justify-center gap-[150px]">
        <div className="relative rounded-40xl box-border w-[612px] h-[612px] overflow-hidden shrink-0 border-[17px] border-solid border-lemonchiffon">
          <div className="absolute top-[449px] left-[calc(50%_-_146px)] rounded-xl bg-lemonchiffon w-[292px] h-[102px]" />
          <div className="absolute top-[84px] left-[38px] tracking-[-0.37px] leading-[50px] inline-block w-[478px] h-[233px]">
            Public
          </div>
        </div>
        <div className="relative rounded-40xl box-border w-[646px] h-[612px] overflow-hidden shrink-0 border-[17px] border-solid border-lemonchiffon">
          <div className="absolute top-[449px] left-[calc(50%_-_146px)] rounded-xl bg-lemonchiffon w-[292px] h-[102px]" />
          <div className="absolute top-[73px] left-[30px] tracking-[-0.37px] leading-[50px] inline-block w-[478px] h-[233px]">
            Artiste
          </div>
        </div>
      </div>
      <PartnersSection />
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

export default Home;
