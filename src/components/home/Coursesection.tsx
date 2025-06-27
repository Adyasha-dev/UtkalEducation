"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { cardArr } from "@/utils/home";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Breadcrumb() {
  return (
    <section className="overflow-hidden main-container py-14 flex flex-col">
      <p className="lg:text-5xl  text-2xl font-bold mb-4  md:text-3xl">
        POPULAR COURSES
      </p>

      <Slider {...settings}>
        {cardArr.map((item, index) => (
          <div key={index} className="px-4">
            {" "}
            {/* Add gap between cards */}
            <div className="w-full shadow-md rounded-md p-4 bg-white">
              <Image
                src={item.img.src}
                alt={item.coursename}
                width={500}
                height={300}
                className="object-cover rounded-md"
              />
              <div className="flex justify-between items-start mt-4">
                <span className="flex flex-col">
                  <p className="font-semibold lg:text-2xl">{item.coursename}</p>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarBorderIcon key={i} className="text-yellow-300" />
                    ))}
                  </span>
                </span>
                <button className="text-sm lg:text-lg text-white bg-blue-500 px-3 py-1 rounded-md">
                  ${item.price}
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              <div className="flex justify-between mt-4">
                <span className="flex flex-col text-sm text-gray-400">
                  <span>1 Year</span>
                  <span>Course</span>
                </span>
                <span className="flex flex-col text-sm text-gray-400">
                  <span>25</span>
                  <span>Class Size</span>
                </span>
                <span className="flex flex-col text-sm text-gray-400">
                  <span>7:00-10:00</span>
                  <span>Class Duration</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
