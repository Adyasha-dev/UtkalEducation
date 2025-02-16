// import { useState } from "react";
// import React from "react";
// import { faqArr, certificateArr } from "@/utils/about";
// import { Collapse } from "@mui/material";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// function Lastsection2() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const [isOpen, setIsOpen] = useState<number | null>(null);

//   const handleClick = (index: number) => {
//     setIsOpen(isOpen === index ? null : index);
//   };

//   return (
//     <div className="main-container">
//       <div className="font-bold text-4xl">FAQ & CERTIFICATIONS</div>

//       {/* Container to arrange FAQ & Certificates side by side */}
//       <div className="flex flex-col md:flex-row gap-8 py-14 w-full">
//         {/* FAQ Section */}
//         <div className="w-full md:w-1/2">
//           {faqArr.map((item, index) => (
//             <div
//               key={item.id}
//               className={`border border-gray-500 rounded-md bg-slate-300 my-3 p-4 transition-all ${
//                 isOpen === index ? "scale-105" : ""
//               }`}
//             >
//               {/* Icon & Question in one row */}
//               <div
//                 className="flex items-center gap-4 cursor-pointer"
//                 onClick={() => handleClick(index)}
//               >
//                 <div className="bg-orange-400 w-10 h-10 flex items-center justify-center rounded">
//                   {item.icon}
//                 </div>
//                 <p className="text-gray-500 text-xl md:text-2xl">
//                   {item.question}
//                 </p>
//               </div>

//               {/* Answer appears below when expanded */}
//               <Collapse in={isOpen === index} timeout="auto" unmountOnExit>
//                 <p className="text-black text-md mt-2">{item.answer}</p>
//               </Collapse>
//             </div>
//           ))}
//         </div>

//         {/* Certificate Section */}

//         <div className="w-full md:w-1/2  p-4 rounded flex gap-6">
//           <Slider {...settings}>
//             {certificateArr.map((item) => (
//               <div
//                 className="flex flex-col items-center"
//                 key={item.id.toString()}
//               >
//                 <img src={item.img.src} className="w-full h-auto rounded-md" />
//                 <p className="text-gray-400 text-xl mt-2">{item.content}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Lastsection2;
import { useState } from "react";
import React from "react";
import { faqArr, certificateArr } from "@/utils/about";
import { Collapse } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Lastsection2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Below 768px (Mobile screens)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
      {
        breakpoint: 1024, // Between 768px - 1024px (Tablets & small desktops)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 3000, // Above 1024px (Large screens)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
    ],
  };

  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="main-container">
      <div className="font-bold text-4xl">FAQ & CERTIFICATIONS</div>

      {/* Container to arrange FAQ & Certificates side by side */}
      <div className="flex flex-col md:flex-row gap-8 py-14 w-full">
        {/* FAQ Section */}
        <div className="w-full md:w-1/2">
          {faqArr.map((item, index) => (
            <div
              key={item.id}
              className={`border border-gray-500 rounded-md bg-slate-300 my-3 p-4 transition-all ${
                isOpen === index ? "scale-105" : ""
              }`}
            >
              {/* Icon & Question in one row */}
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <div className="bg-orange-400 w-10 h-10 flex items-center justify-center rounded">
                  {item.icon}
                </div>
                <p className="text-gray-500 text-xl md:text-2xl">
                  {item.question}
                </p>
              </div>

              {/* Answer appears below when expanded */}
              <Collapse in={isOpen === index} timeout="auto" unmountOnExit>
                <p className="text-black text-md mt-2">{item.answer}</p>
              </Collapse>
            </div>
          ))}
        </div>

        {/* Certificate Section with Slider */}
        <div className="w-full md:w-1/2 min-h-[300px] flex items-center justify-center gap-3">
          <div className="w-full overflow-hidden">
            <Slider {...settings}>
              {certificateArr.map((item) => (
                <div
                  className="flex flex-col items-center"
                  key={item.id.toString()}
                >
                  <img
                    src={item.img.src}
                    className="w-full h-auto rounded-md object-cover"
                    alt="Certificate"
                  />
                  <p className="text-gray-400 text-xl mt-2">{item.content}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lastsection2;
