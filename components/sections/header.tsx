import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import NovusAcademy from "@/public/Landing/novusacademy.svg";
import FluidBg from "@/public/Landing/fluid-bg.svg";
import HeroImg from "@/public/Landing/home-img.svg";

const Header = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col items-center  text-white bg-gradient-to-tr from-[#0E0B1D] to-[#322E99] p-8 h-[100px] px-[5.3125rem]">
      <nav className="w-full flex justify-between items-center h-fit">
        <Image src={NovusAcademy} alt="" />
        <ul className="text-[0.9375rem] leading-[1.125rem] flex gap-10">
          <li>Home</li>
          <li>Features</li>
          <li>Why us</li>
          <li>Roadmap</li>
        </ul>
        <Button className="bg-white text-black text-sm" size="lg">
          Join Waitlist
        </Button>
      </nav>
      <section className="flex items-center justify-between xl:gap-[5.9375rem] h-full max-w-7xl pt-28 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-[4rem] font-medium tracking-tighter text-white">
            <span>Learn from Real Instructors. Build Real </span>{" "}
            <span className="text-[#F342E8]">Skills</span>
            <span>.</span>
          </h1>
          <p className="text-xl text-[#fff]/50 hover:text-white">
            Join the next evolution of education — built for creators,
            developers, and curious minds in the Web3 space.
          </p>
          <Button className="bg-[#534CFF] w-[150px]" size="lg">
            Join Waitlist
          </Button>
        </div>
        <Image src={HeroImg} alt="" />
      </section>
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
