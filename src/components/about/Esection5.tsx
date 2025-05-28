// import React from "react";
// import { Elearning } from "@/assest/Home";
// import SmsIcon from "@mui/icons-material/Sms";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Esection5() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       <div className="">
//         <div
//           className="relative main-container my-7"
//           style={{
//             backgroundImage: `url(${Elearning.src})`,
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             height: "80vh",
//             width: "100vw",
//           }}
//         >
//           <div className="bg-purple-400/50 absolute inset-0"></div>
//           <Slider {...settings}>
//             <div className="bg-white/70 w-full md:w-[35rem] md:h-[35rem] p-4 mt-14 ">
//               <span className="flex flex-col justify-center items-center px-2 text-center ">
//                 <SmsIcon className="!text-5xl mb-4" />
//                 <p className="text-xl text-gray-500 mb-4">
//                   Education is the foundation of personal growth, empowerment,
//                   and societal progress. It enables individuals to acquire
//                   knowledge, skills, and values that foster critical thinking,
//                   creativity, and innovation. Through education, people can
//                   unlock their full potential, overcome challenges, and
//                   contribute positively to the world around them.
//                 </p>
//                 <p className="text-2xl text-gray-500 font-medium">
//                   Donal sampson
//                 </p>
//                 <p className="text-lg text-gray-500">
//                   Founder&CEO Arcade Systems
//                 </p>
//               </span>
//             </div>
//             <div className="bg-white/70 w-full md:w-[35rem] md:h-[35rem] p-4 mt-14">
//               <span className="flex flex-col justify-center items-center px-2 text-center">
//                 <SmsIcon className="!text-5xl mb-4" />
//                 <p className="text-xl text-gray-500 mb-4">
//                   Education is the foundation of personal growth, empowerment,
//                   and societal progress. It enables individuals to acquire
//                   knowledge, skills, and values that foster critical thinking,
//                   creativity, and innovation. Through education, people can
//                   unlock their full potential, overcome challenges, and
//                   contribute positively to the world around them.
//                 </p>
//                 <p className="text-2xl text-gray-500 font-medium">
//                   Donal sampson
//                 </p>
//                 <p className="text-lg text-gray-500">
//                   Founder&CEO Arcade Systems
//                 </p>
//               </span>
//             </div>
//             <div className="bg-white/70 w-full md:w-[35rem] md:h-[35rem] p-4 mt-14">
//               <span className="flex flex-col justify-center items-center px-2 text-center">
//                 <SmsIcon className="!text-5xl mb-4" />
//                 <p className="text-xl text-gray-500 mb-4">
//                   Education is the foundation of personal growth, empowerment,
//                   and societal progress. It enables individuals to acquire
//                   knowledge, skills, and values that foster critical thinking,
//                   creativity, and innovation. Through education, people can
//                   unlock their full potential, overcome challenges, and
//                   contribute positively to the world around them.
//                 </p>
//                 <p className="text-2xl text-gray-500 font-medium">
//                   Donal sampson
//                 </p>
//                 <p className="text-lg text-gray-500">
//                   Founder&CEO Arcade Systems
//                 </p>
//               </span>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Esection5;
"use client";
import { Elearning } from "@/assest/Home";
import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Esection5() {
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
                Education is not just about acquiring knowledge; it&apos;s about
                transforming lives. It nurtures critical thinking, fosters
                innovation, and empowers individuals to build a better future.
                At Utkal Education, we believe in unlocking potential and
                equipping learners with the skills they need to excel in a
                rapidly evolving world
              </p>
              <p className="text-2xl text-gray-900 font-medium">
                Donal Sampson
              </p>
              <p className="text-sm text-gray-700">
                Founder & CEO, Utkal Education
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Esection5;
