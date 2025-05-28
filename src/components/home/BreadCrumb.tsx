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
  dots: true,
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
        className="relative  h-auto overflow-hidden "
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Image src={home2.src} alt="Home 2" className=" w-full h-auto" />
        <div className="absolute inset-0  bg-black/50"></div>
        <div className="  z-30 absolute top-1/2 !-translate-y-1/2 bottom-0 right-0 left-0 ">
          <Slider {...settings}>
            {contentArr.map((item) => (
              <div key={item.id.toString()} className="w-full h-screen ">
                <h3 className="text-white font-bold text-xl  md:text-3xl  flex justify-center gap-6 ">
                  {item.title}
                </h3>
                <h3 className="text-white text-sm flex justify-center gap-6 px-2 ">
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
