import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Music: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen w-full">music</div>
      <Footer />{" "}
    </>
  );
};

export default Music;
