"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import PurpleBg from "@/public/Landing/purple.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${PurpleBg.src})` }}
      className="flex flex-col justify-center items-center gap-4 bg-no-repeat bg-cover p-[28px] pt-[45px]"
    >
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl text-center mt-[30px] mb-[10px] text-white font-medium tracking-tighter"
      >
        Are you <span className="text-[#F342E8]">thrilled?</span>
      </motion.h2>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link href="/waitlist">
          <Button
            className="bg-[#534CFF] w-[160px] mb-[30px]"
            size="lg"
            type="submit"
          >
            Join Waitlist
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
