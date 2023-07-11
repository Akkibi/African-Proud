import type { NextPage } from "next";
import SectionContent from "../components/section-content";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start text-right text-31xl text-gray font-helvetica">
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
      </div>
      <Footer />
    </>
  );
};

export default About;
