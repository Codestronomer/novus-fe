import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import HeroImg from "@/public/Landing/home-img.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5.9375rem] h-full max-w-7xl pt-16 lg:pt-28 px-4 lg:px-0">
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <h1 className="text-[2rem] lg:text-[2.5rem] xl:text-[4rem] font-medium tracking-tighter text-white">
          <span>Learn from Real Instructors. Build Real </span>
          <span className="text-[#F342E8]">Skills</span>
          <span>.</span>
        </h1>
        <p className="text-base lg:text-xl text-[#fff]/50 hover:text-white">
          Join the next evolution of education — built for creators, developers,
          and curious minds in the Web3 space.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link href='/waitlist'>
            <Button className="bg-[#534CFF] w-[150px]" size="lg">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
      <Image className=" lg:max-w-[40%] xl:max-w-full" src={HeroImg} alt="" />
    </section>
  );
};

export default Hero;
