import { news1Arr } from "@/utils/home";
import React from "react";

function News1() {
  return (
    <div className="main-container py-6 bg-white ">
      <p className="text-5xl font-bold mb-4">LATEST NEWS</p>
      <div className="grid  grid-cols-1 md:grid-cols-3  gap-9">
        {news1Arr.map((item) => (
          <div
            className="w-full shadow-md  rounded-md bg-white gap-5"
            key={item.id.toString()}
          >
            <img src={item.img.src} className="w-full hover:scale-105" />
            <div className="flex  gap-3 px-2 py-2 ">
              <span className="flex flex-col border-solid border-yellow-300 border-2 text-center">
                <p className="text-yellow-400">{item.count}</p>
                <p className="text-yellow-400">{item.month}</p>
              </span>
              <p className="text- lg:text-xl text-xs">{item.title}</p>
            </div>
            <div className="px-2">
              <p className=" text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News1;
