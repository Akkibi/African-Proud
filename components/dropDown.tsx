import type { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";

type DropdownType = {
  /** Style props */
  mainTitle?: string;
  mainText?: string;
};

const DropDown: NextPage<DropdownType> = ({ mainTitle, mainText }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className="">
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="relative flex w-full items-center rounded-none border-b border-solid border-fourth bg-black py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
        >
          <h2 className="text-white text-left font-bold w-full ">
            {mainTitle == "" || mainTitle == undefined
              ? "Quelle est la question que tu te pose?"
              : mainTitle}
          </h2>
          <span
            className={`${
              show ? "rotate-[-180deg] fill-primary" : "rotate-0 fill-white"
            } ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        className={`duration-200 overflow-clip ease-in-out ${
          show ? "max-h-[50vh]" : "max-h-0"
        }`}
      >
        <p className="text-gray px-5">
          {mainText === "" || mainText == undefined
            ? "Je me pose plein de questions Lorem ipsum dolor sit amet Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
            : mainText}
        </p>
      </div>
    </div>
  );
};

export default DropDown;
