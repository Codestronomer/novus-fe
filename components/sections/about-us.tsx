import Image from "next/image";
import React from "react";
import WhaiIsNa from "@/public/Landing/what-is-na.svg";

const AboutUs = () => {
  return (
    <section className="z-10 relative px-6 sm:px-10 md:px-16 lg:px-20 pt-[5.875rem] pb-13">
      <div className="absolute top-0 right-0 w-[200px] h-[240px] sm:w-[250px] sm:h-[300px] md:w-[319px] md:h-[382px] bg-[#ADAAFC]/14 rounded-full blur-3xl pointer-events-none z-2"></div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5.5rem] max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-white">
            <span>What is </span> <span className="text-[#F342E8]">Novus </span>
            <span>Academy?</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#fff]/50 hover:text-white">
            Novus Academy+ is a Web3 platform offering instructor-led, practical
            courses with on-chain certificates and crypto-friendly payments.
            Learn real skills. Prove them. Own your progress.
          </p>
        </div>
        {/* <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-auto"> */}
        <Image
          className="max-w-[20rem] md:max-w-full "
          src={WhaiIsNa}
          alt="What is Novus Academy"
        />
        {/* </div> */}
      </div>
      <div className="absolute top-0 left-[1rem] sm:left-[2rem] md:left-[3rem] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-[#21FFD6]/14 rounded-full blur-[2rem] sm:blur-[2.5rem] md:blur-[3rem] pointer-events-none z-2"></div>
    </section>
  );
};

export default AboutUs;
