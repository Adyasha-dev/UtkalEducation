"use client";
import React from "react";
import { teacherArr } from "@/utils/about";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

function Teacher() {
  return (
    <div className="main-container">
      <div className="py-6">
        <p className="text-3xl lg:text-4xl font-bold">OUR TEACHER</p>
      </div>

      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="main-container gap-10 py-14">
          {teacherArr.map((item) => (
            <SwiperSlide key={item.id.toString()}>
              <div className="shadow-md rounded-md bg-white py-4 px-4">
                <Image
                  src={item.img.src}
                  alt={item.name}
                  width={320}
                  height={320}
                  className="hover:scale-105 object-cover overflow-hidden"
                />
                <div className="text-xl font-semibold text-gray mt-2">
                  {item.name}
                </div>

                <span className="flex gap-6 mt-2">
                  <FacebookIcon className="text-blue-600" />
                  <TwitterIcon className="text-blue-400" />
                  <LinkedInIcon className="text-blue-700" />
                  <YouTubeIcon className="text-red-600" />
                </span>

                <span className="flex mt-2 gap-2">
                  <StarBorderIcon className="text-gray-500" />
                  <p className="text-gray-500 text-lg">{item.designation}</p>
                </span>
                <span className="flex mt-2 gap-2">
                  <LocalPhoneIcon className="text-gray-500" />
                  <p className="text-gray-500 text-lg mt-0.5">
                    {item.phonenumber}
                  </p>
                </span>
                <span className="flex mt-2 gap-2">
                  <EmailIcon className="text-gray-500" />
                  <p className="text-gray-500 text-lg">{item.email}</p>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Teacher;
