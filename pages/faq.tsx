import type { NextPage } from "next";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import DropDown from "../components/dropDown";

const Faq: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-full">
        <section className="text-white container py-24 mx-auto md:px-6 xl:px-24 min-h-screen">
          <h1 className="text-animate sm:text-31xl text-11xl font-bold w-full text-center">
            <span>FAQ des questions fréquentes</span>
          </h1>
          <p className="mb-10 w-full text-center opacity-50">
            Contactez nous si vous avez d'autres suggestions.
          </p>
          <DropDown />
          <DropDown
            mainTitle="Question 2 courte?"
            mainText="Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
          />
          <DropDown
            mainTitle="Question différente longue comme exemple?"
            mainText="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
          />

          <DropDown />
          <DropDown />
          <DropDown />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
