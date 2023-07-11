import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SignIn: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[821px] shrink-0 object-cover"
          alt=""
          src="/image-24@2x.png"
        />
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
