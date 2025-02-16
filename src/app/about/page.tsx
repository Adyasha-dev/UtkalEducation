"use client";
import Aboutme from "@/components/about/Aboutme";
import Breadcrumb from "@/components/about/Breadcrumb";
import Section3 from "@/components/about/Section3";
import React from "react";
import Teacher from "@/components/about/Teacher";
import Esection5 from "@/components/about/Esection5";
import Lastsection2 from "@/components/about/Lastsection2";
export default function page() {
  return (
    <>
      <Breadcrumb />
      <Aboutme />
      <Section3 />
      <Teacher />
      <Esection5 />
      <Lastsection2 />
    </>
  );
}
