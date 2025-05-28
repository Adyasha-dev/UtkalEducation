import { education2 } from "@/assest/Home";
import Image from "next/image";
import React from "react";

function ESection4() {
  return (
    <>
      <div className="relative flex justify-center items-center min-h-[24rem] w-full">
        {/* Background Image using Next.js Image */}
        <Image
          src={education2}
          alt="Education Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          priority
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col px-4 text-center max-w-2xl">
          <p className="text-gray-500 text-2xl font-semibold">
            Join <span className="text-orange-400 text-5xl">458595</span> people
          </p>
          <p className="text-gray-200 text-sm  mt-2">
            Unlock new opportunities with Utkal Education! Our customized
            training programs equip you with the skills needed to stay ahead in
            today’s evolving job market. Whether you&apos;re an aspiring
            professional, a corporate employee, or a contract worker, we have
            the right learning solutions for you.
          </p>
          <button className=" w-auto mx-auto  mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ESection4;
