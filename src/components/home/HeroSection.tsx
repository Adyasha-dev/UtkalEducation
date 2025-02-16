import React from "react";
function HeroSection() {
  return (
    <>
      <section className="w-full main-container py-11 lg:flex  gap-16 ">
        <div className="w-full bg-white flex flex-col lg:w-1/2 ">
          <p className="text-black font-extrabold text-3xl lg:text-5xl mt-3">
            Choose The Design Tool You Want To Learn
          </p>
          <p className="text-slate-400 text-xl mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="border-black text-orange-500 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md lg:w-56 md:w-40 border-2 border-solid mt-3  ">
            VIEW AII Courses
          </button>
        </div>
        <div className="w-full  flex gap-2 lg:w-1/2">
          <div className=" grid grid-cols-2 gap-2  md:grid-cols-3 ">
            <div className="h-36 w-36 bg-[#653e66] flex justify-center items-center ">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#e9aefc] font-robotoCondensed font-medium">
                Ps
              </span>
            </div>
            <div className="h-36 w-36 bg-[#6b4b13] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#ffbd2e] font-robotoCondensed font-medium">
                Ai
              </span>
            </div>
            <div className="h-36 w-36 bg-[#653e66] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#f6a2fc] font-robotoCondensed font-medium">
                Pr
              </span>
            </div>
            <div className="h-36 w-36 bg-[#393275] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#e7acfa] font-robotoCondensed font-medium">
                Ae
              </span>
            </div>
            <div className="h-36 w-36 bg-[#702c43] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#ff70bc] font-robotoCondensed font-medium">
                1d
              </span>
            </div>
            <div className="h-36 w-36 bg-[#69461e] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#fac400] font-robotoCondensed font-medium">
                Br
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
