"use client";
import React from "react";
import { two } from "@/assest/about";
import { content1Arr } from "@/utils/about";
function Section3() {
  return (
    <>
      <div
        className="  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${two.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  main-container py-16 ">
          {content1Arr.map((item) => (
            <div className="  px-2 " key={item.id.toString()}>
              <div className="text-6xl text-orange-500 ">{item.count}</div>
              <div className="text-3xl text-white mt-3">{item.title}</div>
              <div className="text-xl text-gray-300 px-3 mt-3">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;
