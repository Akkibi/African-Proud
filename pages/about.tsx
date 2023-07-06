import type { NextPage } from "next";
import SectionContent from "../components/section-content";

const About: NextPage = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start text-right text-31xl text-gray font-helvetica">
      <div className="self-stretch flex flex-col items-start justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[129px] shrink-0 object-cover"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
      <SectionContent />
      <div className="bg-white w-[1920px] h-[900px] flex flex-col py-[164px] px-[101px] box-border items-center justify-center [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="relative w-[1713px] h-[538px]">
          <img
            className="absolute top-[0px] left-[-1713px] rounded-xl w-[840px] h-[538px] overflow-hidden"
            alt=""
            src="/frame-641.svg"
          />
          <div className="absolute top-[0px] left-[0px] h-[538px] flex flex-col items-start justify-center gap-[24px]">
            <div className="self-stretch relative tracking-[-0.37px] leading-[100px] [transform:_rotate(180deg)] [transform-origin:0_0]">
              Lorem ipsum dolor sit amet
            </div>
            <div className="relative text-11xl tracking-[-0.37px] leading-[50px] inline-block w-[799px] [transform:_rotate(180deg)] [transform-origin:0_0]">
              Lorem ipsum dolor sit amet init sit parce lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet init sit parce lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet init sit parce lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet init sit parce lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet init sit parce
              lorem ipsum dolor sit amet
            </div>
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

export default About;
