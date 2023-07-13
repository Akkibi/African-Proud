import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Faq: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-full min-h-screen w-full">faq</div>
      <Footer />{" "}
    </>
  );
};

export default Faq;
