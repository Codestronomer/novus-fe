"use client";

import Image from "next/image";
import React from "react";
import WhaiIsNa from "@/public/Landing/about-us.svg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const fadeLeft = {
  hidden: { x: -50, opacity: 0 },

  visible: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } },
}

const fadeRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } },
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } },
}

const AboutUs = () => {
  return (
    <motion.section
      id="about-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="z-10 relative sm:px-10 md:px-16 lg:px-16 pt-[5.875rem] pb-13 flex items-center"
    >
    
      <div className="absolute top-0 right-0 w-[200px] h-[240px] sm:w-[250px] sm:h-[300px] md:w-[319px] md:h-[382px] bg-[#ADAAFC]/14 rounded-full blur-3xl pointer-events-none z-2"></div>

   
      <div className="flex flex-col  md:flex-row lg:flex-row items-center justify-between gap-10 lg:gap-[5.5rem] max-w-7xl mx-auto">
        <motion.div variants={containerVariants} className="flex flex-col gap-5 text-center md:text-left lg:text-left max-w-[450px]">
          <motion.h1
            variants={fadeLeft}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-white"
          >
            <span>What is </span>
            <span className="text-[#F342E8]">Novus </span>
            <span>Academy?</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg lg:text-xl text-white/90">
            Novus Academy+ is a Web3 platform offering instructor-led, practical courses with on-chain certificates and
            crypto-friendly payments. Learn real skills. Prove them. Own your progress.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeRight}
          className="w-full h-full max-w-[18rem] md:max-w-full flex justify-center items-center"
        >
          <Image
            width={400}
            height={400}
            priority
            className="w-auto h-auto"
            src={WhaiIsNa || "/placeholder.svg"}
            alt="What is Novus Academy"
          />
        </motion.div>
      </div>

      
      <div className="absolute top-0 left-[1rem] sm:left-[2rem] md:left-[3rem] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-[#21FFD6]/14 rounded-full blur-[2rem] sm:blur-[2.5rem] md:blur-[3rem] pointer-events-none z-2"></div>
    </motion.section>
  )
}

export default AboutUs
