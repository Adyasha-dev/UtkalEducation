import React from "react";
function HeroSection() {
  return (
    <>
      <section className="w-full main-container my-6  lg:my-14 lg:flex lg:items-center lg:justify-center  lg:gap-52 md:gap-8  ">
        <div className="w-full bg-white flex flex-col lg:w-1/2 justify-center  ">
          <p className="text-black font-extrabold text-lg md:text-4xl lg:text-4xl mt-3">
            Shaping Careers, Building a Skilled Workforce
          </p>
          <p className="text-slate-400 text-xs md:text-lg lg:text-xl   my-3">
            At Utkal Education Pvt. Ltd., we are on a mission to revolutionize
            education through innovative and accessible learning solutions. By
            bridging the gap between academic knowledge and real-world
            applications, we empower individuals and organizations to stay
            competitive in an evolving landscape. Our approach integrates
            technical expertise with behavioral training, fostering a culture of
            continuous learning and adaptability.
          </p>
          <button
            className="border-2 border-black  bg-orange-500 hover:bg-white  text-white  hover:text-black px-4 py-2 md:py-2 rounded-md
             w-full sm:w-48 md:w-96 lg:w-56 my-3 transition duration-300"
          >
            VIEW ALL Courses
          </button>
        </div>
        {/* right side icon cards*/}
        <div className="w-full flex justify-center mt-3 lg:items-start   gap-2 lg:w-1/2">
          <div className=" grid grid-cols-2 gap-2  md:grid-cols-3 lg:grid-cols-3 w-full ">
            <div className="  w-full lg:w-40 bg-[#653e66] flex justify-center items-center ">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#e9aefc] font-robotoCondensed font-medium">
                Ps
              </span>
            </div>
            <div className="  w-full  h-28 md:h-36 lg:w-40 lg:h-40 bg-[#6b4b13] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#ffbd2e] font-robotoCondensed font-medium">
                Ai
              </span>
            </div>
            <div className="  w-full h-28 md:h-36 lg:w-40 lg:h-40 bg-[#653e66] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#f6a2fc] font-robotoCondensed font-medium">
                Pr
              </span>
            </div>
            <div className="  w-full h-28 md:h-36 lg:w-40 lg:h-40 bg-[#393275] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#e7acfa] font-robotoCondensed font-medium">
                Ae
              </span>
            </div>
            <div className="  w-full h-28 lg:w-40  md:h-36 lg:h-40 bg-[#702c43] flex justify-center items-center">
              <span className=" transition-normal skew-x-12 skew-y-3 hover:skew-x-0 hover:skew-y-0 text-7xl text-[#ff70bc] font-robotoCondensed font-medium">
                1d
              </span>
            </div>
            <div className="  w-full h-28 md:h-36 lg:w-40 lg:h-40 bg-[#69461e] flex justify-center items-center">
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
