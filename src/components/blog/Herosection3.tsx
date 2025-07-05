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
  const [courselist, setCourselist] = useState<blogArrType[]>([]);

  const handlePrevPageNavigation = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextPageNavigation = () => {
    if (currentPage * itemsPerPage <= blogArr.length) {
      setCurrentPage((prev) => prev + 1);
    } else {
      alert("Oops! You reached the last page.");
    }
  };

  useEffect(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    setCourselist(blogArr.slice(startIdx, endIdx));
  }, [currentPage]);

  return (
    <div className="main-container mx-auto px-4 py-8  ">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">News & Blog</h2>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
        {/* Left Blog Grid Section */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courselist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.img.src}
                    alt="Blog Image"
                    className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-[200px] object-cover"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="border-2 border-yellow-300 text-center px-2 py-1 text-yellow-400 text-sm font-semibold">
                      <p>{item.count}</p>
                      <p>{item.month}</p>
                    </div>
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="px-4 py-2 bg-orange-400 text-white rounded-md font-semibold"
              onClick={handlePrevPageNavigation}
            >
              Prev
            </button>
            <span className="px-4 py-2 bg-orange-400 text-white rounded-md font-semibold">
              {currentPage}
            </span>
            <button
              className="px-4 py-2 bg-orange-400 text-white rounded-md font-semibold"
              onClick={handleNextPageNavigation}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Sidebar Section */}
        <div className="w-full lg:w-1/3 shadow-lg">
          <div className="mb-8">
            <h3 className="text-2xl  md:text-3xl font-semibold mb-4">
              RECENT POST
            </h3>
            {[
              { src: Blog2, name: "Blog Post 1", date: "May 18, 2016" },
              { src: Blog1, name: "Blog Post 2", date: "May 17, 2016" },
              { src: Blog3, name: "Blog Post 3", date: "May 16, 2016" },
            ].map((recent, index) => (
              <div key={index} className="flex items-start gap-4 mb-4">
                <Image
                  src={recent.src}
                  width={100}
                  height={50}
                  alt={`Blog ${index + 1}`}
                />
                <div>
                  <p className="text-base font-medium">{recent.name}</p>
                  <p className="text-sm text-gray-500">{recent.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Categories</h3>
            <ul className="flex flex-col gap-2 text-gray-700">
              <li>Web Design (9)</li>
              <li>App Design (3)</li>
              <li>Graphic Design (23)</li>
              <li>Game Design (5)</li>
              <li>UI-UX Design (7)</li>
              <li>Print Design (2)</li>
              <li>Logo - Typo Design (5)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Browse by Teacher</h3>
            <p className="text-sm text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor.
            </p>
            {[
              { img: teacher1, name: "John Doe", role: "Mathematics" },
              { img: teacher2, name: "Jane Smith", role: "Science" },
              { img: teacher3, name: "Alex Brown", role: "History" },
            ].map((teacher, i) => (
              <div key={i} className="flex items-center gap-4 mb-4">
                <Image
                  src={teacher.img.src}
                  alt={`Teacher ${i + 1}`}
                  className="rounded-full"
                  width={100}
                  height={50}
                />
                <div>
                  <p className="font-bold">{teacher.name}</p>
                  <p className="text-sm text-gray-500">{teacher.role}</p>
                  <div className="flex gap-2 text-blue-500">
                    <a href="https://www.facebook.com" aria-label="Facebook">
                      <FacebookIcon />
                    </a>
                    <a href=" https://twitter.com" aria-label="Twitter">
                      <TwitterIcon />
                    </a>
                    <a href="https://in.linkedin.com" aria-label="LinkedIn">
                      <LinkedInIcon />
                    </a>
                    <a href="https://www.youtube.com" aria-label="YouTube">
                      <YouTubeIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">FEATURED COURSES</h3>
            {[
              {
                img: course12,
                name: "Course 1",
                person: "By John Doe",
                fees: "5000",
              },
              {
                img: course13,
                name: "Course 2",
                person: "By Jane Smith",
                fees: "6000",
              },
              {
                img: course14,
                name: "Course 3",
                person: "By Alex Brown",
                fees: "7000",
              },
            ].map((course, i) => (
              <div key={i} className="flex gap-4 mb-5">
                <Image
                  src={course.img.src}
                  alt={`Course ${i + 1}`}
                  width={100}
                  height={50}
                />
                <div className="flex flex-col">
                  <p className="font-bold">{course.name}</p>
                  <p className="text-sm text-gray-600">{course.person}</p>
                  <div className="flex items-center gap-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                      ₹{course.fees}
                    </button>
                    <div className="flex text-yellow-500">
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                      <StarBorderIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection3;
