"useclient";
import { Diversity1 } from "@mui/icons-material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { one } from "@/assest/about";
function Aboutme() {
  return (
    <>
      <div className="w-full main-container md:flex gap-20">
        <div className=" w-full md:w-1/2 my-12 ">
          <p className="text-black text-5xl font-bold ">Welcome to Educate!</p>
          <p className="text-gray-400 text-xl mt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
          <p className="text-gray-400 text-xl mt-6">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem corporis suscipit
            laboriosam nisi ut aliquid ex ea commodi consequatur?
          </p>
          <span className="flex gap-2 items-center mt-6">
            <CheckIcon className="!text-2xl" />
            <p className="text-gray-400 text-xl">
              2 Glossaries for difficult terms & acronyms
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-2xl" />
            <p className="text-gray-400 text-xl">
              25 hours of High Quality e-Learning content
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-2xl" />
            <p className="text-gray-400 text-xl">72 end of chapter quizzes</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-2xl" />
            <p className="text-gray-400 text-xl">30 PDUs Offered</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-2xl" />
            <p className="text-gray-400 text-xl">
              Collection of 47 six sigma tools for hands-on practice
            </p>
          </span>
        </div>
        <div className=" w-full md:w-1/2 px-10 my-12">
          <img
            src={one.src}
            className="w-full h-full md:w-[30rem] md:h-[28rem]"
          />
        </div>
      </div>
    </>
  );
}

export default Aboutme;
