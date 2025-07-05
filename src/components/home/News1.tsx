// import { news1Arr } from "@/utils/home";
// import React from "react";
// import Image from "next/image";
// function News1() {
//   return (
//     <div className="main-container py-6 bg-white ">
//       <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
//         LATEST NEWS
//       </p>
//       <div className="grid  grid-cols-1 md:grid-cols-3  gap-9">
//         {news1Arr.map((item) => (
//           <div
//             className="w-full shadow-md p-4 rounded-md bg-white gap-5"
//             key={item.id.toString()}
//           >
//             <Image
//               src={item.img.src}
//               alt={item.title}
//               width={500}
//               height={300}
//               className="w-full hover:scale-105"
//             />
//             <div className="flex  gap-3 px-2 py-2 ">
//               <span className="flex flex-col border-solid border-yellow-300 border-2 text-center">
//                 <p className="text-yellow-400">{item.count}</p>
//                 <p className="text-yellow-400 ">{item.month}</p>
//               </span>
//               <p className="text-lg lg:text-xl ">{item.title}</p>
//             </div>
//             <div className="px-2">
//               <p className=" text-xs text-gray-500">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default News1;
import { news1Arr } from "@/utils/home";
import React from "react";
import Image from "next/image";

function News1() {
  return (
    <div className="main-container py-6 bg-white">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        LATEST NEWS
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {news1Arr.map((item) => (
          <div
            className="w-full shadow-md p-4 rounded-md bg-white gap-5"
            key={item.id.toString()}
          >
            <Image
              src={item.img.src}
              alt={item.title}
              width={500}
              height={300}
              className="w-full hover:scale-105 transition-transform duration-300"
            />

            <div className="flex gap-3 px-2 py-2 items-center">
              <span className="w-14  lg:w-32 flex flex-col items-center justify-center border-2 border-yellow-300 rounded-md text-yellow-400 text-sm font-semibold py-1">
                <p>{item.count}</p>
                <p>{item.month}</p>
              </span>

              <p className="text-sm  md:text-lg lg:text-2xl">{item.title}</p>
            </div>

            <div className="px-2">
              <p className="text-xs md:text-sm lg:text-lg text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News1;
