import React from "react";
import Image from "next/image";
import InstructorLedLearning from "@/public/Landing/instructor-ll.svg";
import OnChainCertification from "@/public/Landing/on-chain-cert.svg";
import CryptoPoweredPayments from "@/public/Landing/cryptopowered.svg";

type Feature = {
  title: React.ReactNode;
  description: string;
  iconImg: string;
};
const WhatSetsUsApart = () => {
  const features: Feature[] = [
    {
      title: (
        <h3 className="text-2xl md:text-3xl lg:text-[2rem]">
          <span className="text-[#F342E8]">Instructor</span>
          <span>-Led</span> <span> Learning</span>
        </h3>
      ),
      description:
        "Learn directly from experienced Web3 professionals who guide you every step of the way.",
      iconImg: InstructorLedLearning,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl lg:text-[2rem]">
          <span>On-Chain</span>{" "}
          <span className="text-[#F342E8]"> Certification</span>
        </h3>
      ),
      description:
        "Your achievements are verified on the blockchain, ensuring credibility and transparency.",
      iconImg: OnChainCertification,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl lg:text-[2rem]">
          <span>Crypto-Powered </span>{" "}
          <span className="text-[#F342E8]"> Payments </span>{" "}
          <span> & Grants</span>
        </h3>
      ),
      description:
        "Pay with fiat or crypto and apply for scholarships powered by smart contracts for a seamless experience.",
      iconImg: CryptoPoweredPayments,
    },
  ];
  return (
    <section className="relative flex flex-col gap-10 md:gap-16 lg:gap-20 pt-10 md:pt-13 text-white pb-16 md:pb-[8.75rem]">
      <div className="absolute -top-10 md:-top-13 right-0 w-[200px] h-[240px] md:w-[319px] md:h-[382px] bg-[#ADAAFC]/14 rounded-full blur-3xl pointer-events-none z-2"></div>
      <div className="flex flex-col items-center text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          <span>What Sets </span> <span className="text-[#F342E8]">Us</span>{" "}
          <span>Apart</span>
        </h2>
        <p className="text-lg md:text-xl">
          <span>
            Everything you need to start and grow your Web3 career, guided by
            real
          </span>{" "}
          <span className="text-[#F342E8]">experts.</span>
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-[5.625rem]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-5 xl:gap-[5.5rem] max-w-7xl mx-auto px-4`}
          >
            <div className="flex flex-col gap-3 md:gap-5 text-center md:text-left">
              {feature.title}
              <p className="text-base md:text-lg lg:text-xl text-[#fff]/50 hover:text-white">
                {feature.description}
              </p>
            </div>
            {/* <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64"> */}
            <Image
              src={feature.iconImg}
              className="max-w-[20rem] md:max-w-full "
              alt=""
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
