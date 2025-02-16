import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Herosection2() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-16 gap-11 main-container">
        <div className="  w-full relative shadow-md  flex flex-col items-center justify-center  px-4 py-6 ">
          <div className="absolute -top-8  ">
            <LocationOnIcon className="!text-6xl" />
          </div>
          <p className="text-3xl font-medium">Our Location</p>
          <p className="text-sm text-gray-400 w-52">
            350 Fifth Avenue, 34th floor New York NY 10118-3299 USA
          </p>
        </div>
        <div className=" w-full relative shadow-md  flex flex-col items-center justify-center  px-4 py-6">
          <div className="absolute -top-8  ">
            <LocationOnIcon className="!text-6xl" />
          </div>
          <p className="text-3xl font-medium">Our Location</p>
          <p className="text-sm text-gray-400 w-52">
            350 Fifth Avenue, 34th floor New York NY 10118-3299 USA
          </p>
        </div>
        <div className=" w-full relative shadow-md  flex flex-col items-center justify-center  px-4 py-6 border-gray-700 ">
          <div className="absolute -top-8  ">
            <LocationOnIcon className="!text-6xl" />
          </div>
          <p className="text-3xl font-medium">Our Location</p>
          <p className="text-sm text-gray-400 w-52">
            350 Fifth Avenue, 34th floor New York NY 10118-3299 USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection2;
