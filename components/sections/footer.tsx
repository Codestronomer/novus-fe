"use client";
import React from "react";
import Image from "next/image";
import Novus from "@/public/novus-logo-and-name.svg";
import Facebook from "@/public/Landing/facebook.svg";
import Instagram from "@/public/Landing/instagram-filled.svg";
import Twitter from "@/public/Landing/twitter.svg";
import { motion } from "motion/react";
import Link from "next/link";
import FluidBg from "@/public/Landing/fluid-bg-left.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Footer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative text-white flex flex-col gap-[28px] pt-[60px] pb-[50px] px-[20px] md:px-[40px] lg:px-[70px]"
    >
      <motion.div
        variants={fadeInUp}
        custom={0}
        className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 text-sm"
      >
        <Link href="#home">
          <p>Home</p>
        </Link>
        <Link href="#features">
          <p>Features</p>
        </Link>
        <Link href="#about-us">
          <p>About us</p>
        </Link>
        <div className="w-fit hidden md:flex lg:flex">
          <Image src={Novus} alt="novus-academy" className="max-h-[42px] pb-2" />
        </div>
        <Link href="#roadmap">
          <p>Roadmap</p>
        </Link>
        <Link href="#whyus">
          <p>Why us</p>
        </Link>
        <Link href="/waitlist">
          <p>Waitlist</p>
        </Link>
      </motion.div>

      <hr className="border-[#A5A4BA] h-[1px]"/>

      <motion.div
        variants={fadeInUp}
        custom={5}
        className="flex flex-col gap-1"
      >
        <div
          className="flex flex-row justify-center items-center gap-[15px] m-2 md:mt-5"
        >
          <a href="#">
            <Image src={Facebook} alt="facebook-icon" className="max-h-[30px]" />
          </a>
          <a href="#">
            <Image src={Instagram} alt="instagram-icon" className="max-h-[30px]" />
          </a>
          <a href="https://x.com/novus_academy?s=21&t=XfK1mDGREnpBlsliusDF2Q">
            <Image src={Twitter} alt="twitter-icon" className="max-h-[28px]" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-white/70">© Novus Acad, Inc. 2025</p>
        </div>
      </motion.div>
      <div className="absolute bottom-[-1] left-[-5]">
        <Image src={FluidBg} alt="fluid-art" className="max-w-[200px] max-h-[100px]" />
      </div>
    </motion.section>
  );
};

export default Footer;
