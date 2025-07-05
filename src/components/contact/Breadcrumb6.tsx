import React from "react";
import { front } from "@/assest/contact";
function Breadcrumb6() {
  return (
    <>
      <div
        className="relative bg-black/95 "
        style={{
          backgroundImage: `url(${front.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "70vh",
          width: "100vw",
        }}
      >
        <div className=" absolute inset-0 bg-black/45"></div>
        <div className="absolute  flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <p className="text-5xl font-bold text-white">Contact us </p>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb6;
