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
        <h3 className="text-[2rem] ">
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
        <h3 className="text-[2rem] ">
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
        <h3 className="text-[2rem] ">
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
    <section className="relative flex flex-col gap-20 pt-13 text-white pb-[8.75rem]">
      <div className="absolute -top-13 right-0 w-[319px] h-[382px]  bg-[#ADAAFC]/14 rounded-full blur-3xl pointer-events-none z-2"></div>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl">
          <span>What Sets </span> <span className="text-[#F342E8]">Us</span>{" "}
          <span>Apart</span>
        </h2>
        <p className="text-xl">
          <span>
            {" "}
            Everything you need to start and grow your Web3 career, guided by
            real
          </span>{" "}
          <span className="text-[#F342E8]">experts.</span>
        </p>
      </div>
      <div className="flex flex-col gap-[5.625rem]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } items-center justify-between xl:gap-[5.5rem] max-w-7xl mx-auto`}
          >
            <div className="flex flex-col gap-5">
              {feature.title}
              <p className="text-xl text-[#fff]/50 hover:text-white">
                {feature.description}
              </p>
            </div>
            <Image src={feature.iconImg} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
