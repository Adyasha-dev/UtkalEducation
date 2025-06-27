import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { card2Arr } from "@/utils/courses";
import { card2ArrType } from "@/types";
import Image from "next/image";
function Course2() {
  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [courselist, setCourselist] = useState<card2ArrType[]>([]);

  const handlePrevPageNavigation = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextPageNavigation = () => {
    if (currentPage * itemsPerPage <= card2Arr.length) {
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
    setCourselist(card2Arr.slice(startIdx, endIdx));
  }, [currentPage]);
  return (
    <div>
      <section className="overflow-hidden main-container py-8">
        <p className=" text-2xl font-bold mb-4">POPULAR COURSES</p>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8 ">
          {courselist.map((item, index) => (
            <div key={index} className="w-full shadow-md nset-shadow-xs">
              <Image
                src={item.img.src}
                alt={item.coursename}
                width={500}
                height={300}
              />
              <div className=" flex gap-14  mt-4">
                <span className=" flex flex-col ">
                  <p>{item.coursename}</p>
                  <span className="flex">
                    <span>
                      <StarBorderIcon className="text-yellow-300" />
                    </span>
                    <span>
                      <StarBorderIcon className="text-yellow-300" />
                    </span>
                    <span>
                      <StarBorderIcon className="text-yellow-300" />
                    </span>
                    <span>
                      <StarBorderIcon className="text-yellow-300" />
                    </span>
                    <span>
                      <StarBorderIcon className="text-yellow-300" />
                    </span>
                  </span>
                </span>
                <button className="text-sm text-white bg-blue-500 px-3 roundend-sm  py-0 ">
                  ${item.price}
                </button>
              </div>
              <div className="mt-4">
                <p className=" text-gray-400 text-sm">{item.description}</p>
              </div>
              <div className="flex gap-7 mt-4">
                <span className=" flex flex-col">
                  <span className="text-gray-400">1 Year</span>
                  <span className="text-gray-400">Course</span>
                </span>
                <span className=" flex flex-col">
                  <span className="text-gray-400">25</span>
                  <span className="text-gray-400">class size</span>
                </span>
                <span className=" flex flex-col">
                  <span className="text-gray-400">7:00-10:00</span>
                  <span className="text-gray-400">Class Duration</span>
                </span>
              </div>
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
    </div>
  );
}

export default Course2;
