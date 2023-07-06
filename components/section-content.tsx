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
    <div
      className="bg-black w-[1920px] h-[900px] flex flex-col py-[164px] px-[101px] box-border items-center justify-center text-left text-81xl text-white font-helvetica"
      style={frameDivStyle}
    >
      <div className="relative w-[1713px] h-[538px]">
        <img
          className="absolute top-[0px] left-[873px] rounded-xl w-[840px] h-[538px] overflow-hidden"
          alt=""
          src="/frame-64.svg"
        />
        <div className="absolute top-[0px] left-[0px] h-[538px] flex flex-col items-start justify-center gap-[24px]">
          <div className="relative tracking-[-0.37px] leading-[100px] inline-block w-[799px] h-[207px] shrink-0">
            Lorem ipsum dolor sit amet
          </div>
          <div className="relative text-31xl tracking-[-0.37px] leading-[50px] inline-block w-[799px] h-[118px] shrink-0">
            Lorem ipsum dolor sit amet init sit parce lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
