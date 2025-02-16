// import BreadCrumb from "@/componet/home/BreadCrumb";

import BreadCrumb from "@/components/home/BreadCrumb";
import Coursesection from "@/components/home/Coursesection";
import Esection4 from "@/components/home/ESection4";
import News1 from "@/components/home/News1";
// import HeroSection from "@/components/home/HeroSection";
import HeroSection from "@/components/home/HeroSection";
import Box1 from "@/components/home/Box1";
import Esection7 from "@/components/home/Esection7";
import Image from "next/image";
import Lastsection from "@/components/home/Lastsection";
export default function Home() {
  return (
    <div className="">
      <BreadCrumb />
      <HeroSection />
      <Coursesection />
      <Esection4 />
      <News1 />
      <Box1 />
      <Esection7 />
      <Lastsection />
    </div>
  );
}
