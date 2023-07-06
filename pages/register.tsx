import type { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start">
      <div className="self-stretch flex flex-col items-start justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[129px] shrink-0 object-cover"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
      <img
        className="relative w-[1926px] h-[854px] object-cover"
        alt=""
        src="/image-23@2x.png"
      />
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

export default Register;
