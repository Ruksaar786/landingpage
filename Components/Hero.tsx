/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-contain bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-4xl md:text-5xl text-white font-bold gap-3 ">
            WELCOME TO OUR ONLINE COACHING <br />
            <span className="text-green-500">
              MASTER <br /> MERNSTACK
            </span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[25px] text-[#fffdfd92] gap-5">
            New Session on MERN Stack Class starting from 18 November 202
            <span>Join Discord Channel </span>
            <br /> Visit the FAQ page for the most commonly asked questions.{" "}
            <br />
            Note: You must use your Gmail account to register
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-300 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#25b172] text-black flex items-center space-x-2">
              <p> Enroll Now</p>
            </button>
          </div>
        </div>
        <div className="w-[600px] hidden relative lg:flex items-center rounded-full h-[600px]">
          <Image
            src="/images/u1.jpg"
            alt="mernstack"
            layout="fill"
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
