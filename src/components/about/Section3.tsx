"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { two } from "@/assest/about";
import { content1Arr } from "@/utils/about";

function Section3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false); // Prevent repeated animation

  const runNumber = (el: HTMLElement, target: number) => {
    let current = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const interval = setInterval(() => {
      current += 1;
      el.textContent = current.toString();

      if (current >= target) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  useEffect(() => {
    AOS.init({ once: true });

    const interval = setInterval(() => {
      const section = containerRef.current;
      if (
        section &&
        section.classList.contains("aos-animate") &&
        !hasAnimated.current
      ) {
        hasAnimated.current = true;

        const counters = section.querySelectorAll(".count-up");
        counters.forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0");
          runNumber(el as HTMLElement, target);
        });

        clearInterval(interval);
      }
    }, 200); // check every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${two.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        ref={containerRef}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 main-container py-16"
      >
        {content1Arr.map((item) => (
          <div className="px-2" key={item.id.toString()}>
            <div
              className="text-6xl text-orange-500 count-up"
              data-target={item.count}
            >
              0
            </div>
            <div className="text-2xl text-white mt-3">{item.title}</div>
            <div className="text-sm text-gray-300 px-3 mt-3">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
