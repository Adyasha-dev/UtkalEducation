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
function Teammember() {
  const itemsPerPage = 12;

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
      <section className="overflow-hidden main-container py-24">
        <div className=" main-container  gap-10 py-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {team2Arr.map((item) => (
            <div
              className="shadow-md rounded-md bg-white py-4 px-4 "
              key={item.id.toString()}
            >
              <img
                src={item.img.src}
                className="hover:scale-105 h-[20rem] w-[28rem] overflow-hidden"
              />
              <div className="text-2xl text-gray mt-2 ">{item.name}</div>

              <span className="flex gap-1 mt-2 ">
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <YouTubeIcon />
              </span>

              <span className="flex mt-2 ">
                <StarBorderIcon />
                <p className="text-gray-500 tetx-xl">{item.degignation}</p>
              </span>
              <span className="flex mt-2">
                <LocalPhoneIcon />
                <p className="text-gray-500 mt-2 tetx-xl">{item.phonenumber}</p>
              </span>
              <span className="flex mt-2">
                <EmailIcon />
                <p className="text-gray-500 tetx-xl">{item.email}</p>
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
