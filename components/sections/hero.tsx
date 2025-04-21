"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import HeroImg from "@/public/Landing/hero.svg";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[5.9375rem] h-full max-w-7xl pt-16 lg:pt-28 px-4 lg:px-0">
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <motion.h1
          className="text-[2rem] leading-8 lg:text-[2.5rem] lg:leading-12 xl:text-[4rem] xl:leading-tight font-medium tracking-tighter text-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span>Learn from Real Instructors. Build Real </span>
          <span className="text-[#F342E8]">Skills</span>
          <span>.</span>
        </motion.h1>

        
        <motion.p
          className="text-base lg:text-xl text-white/90"
          initial={{ y: -20, x: -50, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Join the next evolution of education — built for creators, developers, and curious minds in the Web3 space.
        </motion.p>

       
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/waitlist">
            <Button className="bg-[#534CFF] w-[150px]" size="lg">
              Join Waitlist
            </Button>
          </Link>
        </motion.div>
      </div>

    
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full h-full lg:max-w-[40%] md:max-w-[50%] xl:max-w-full flex justify-center items-center"
      >
        <Image
          className="w-auto h-auto"
          src={HeroImg || "/placeholder.svg"}
          priority
          quality={70}
          alt="" />
      </motion.div>
    </section>
  )
}

export default Hero
