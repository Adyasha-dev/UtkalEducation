"use client";
import { blogArr } from "@/utils/blog";
import { blogArrType } from "@/types";
import React, { useEffect, useState } from "react";
import {
  Blog1,
  Blog2,
  Blog3,
  course12,
  course13,
  course14,
  teacher1,
  teacher2,
  teacher3,
} from "@/assest/blog";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";
function Herosection3() {
  const itemsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [courselist, setCourselist] = useState<blogArrType[]>([]);

  const handlePrevPageNavigation = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextPageNavigation = () => {
    if (currentPage * itemsPerPage <= blogArr.length) {
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
    setCourselist(blogArr.slice(startIdx, endIdx));
  }, [currentPage]);
  return (
    <>
      <div className="main-container my-6  ">
        <div className="text-5xl font-bold py-5">News & Blog</div>
        <div className=" lg:flex  ">
          <div className="bg-slate-200 w-full px-3 py-4">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9">
              {blogArr.map((item) => (
                <div
                  className="w-full shadow-md  rounded-md bg-white gap-5"
                  key={item.id.toString()}
                >
                  <Image
                    src={item.img.src}
                    alt="Blog Image"
                    className=" hover:scale-105 overflow-hidden"
                    width={500}
                    height={300}
                  />

                  <div className="flex  gap-3 px-2 py-2 ">
                    <span className="flex flex-col border-solid border-yellow-300 border-2 text-center">
                      <p className="text-yellow-400">{item.count}</p>
                      <p className="text-yellow-400">{item.month}</p>
                    </span>
                    <p className="text- lg:text-xl text-xs">{item.title}</p>
                  </div>
                  <div className="px-2">
                    <p className=" text-sm text-gray-500">{item.description}</p>
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
          </div>

          <div className=" w-full lg:w-[40rem] ">
            <div className="text-3xl font-medium">RECENT POST</div>
            <div className="flex flex-col gap-4">
              <div className="flex  flex-1 w-[25rem] mt-5 gap-4">
                <Image src={Blog2.src} width={30} height={20} alt="Blog 2" />
                <span className="flex flex-col mx-auto flex-1">
                  <p className="text-sm font-normal md:text-xl md:font-medium  ">
                    New Chicago school budget relies on state pension
                  </p>
                  <p className="text-sm ">May 18, 2016</p>
                </span>
              </div>
              <div className="flex  flex-1 w-[25rem]  gap-4">
                <Image src={Blog1.src} width={30} height={20} alt="Blog 1" />
                <span className="flex flex-col">
                  <p className="  text-sm font-normal md:text-xl md:font-medium">
                    New Chicago school budget relies on state pension
                  </p>
                  <p className="text-sm ">May 18, 2016</p>
                </span>
              </div>
              <div className="flex  flex-1 w-[25rem] gap-4">
                <Image src={Blog3.src} width={30} height={20} alt="Blog 3" />
                <span className="flex flex-col">
                  <p className="text-sm font-normal md:text-xl md:font-medium">
                    New Chicago school budget relies on state pension
                  </p>
                  <p className="text-sm ">May 18, 2016</p>
                </span>
              </div>
            </div>
            <div className="">
              <div className="text-3xl font-medium  flex-1 mt-4">
                Categories
              </div>
              <span className="flex flex-col gap-4 mt-4 ">
                <span>Web Design (9)</span>
                <span>App Design (3)</span>
                <span>Graphic Design (23)</span>
                <span>Game Design (5)</span>
                <span>UI-UX Design (7)</span>
                <span>Print Design (2)</span>
                <span>Logo - Typo Design (5)</span>
              </span>
            </div>
            <div className=" ">
              <div className="text-3xl font-medium  flex-1 mt-4">
                Browse by Teacher
              </div>
              <p className="text-sm text-gray-400 mx-auto  mt-4">
                Lorem ipsum sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col mt-4">
                <div className="flex gap-5 ">
                  <div className="flex gap-6">
                    <Image
                      alt="teacher1"
                      src={teacher1.src}
                      className=" rounded-full"
                      width={32}
                      height={20}
                    />
                  </div>
                  <span className="flex flex-col">
                    <p>Charlie Brown</p>
                    <p>Web Designer</p>
                    <span className="flex">
                      <FacebookIcon />
                      <TwitterIcon />
                      <LinkedInIcon />
                      <YouTubeIcon />
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex gap-5">
                  <Image
                    src={teacher2.src}
                    className=" rounded-full"
                    width={32}
                    height={20}
                    alt="Teacher 2"
                  />
                  <span className="flex flex-col ">
                    <p>Charlie Brown</p>
                    <p>Web Designer</p>
                    <span className="flex">
                      <FacebookIcon />
                      <TwitterIcon />
                      <LinkedInIcon />
                      <YouTubeIcon />
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex gap-5">
                  <span className="flex gap-6">
                    <Image
                      alt="teacher3"
                      src={teacher3.src}
                      width={32}
                      height={20}
                      className="rounded-full "
                    />
                  </span>
                  <span className="flex flex-col">
                    <p>Charlie Brown</p>
                    <p>Web Designer</p>
                    <span className="flex">
                      <FacebookIcon />
                      <TwitterIcon />
                      <LinkedInIcon />
                      <YouTubeIcon />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-3xl font-medium mt-4">FEATURED COURSES</div>
            <div className="flex mt-3 gap-5">
              <Image
                src={course12.src}
                alt="Course 12"
                width={32}
                height={20}
              />
              <span className="flex flex-col">
                <p>swift programming for beginners</p>
                <p>Sarah Johnson</p>
                <span className="flex gap-3">
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                    $170
                  </button>
                  <span className="flex">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </span>
                </span>
              </span>
            </div>
            <div className="flex  mt-3 gap-5">
              <Image
                src={course13.src}
                alt="Course 13"
                width={32}
                height={20}
              />
              <span className="flex flex-col">
                <p>swift programming for beginners</p>
                <p>Sarah Johnson</p>
                <span className="flex gap-3">
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                    $170
                  </button>
                  <span className="flex">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </span>
                </span>
              </span>
            </div>
            <div className="flex  mt-3 gap-5">
              <Image
                src={course14.src}
                alt="Course 14"
                width={32}
                height={20}
              />
              <span className="flex flex-col">
                <p>swift programming for beginners</p>
                <p>Sarah Johnson</p>
                <span className="flex gap-3">
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                    $170
                  </button>
                  <span className="flex">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection3;
