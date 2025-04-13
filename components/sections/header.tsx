import Image from "next/image";
import React from "react";
import FluidBg from "@/public/Landing/fluid-bg.svg";
import Navbar from "./navbar";
import Hero from "./hero";

const Header = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col items-center  text-white bg-gradient-to-tr from-[#0E0B1D] to-[#322E99] p-8 px-4 md:px-12 lg:px-[5.3125rem]">
      <Navbar />
      <Hero />
      <div className="absolute top-0 right-0 w-[300px] h-[400px] bg-[#21FFD6] opacity-20 rounded-full blur-3xl pointer-events-none z-2"></div>
      <div className="absolute bottom-0 left-[4rem] w-[400px] h-[471px] bg-gradient-to-bl from-[#0000CE] via-[#3250BC] to-[#00948D]   rounded-r-full blur-[11rem] pointer-events-none z-2"></div>
      <Image
        className="absolute bottom-0 right-0 z-2 pointer-events-none "
        src={FluidBg}
        alt=""
      />
    </header>
  );
};

export default Header;
