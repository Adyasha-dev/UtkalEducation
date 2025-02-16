"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link"; // Import Link for navigation
import { cardArr } from "@/utils/home";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // For large screens
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // For medium screens
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // For small screens
      },
    },
  ],
};

export default function Breadcrumb() {
  return (
    <section className="overflow-hidden main-container py-24">
      <p className="text-5xl font-bold mb-4">POPULAR COURSES</p>
      <Slider {...settings}>
        {cardArr.map((item, index) => (
          <div key={index} className="w-full shadow-md nset-shadow-xs">
            <img src={item.img.src} className="" />
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
              <button className="text-sm text-white bg-blue-500 px-3 roundend-md py-0 ">
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
      </Slider>
    </section>
  );
}
