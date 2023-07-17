import type { NextPage } from "next";
import SectionImage from "../components/Section-image";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <SectionImage frameHeight="100vh" />
      <SectionImage frameHeight="100vh" />
      <SectionImage frameHeight="100vh" />
      <Footer />
    </>
  );
};

export default About;
