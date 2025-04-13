import Image from "next/image";
import React from "react";
import WhaiIsNa from "@/public/Landing/what-is-na.svg";

const AboutUs = () => {
  return (
    <section className="relative px-20 pt-[5.875rem] pb-13">
      <div className="absolute top-0 right-0 w-[319px] h-[382px]  bg-[#ADAAFC]/14 rounded-full blur-3xl pointer-events-none z-2"></div>
      <div className="flex items-center justify-between xl:gap-[5.5rem] max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-medium tracking-tighter text-white">
            <span>What is </span> <span className="text-[#F342E8]">Novus </span>
            <span>Academy?</span>
          </h1>
          <p className="text-xl text-[#fff]/50 hover:text-white">
            Novus Academy+ is a Web3 platform offering instructor-led, practical
            courses with on-chain certificates and crypto-friendly payments.
            Learn real skills. Prove them. Own your progress.
          </p>
        </div>
        <Image src={WhaiIsNa} alt="" />
      </div>
      <div className="absolute top-0 left-[3rem] w-[300px] h-[300px]  bg-[#21FFD6]/14 rounded-full blur-[3rem] pointer-events-none z-2"></div>
    </section>
  );
};

export default AboutUs;
