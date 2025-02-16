"use client";
import { Elearning } from "@/assest/Home";
import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Esection7() {
  var settings = {
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
                Education is the foundation of personal growth, empowerment, and
                societal progress. It enables individuals to acquire knowledge,
                skills, and values that foster critical thinking, creativity,
                and innovation. Through education, people can unlock their full
                potential, overcome challenges, and contribute positively to the
                world around them.
              </p>
              <p className="text-2xl text-gray-900 font-medium">
                Donal Sampson
              </p>
              <p className="text-lg text-gray-700">
                Founder & CEO, Arcade Systems
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Esection7;
