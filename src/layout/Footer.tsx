"use client";
import React from "react";
import { Footer1, Footer2, Footer3 } from "@/assest/footer";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className=" grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 bg-black gap-2  px-3 py-2 justify-between  pl-11 md:pl-28 ">
        <div className="  flex flex-col w-full justify-center my-1 ">
          <Image src={Footer1.src} width={200} height={50} alt="Footer 1" />
          <span className="flex gap-1">
            <FmdGoodIcon className="text-white" />
            <p className=" text-sm text-white">
              68 Tran Hung Dao, Binh Luc, H.Nam
            </p>
          </span>
          <span className="flex gap-1">
            <LocalPhoneIcon className="text-white" />
            <p className=" text-sm text-white">+919938795482</p>
          </span>
          <span className="flex gap-1">
            <EmailIcon className="text-white" />
            <p className=" text-sm text-white">adyashabiswal@9938gmail.com</p>
          </span>
        </div>
        <div className=" w-full   ">
          <p className="text-2xl  md:pl-7 text-white px-3 ">User Link</p>
          <span className="flex  justify-evenly py-4">
            <span className="flex flex-col">
              <span className="text-white">About Us</span>
              <span className="text-white">Blog</span>
              <span className="text-white">contact</span>
              <span className="text-white">Courses</span>
              <span className="text-white">FAQs</span>
              <span className="text-white">Events</span>
            </span>
            <span className="flex flex-col">
              <span className="text-white">Become a Teacher</span>
              <span className="text-white">Maintenance</span>
              <span className="text-white">Language Packs</span>
              <span className="text-white">LearnPress</span>
              <span className="text-white">Release Status</span>
            </span>
          </span>
        </div>
        <div className=" w-full flex flex-col gap-4 px-3">
          <p className="text-2xl text-white">Recent Course</p>
          <span className="flex gap-3">
            <Image src={Footer2.src} alt="Footer 2" width={96} height={64} />
            <span className="flex flex-col">
              <p className="text-white text-sm">UI-UX Designer Courses</p>
            </span>
          </span>
          <span className="flex gap-3">
            <Image src={Footer3.src} alt="Footer 3" width={96} height={64} />
            <span className="flex flex-col">
              <p className="text-white text-sm">PHP Shopify Courses</p>
            </span>
          </span>
        </div>
        <div className=" w-full flex flex-col px-3 gap-4">
          <p className="text-2xl text-white">Quick Contact</p>
          <form className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Your Email"
              className="text-white  w-64 py-1 rounded-sm"
            />
            <br />
            <input
              type="text"
              placeholder="message"
              className=" bg-white w-64 py-1 text-black rounded-sm"
            />
          </form>
          <span className="flex gap-3">
            <span>
              <a href="https://www.facebook.com">
                <FacebookIcon className="text-white !text-[2rem]" />
              </a>
            </span>
            <span>
              <a href="https://x.com">
                <TwitterIcon className="text-white !text-[2rem]" />{" "}
              </a>
            </span>
            <span>
              <a href="https://in.linkedin.com">
                <LinkedInIcon className="text-white !text-[2rem]" />
              </a>
            </span>

            <span>
              <a href="https://www.youtube.com">
                {" "}
                <YouTubeIcon className="text-white !text-[2rem]" />
              </a>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full bg-black py-4 flex justify-center px-2 items-center ">
        <p className="text-gray-200 text-sm md:text-base text-center  border-t-2 border-gray-400 w-full ">
          copyright © 2025. Designed by Utkal Group. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
