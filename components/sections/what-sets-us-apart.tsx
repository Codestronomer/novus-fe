"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import InstructorLedLearning from "@/public/Landing/instructor.svg";
import OnChainCertification from "@/public/Landing/on-chain-cert.svg";
import CryptoPoweredPayments from "@/public/Landing/crypto.svg";
import { motion } from "framer-motion";

type Feature = {
  title: React.ReactNode
  description: string
  iconImg: StaticImageData
}
const WhatSetsUsApart = () => {
  const features: Feature[] = [
    {
      title: (
        <h3 className="text-2xl md:text-3xl lg:text-[2rem]">
          <span className="text-[#F342E8]">Instructor</span>
          <span>-Led</span> <span> Learning</span>
        </h3>
      ),
      description: "Learn directly from experienced Web3 professionals who guide you every step of the way.",
      iconImg: InstructorLedLearning,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl lg:text-[2rem]">
          <span>On-Chain</span> <span className="text-[#F342E8]"> Certification</span>
        </h3>
      ),
      description: "Your achievements are verified on the blockchain, ensuring credibility and transparency.",
      iconImg: OnChainCertification,
    },
    {
      title: (
        <h3 className="text-2xl md:text-3xl lg:text-[2rem]">
          <span>Crypto-Powered </span> <span className="text-[#F342E8]"> Payments </span> <span> & Grants</span>
        </h3>
      ),
      description:
        "Pay with fiat or crypto and apply for scholarships powered by smart contracts for a seamless experience.",
      iconImg: CryptoPoweredPayments,
    },
  ]
  return (
    <section className="relative flex flex-col gap-10 md:gap-16 lg:gap-20 pt-10 md:pt-13 text-white pb-16 md:pb-[8.75rem] px-[10px]">
      <div className="absolute -top-10 md:-top-13 right-0 w-[200px] h-[240px] md:w-[319px] md:h-[382px] bg-[#ADAAFC]/14 rounded-full blur-3xl pointer-events-none z-2"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          <span>What Sets </span> <span className="text-[#F342E8]">Us</span> <span>Apart</span>
        </h2>
        <p className="text-lg md:text-xl text-white/80">
          <span>Everything you need to start and grow your Web3 career, guided by real</span>{" "}
          <span className="text-[#F342E8]">experts.</span>
        </p>
      </motion.div>
      <div className="flex flex-col gap-10 md:gap-[5.625rem]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-around gap-[80px] xl:gap-[5.5rem] max-w-7xl mx-auto px-4`}
          >
            <div className="flex flex-col gap-3 md:gap-5 text-center md:text-left lg:text-left max-w-[400px]">
              {feature.title}
              <p className="text-base md:text-lg lg:text-xl text-white/90 hover:text-[#fff]/50">{feature.description}</p>
            </div>
            <Image
              src={feature.iconImg || "/placeholder.svg"}
              className="max-w-[20rem] md:max-w-[40%] rounded-lg"
              alt=""
              layout="responsive"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhatSetsUsApart;
