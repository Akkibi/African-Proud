import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Register: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start">
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
      <Footer />
    </>
  );
};

export default Register;
