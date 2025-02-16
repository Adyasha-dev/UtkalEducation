"use client"; // Ensure this is the first line
import React from "react";
import { Elearning2 } from "@/assest/about";
function Breadcrumb5() {
  return (
    <>
      <div
        className="relative bg-black/95 "
        style={{
          backgroundImage: `url(${Elearning2.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "60vh",
          width: "100vw",
        }}
      >
        <div className="absolute  flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <p className="text-5xl font-bold text-white">Blog</p>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb5;
