import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";
import logo from "../public/logo2.png";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
      <Image
        src={logo}
        alt="logo"
        width="205"
        height="75"
        className="cursor-pointer"
      />
      <ul className="hidden sm:flex">
        <li className="ml-10 uppercase hover:border-b text-xl">Home</li>

        <li className="ml-10 uppercase hover:border-b text-xl">About</li>

        <li className="ml-10 uppercase hover:border-b text-xl">Dashboard</li>

        <li className="ml-10 uppercase hover:border-b text-xl">Faq</li>

        <li className="ml-10 uppercase hover:border-b text-xl">Contact</li>

        <li className="mx-10 uppercase hover:border-b text-xl">Demo</li>
        <button className="bg-green-400 gap-3">Login or New Account</button>
      </ul>
    </div>
  );
};

export default Nav;
