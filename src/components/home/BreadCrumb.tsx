"use client";
import { home2 } from "@/assest/Home";
import React from "react";
import Aos from "aos"; // Note the lowercase 'a'
import "aos/dist/aos.css";
import Slider from "react-slick";
import { contentArr } from "@/utils/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function BreadCrumb() {
  React.useEffect(() => {
    Aos.init({
      duration: 2000, // Optional
      easing: "ease-in-out", // Optional
      delay: 0, // Optional
    });
  }, []);

  return (
    <>
      <div
        className="relative  w-full  overflow-hidden "
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="relative  w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[800px]">
          <Image
            src={home2.src}
            alt="Home 2"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0  bg-black/60 z-10"></div>
        <div className="  z-20 absolute inset-0  flex justify-center items-center text-center">
          <Slider {...settings} className="w-full max-w-4xl lg:max-w-7xl px-4">
            {contentArr.map((item) => (
              <div
                key={item.id.toString()}
                className=" flex flex-col   justify-center items-center  px-4  text-center "
              >
                <h3 className="text-white font-bold text-lg  md:text-4xl  lg:text-5xl flex justify-center gap-6 ">
                  {item.title}
                </h3>
                <h3 className="text-white text-xs md:text-lg lg:text-xl flex  gap-6 max-w-fit text-center ">
                  {item.description}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
