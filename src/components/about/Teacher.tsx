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
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Teacher() {
  return (
    <>
      <div className="main-container">
        <div className="py-6 ">
          <p className="text-5xl font-bold">OUR TEACHER</p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={true}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <div className=" main-container  gap-10 py-14 ">
            {teacherArr.map((item) => (
              <SwiperSlide key={item.id.toString()}>
                <div className="shadow-md rounded-md bg-white py-4 px-4 ">
                  <img
                    src={item.img.src}
                    className="hover:scale-105 h-[28rem] w-[28rem]"
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
                    <p className="text-gray-500 tetx-xl">{item.designation}</p>
                  </span>
                  <span className="flex mt-2">
                    <LocalPhoneIcon />
                    <p className="text-gray-500 mt-2 tetx-xl">
                      {item.phonenumber}
                    </p>
                  </span>
                  <span className="flex mt-2">
                    <EmailIcon />
                    <p className="text-gray-500 tetx-xl">{item.email}</p>
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Teacher;
