"use client";
import { education2 } from "@/assest/Home";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ESection4() {
  const [number, setNumber] = useState(0);
  const target = 4289;
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });

    const interval = setInterval(() => {
      const section = sectionRef.current;
      if (
        section &&
        section.classList.contains("aos-animate") &&
        !hasAnimated.current
      ) {
        hasAnimated.current = true;
        runNumber();
        clearInterval(interval);
      }
    }, 200); // check every 200ms

    return () => clearInterval(interval);
  }, []);

  // ✅ Run number animation
  const runNumber = () => {
    let current = 0;
    const increment = 1;
    const stepTime = Math.max(Math.floor(2000 / target), 1);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setNumber(current);
    }, stepTime);
  };

  return (
    <div
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-[24rem] w-full"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Image */}
      <Image
        src={education2}
        alt="Education Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Foreground */}
      <div className="relative z-10 flex flex-col px-4 text-center max-w-2xl">
        <p className="text-gray-500 text-2xl font-semibold">
          Join <span className="text-orange-400 text-5xl">{number}</span> people
        </p>
        <p className="text-gray-200 text-sm mt-2">
          Unlock new opportunities with Utkal Education! Our customized training
          programs equip you with the skills needed to stay ahead in today’s
          evolving job market. Whether you&apos;re an aspiring professional, a
          corporate employee, or a contract worker, we have the right learning
          solutions for you.
        </p>
        <button className="w-auto mx-auto mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default ESection4;
