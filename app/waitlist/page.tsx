'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'motion/react';
import Abstract3d from '@/public/abstract-3d.svg';
import MetaMask from '@/public/metamask-logo.svg';
import Novus from '@/public/novus-logo-and-name.svg';
import OpenCampus from '@/public/open_campus_logo.svg.svg';

const dotVariants: Variants = {
  jump: {
    y: -30,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
}

const WaitlistPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email: ', email);
  }
  return (
    <div className="relative w-screen min-h-screen py-[40px] px-[110px] gradient-background">
      {/* Logo */}
      <Image src={Novus} alt="novus" />
      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-8 h-[500px] w-[450px] blur-[80px] rounded-full bg-gradient-to-tr from-transparent to-[#21FFD6]  opacity-20 pointer-events-none z-3" />
      {/* Top Blur */}
      <div className="absolute top-0 right-8 h-[500px] w-[450px] blur-[80px] rounded-full bg-gradient-to-tr from-transparent to-[#FFFFFF]  opacity-30 pointer-events-none z-3" />

      {/* Abstract Art  */}
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex justify-center items-center gap-2"
      >
        <motion.div className="will-change-transform absolute left-[350px] bottom-[150px] z-0" variants={dotVariants}>
          <Image src={Abstract3d} alt="abstract" />
        </motion.div>
      </motion.div>

      {/* Main Text */}
      <div
        className="flex flex-col lg:flex-row pt-[50px] justify-around items-center z-10"
      >
        <div className=" h-[600px] pt-[150px] text-left justify-self-start self-start">
          <h2 className="text-4xl md:text-5xl lg:text-[65px] text-white font-bold">MVP Coming <span className="bg-gradient-to-t from-[#F36E15] to-[#74DB89] bg-clip-text text-transparent">Soon!</span></h2>
        </div>
        <div className="min-w-fit lg:min-w-[550px] px-[80px] py-[100px] flex flex-col gap-[70px] bg-white/30 backdrop-blur-md rounded-lg">
          <div className="text-center">
            <h2 className="text-white text-[30px] font-bold">Join Our <span className="text-[#F342E8]">Waitlist</span></h2>
            <p className="text-[#CED0E4] text-sm">Stay updated and Join the Movement</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-[500px] justify-center items-center"
          >
            <label htmlFor="email" className="text-[#CED0E4] self-start">Email address</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[45px] w-full outline-none bg-white placeholder-[#9F9F9F]/80 rounded-lg px-4"
            />
            <Button className="w-full h-[45px] rounded-xl bg-[#534CFF]" size="lg">
              Submit
            </Button>
          </form>
          <div className="flex flex-col gap-4">
            <Button className="w-full h-[45px] rounded-xl flex justify-center gap-2" variant="secondary" size="lg">
              <Image src={MetaMask} alt="metamask" />
              Join with Metamask
            </Button>
            <Button className="w-full h-[45px] rounded-xl" variant="secondary" size="lg">
              <Image src={OpenCampus} alt="open campus" />
              Join with OCID
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitlistPage