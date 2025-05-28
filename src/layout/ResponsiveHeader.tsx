"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { utkaleducation } from "@/assest/header";
import MenuIcon from "@mui/icons-material/Menu";
import { Collapse } from "@mui/material";
import { navArr } from "@/utils/navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <section className=" sticky top-0 ">
        <section className="w-full h-30  justify-between items-center flex lg:hidden">
          <Link href="/">
            <Image
              src={utkaleducation.src}
              className="h-[10rem] w-[10rem] "
              alt="Utkal Education"
            />
          </Link>
          <MenuIcon
            className="!text-5xl"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </section>
      </section>
      <Collapse in={isOpen} timeout="auto">
        {navArr.map((item) => (
          <Link
            href={item.path}
            key={item.id.toString()}
            className="justify-between"
          >
            <ul className="w-full border-black border lg:hidden">
              <li className="text-2xl flex w-full justify-between items-center px-6">
                {item.title}
                <ArrowForwardIcon className="!text-3xl" />
              </li>
            </ul>
          </Link>
        ))}
      </Collapse>
    </>
  );
}

export default ResponsiveHeader;
