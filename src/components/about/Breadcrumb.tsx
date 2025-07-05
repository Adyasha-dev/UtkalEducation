import React from "react";
import { Elearning2 } from "@/assest/about";
function Breadcrumb() {
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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute  flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <p className="text-5xl font-bold text-white">ABOUT US</p>
        </div>
      </div>
    </>
  );
}
export default Breadcrumb;
