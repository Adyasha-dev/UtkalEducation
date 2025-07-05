import React, { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { team2Arr } from "@/utils/team";
import { teamArrType } from "@/types";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
function Teammember() {
  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [courselist, setCourselist] = useState<teamArrType[]>([]);

  const handlePrevPageNavigation = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextPageNavigation = () => {
    if (currentPage * itemsPerPage <= team2Arr.length) {
      setCurrentPage((prev) => prev + 1);
    } else {
      window.alert("oops! you reached at the end page");
    }
    //  1 * 9 = 9 <  12
    //  2 * 9 = 18 < 12 XXXX
  };

  useEffect(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    setCourselist(team2Arr.slice(startIdx, endIdx));
  }, [currentPage]);
  return (
    <>
      <section className="overflow-hidden main-container ">
        <div className=" main-container  gap-10 py-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {courselist.map((item) => (
            <div
              className="shadow-md rounded-md bg-white py-4 px-4 "
              key={item.id.toString()}
            >
              <Image
                alt={item.name}
                src={item.img.src}
                className=" hover:scale-105 overflow-hidden"
                width="500"
                height="300"
              />
              <div className="text-2xl text-gray mt-2 font-bold">
                {item.name}
              </div>

              <div className="flex gap-5 mt-2  ">
                <a href="https://www.facebook.com" aria-label="Facebook">
                  <FacebookIcon className="text-blue-600  rounded-full   " />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <TwitterIcon className="text-blue-400  rounded-full " />
                </a>
                <a href="https://in.linkedin.com" aria-label="LinkedIn">
                  <LinkedInIcon className="text-blue-700  rounded-full " />
                </a>
                <a href="https://www.youtube.com" aria-label="YouTube">
                  <YouTubeIcon className="text-red-600  rounded-full " />
                </a>
              </div>

              <span className="flex mt-2 gap-2 ">
                <StarBorderIcon className="text-gray-500" />
                <p className="text-gray-500 tetx-xl">{item.degignation}</p>
              </span>
              <span className="flex mt-2 gap-2">
                <LocalPhoneIcon className="text-gray-500" />
                <p className="text-gray-500 mt-2 tetx-xl gap-2">
                  {item.phonenumber}
                </p>
              </span>
              <span className="flex mt-2 gap-2">
                <EmailIcon className="text-gray-500" />
                <p className="text-gray-500 tetx-xl gap-2">{item.email}</p>
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row space-x-3 justify-center items-center mx-auto  my-8">
          <div
            className="px-2 py-1 rounded-md font-semibold  text-xl text-center bg-orange-400 text-white"
            onClick={handlePrevPageNavigation}
          >
            Prev
          </div>
          <div className="px-2 py-1 rounded-md font-semibold text-xl text-center bg-orange-400 text-white">
            {currentPage}
          </div>
          <div
            className="px-2 py-1 rounded-md font-semibold text-xl text-center bg-orange-400 text-white"
            onClick={handleNextPageNavigation}
          >
            Next
          </div>
        </div>
      </section>
    </>
  );
}

export default Teammember;
