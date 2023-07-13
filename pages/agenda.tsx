import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Agenda: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen w-full">agenda</div>
      <Footer />{" "}
    </>
  );
};

export default Agenda;
