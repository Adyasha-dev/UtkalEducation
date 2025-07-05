import React from "react";
import { last } from "@/assest/Home";
import { TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Lastsection() {
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center mb-4 ">
        <p className="text-3xl font-medium md:text-4xl md:font-bold">
          Have any question for us?
        </p>
        <p className="text-sm  text-gray-500  md:max-w-3xl px-3 md:text-xl">
          Education is a journey, and we understand that you may have questions.
          Whether it&apos;s about our courses, enrollment process,
          certifications, or career guidance, we’re here to assist you.
        </p>
        <span className="flex text-orange-500 md:text-xl">
          <p>Go to QAs Page</p>
          <ArrowForwardIcon className="!text-xl" />
        </span>
      </div>
      <div
        className=" relative flex justify-center items-center text-center  px-4"
        style={{
          backgroundImage: `url(${last.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="absolute  p-6  mt-[30rem] md:mt-[45rem] lg:mt-[30rem]  rounded-lg shadow-lg max-w-3xl md:max-w-xl lg:max-w-4xl w-full">
          <p className="text-3xl  md:text-4xl lg:text-4xl font-bold mb-4">
            NEWSLETTER
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Subscribe to our newsletter and stay updated with the latest
            courses, expert insights, and exclusive learning resources from
            Utkal Education
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <TextField
              type="email"
              placeholder="Your Email Here"
              className="w-full sm:w-[28rem] bg-white"
            />
            <button className="text-white bg-orange-500 px-6 py-3 text-lg rounded-md hover:bg-black transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lastsection;
