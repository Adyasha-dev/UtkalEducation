"use client";
import { navArr } from "@/utils/navbar";
import React from "react";
import Link from "next/link";
import { utkaleducation } from "@/assest/header";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
function Header() {
  return (
    <>
      <nav className="  w-full bg-white justify-between main-container sticky top-0 h-24 center  hidden lg:flex   ">
        <div className=" h-[10rem] w-[10rem] center">
          <Image
            src={utkaleducation.src}
            alt="Utkal Education"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex  gap-8 ">
          {navArr.map((item) => (
            <Link href={item.path} key={item.id.toString()}>
              <li className="list-none  text-slate-500 hover:text-orange-500">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <div>
          <SearchIcon />
        </div>
      </nav>
    </>
  );
}

export default Header;
