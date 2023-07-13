import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Concours: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen w-full">concours</div>
      <Footer />{" "}
    </>
  );
};

export default Concours;
