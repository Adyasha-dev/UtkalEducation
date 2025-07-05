import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

function Herosection2() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16 gap-11 main-container">
        {/* Location */}
        <div className="w-full h-40  md:h-52 gap-2 relative shadow-md flex flex-col items-center justify-center bg-gray-100 px-4   lg:py-14 py-6">
          <div className="absolute -top-8 rounded-full bg-white p-1 border-2 border-gray-700">
            <LocationOnIcon className=" !text-4xl md:!text-5xl lg:!text-6xl" />
          </div>
          <p className="text-xl md:text-2xl font-bold">Our Location</p>
          <a
            href="https://www.google.com/maps?q=350+Fifth+Avenue,+34th+floor+New+York+NY+10118-3299+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 w-52  md:text-lg text-center hover:underline"
          >
            350 Fifth Avenue, 34th floor New York NY 10118-3299 USA
          </a>
        </div>

        {/* Phone */}
        <div className="w-full relative md:h-52  h-40 shadow-md flex flex-col items-center justify-center bg-gray-100 px-4 py-6 lg:py-14 gap-2 ">
          <div className="absolute -top-8 rounded-full bg-white border-2 border-gray-700 p-2 flex items-start">
            <PhoneAndroidIcon className=" !text-4xl md:!text-5xl lg:!text-6xl" />
          </div>
          <p className="text-xl font-bold  md:text-2xl">Contact us Anytime</p>
          <a
            href="tel:+919938794582"
            className="text-sm lg:text-lg text-gray-400 w-52 text-center  md:text-xl hover:underline"
          >
            Mobile: (+91) 9938794582
          </a>
        </div>

        {/* Email */}
        <div className="w-full  h-40 md:h-52 relative shadow-md flex flex-col items-center justify-center px-4 py-6 bg-gray-100 border-gray-700 gap-2 ">
          <div className="absolute -top-8 rounded-full bg-white border-2 border-gray-700 p-2">
            <EmailIcon className="!text-4xl md:!text-5xl lg:!text-6xl" />
          </div>
          <p className="text-xl font-bold md:text-2xl">Write Some Words</p>
          <a
            href="mailto:support247@domain.com"
            className="text-sm  md:text-lg  text-gray-400 w-52 text-center hover:underline"
          >
            support247@domain.com
          </a>
          <a
            href="mailto:info@domain.com"
            className="text-sm lg:text-lg text-gray-400 w-52 md:text-xl text-center hover:underline"
          >
            info@domain.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Herosection2;
