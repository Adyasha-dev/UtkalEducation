"use client";
import { Elearning } from "@/assest/Home";
import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Esection7() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="relative my-7 py-24 flex items-center justify-center"
      style={{
        backgroundImage: `url(${Elearning.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "80vh",
        width: "100vw",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-purple-300/40"></div>

      {/* Slider Container */}
      <div className="relative w-full max-w-[55rem] h-auto bg-white/80 p-10 rounded-lg shadow-lg">
        <Slider {...settings}>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <SmsIcon className="!text-5xl text-purple-600 mb-4" />
              <p className="text-xl text-gray-800 mb-4">
                Education is the cornerstone of growth and transformation. At
                Utkal Education, we believe in equipping individuals with the
                right skills, knowledge, and mindset to bridge the gap between
                education and industry needs. By fostering critical thinking,
                innovation, and adaptability, we empower learners to thrive in
                the ever-evolving professional landscape.
              </p>
              <p className="text-2xl text-gray-900 font-medium">
                Donal Sampson
              </p>
              <p className="text-sm text-gray-700">
                Founder & CEO, Utkal Education Pvt. Ltd.
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Esection7;
