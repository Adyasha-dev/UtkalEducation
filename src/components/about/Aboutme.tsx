"useclient";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { one } from "@/assest/about";
function Aboutme() {
  return (
    <>
      <div className="w-full main-container md:flex gap-20">
        <div className=" w-full md:w-1/2 my-12 ">
          <p className="text-black  text-3xl lg:text-4xl font-bold ">
            Welcome to Educate!
          </p>
          <p className="text-gray-400 text-lg mt-6">
            Empowering individuals and organizations with world-class learning
            solutions, Utkal Education bridges the skill gap by providing
            customized technical and behavioral training. Our programs are
            designed to enhance industry-specific knowledge and equip learners
            with the necessary skills for career growth. With a focus on
            practical learning, we offer:
          </p>
          <span className="flex gap-2 items-center mt-6">
            <CheckIcon className="!text-lg" />
            <p className="text-gray-400 text-lg">
              Comprehensive training modules tailored to various industries.
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-lg" />
            <p className="text-gray-400 text-lg">
              100+ hours of interactive e-learning content.
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-lg" />
            <p className="text-gray-400 text-lg">
              Hands-on projects to reinforce learning.
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-lg" />
            <p className="text-gray-400 text-lg">
              Expert mentorship and career guidance.
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckIcon className="!text-lg" />
            <p className="text-gray-400 text-lg">
              Certification programs to boost professional credibility.
            </p>
          </span>
          <p className="text-gray-400 text-lg mt-3">
            At Utkal Education, we believe in transforming learning experiences
            with cutting-edge methodologies and an engaging curriculum. Join us
            to unlock new opportunities and stay ahead in today&apos;s
            competitive job market!
          </p>
        </div>
        <div className=" w-full md:w-1/2  my-6">
          <Image
            src={one.src}
            alt="Utkal Education Illustration"
            width={480}
            height={448}
            className="w-full h-full md:w-[30rem] md:h-[28rem] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Aboutme;
