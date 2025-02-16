// "use client";
// import { boxArr } from "@/utils/home";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// function Box1() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };
//   return (
//     <>
//       <div className=" flex w-full h-56 bg-red-600 justify-evenly items-center">
//         <Slider {...settings}>
//           {boxArr.map((item) => (
//             <div key={item.id.toString()} className="">
//               <img src={item.img.src} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default Box1;
"use client";
import { boxArr } from "@/utils/home";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Box1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full  flex justify-center items-center py-8">
      <div className="w-full  max-w-5xl px-4">
        {" "}
        {/* Container to control the width */}
        <Slider {...settings}>
          {boxArr.map((item) => (
            <div key={item.id.toString()} className="flex justify-center px-4">
              <img
                src={item.img.src}
                alt="Slider Image"
                className="w-full h-48 object-contain" // Ensures proper scaling
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Box1;
