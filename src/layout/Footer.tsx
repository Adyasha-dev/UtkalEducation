"use client";
import React from "react";
import { Footer1, Footer2, Footer3 } from "@/assest/footer";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="main-container grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4 bg-black gap-2 justify-center px-3 py-2 ">
        <div className="  flex flex-col w-full justify-center ">
          <Image
            src={Footer1.src}
            className="h-32rem w-32rem "
            alt="Footer 1"
          />
          <span className="flex ">
            <FmdGoodIcon className="text-white" />
            <p className=" text-sm text-white">
              68 Tran Hung Dao, Binh Luc, H.Nam
            </p>
          </span>
          <span className="flex">
            <LocalPhoneIcon className="text-white" />
            <p className=" text-sm text-white">+919938795482</p>
          </span>
          <span className="flex">
            <EmailIcon className="text-white" />
            <p className=" text-sm text-white">adyashabiswal@9938gmail.com</p>
          </span>
        </div>
        <div className=" w-full   ">
          <p className="text-2xl text-white px-3 ">User Link</p>
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
            <Image src={Footer2.src} className="h-16 w-24" alt="Footer 2" />
            <span className="flex flex-col">
              <p className="text-white text-sm">UI-UX Designer Courses</p>
            </span>
          </span>
          <span className="flex gap-3">
            <Image src={Footer3.src} className="h-16 w-24" alt="Footer 3" />
            <span className="flex flex-col">
              <p className="text-white text-sm">PHP Shopify Courses</p>
            </span>
          </span>
        </div>
        <div className=" w-full flex flex-col px-3 gap-4">
          <p className="text-2xl text-white">Quick Contact</p>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="text-white w-2.5rem px-3 py-2"
            />
            <br />
            <TextField placeholder="message" className="py-3 px-2 text-white" />
          </form>
          <span className="flex gap-3">
            <span>
              <FacebookIcon className="text-white" />
            </span>
            <span>
              <TwitterIcon className="text-white" />
            </span>
            <span>
              <LinkedInIcon className="text-white" />
            </span>
            <span>
              <YouTubeIcon className="text-white" />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
