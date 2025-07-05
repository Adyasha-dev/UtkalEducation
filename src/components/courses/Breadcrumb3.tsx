import React from "react";
import { courses } from "@/assest/courses";
function Breadcrumb3() {
  return (
    <div>
      <div
        className="relative bg-black/95 "
        style={{
          backgroundImage: `url(${courses.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "60vh",
          width: "100vw",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute  flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <h1 className="text-5xl font-bold text-white">Courses</h1>
        </div>
      </div>
    </div>
  );
}
export default Breadcrumb3;
