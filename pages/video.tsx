import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Video: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen w-full">video</div>
      <Footer />{" "}
    </>
  );
};

export default Video;
