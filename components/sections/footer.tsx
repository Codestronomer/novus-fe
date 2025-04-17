"use client";
import React from "react";
import Image from "next/image";
import Novus from "@/public/novus-logo-and-name.svg";
import Facebook from "@/public/Landing/facebook.svg";
import Instagram from "@/public/Landing/instagram.svg";
import Twitter from "@/public/Landing/twitter.svg";
import LinkedIn from "@/public/Landing/linkedin.svg";
import Youtube from "@/public/Landing/youtube.svg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 },
  }),
};

const Footer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#282F6E] text-white flex flex-col gap-[40px] pt-[60px] pb-[25px] px-[20px] md:px-[40px] lg:px-[70px]"
    >
      <motion.div
        variants={fadeInUp}
        custom={0}
        className="flex flex-wrap gap-6 lg:gap-4 justify-between"
      >
        <div className="w-fit">
          <Image src={Novus} alt="novus-academy" />
        </div>

        <div className="flex flex-row justify-between gap-[50px]">
          {[
            {
              title: "Quicklinks",
              links: ["About us", "Contact", "FAQ", "Support", "Blog"],
            },
            {
              title: "Resources",
              links: [
                "Webinars",
                "E-books",
                "Case-Studies",
                "Guides",
                "Tutorials",
              ],
            },
            {
              title: "Stay updated",
              links: ["Newsletters", "Events", "Updates", "Feedback", "Offers"],
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              custom={i + 1}
              className="flex flex-col gap-2"
            >
              <h2 className="font-bold text-[16px]">{section.title}</h2>
              <ul className="text-[13px]">
                {section.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          custom={4}
          className="flex flex-col gap-2 w-fit"
        >
          <h2 className="font-bold">Subscribe</h2>
          <p>
            Join our newsletter for the latest updates and exclusive offers.
          </p>
          <div className="flex flex-row gap-5 justify-between">
            <div className="w-full">
              <input
                id="email"
                type="email"
                placeholder="Your email here"
                className="bg-[rgba(255,255,255,0.2)] rounded-md h-[40px] text-center text-white w-full"
              />
            </div>
            <div className="w-full">
              <Button className="h-[40px] w-full bg-[rgba(255,255,255,0.2)] text-white">
                <h2 className="text-white">Subscribe</h2>
              </Button>
            </div>
          </div>
          <p>
            By subscribing, you agree to our Privacy Policy and consent to
            updates.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        custom={5}
        className="flex flex-wrap-reverse md:flex-wrap lg:flex-wrap gap-3 justify-between"
      >
        <div className="flex flex-wrap-reverse md:flex-wrap lg:flex-wrap gap-[30px] lg:gap-[50px] justify-between">
          <p>© 2025 Novus Academy. All rights reserved.</p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-[20px] underline cursor-pointer">
            <span>Privacy policy</span>
            <span>Terms of service</span>
            <span>Cookie settings</span>
          </div>
        </div>

        <motion.div
          className="flex flex-row gap-[30px] md:mt-5"
          variants={fadeInUp}
          custom={6}
        >
          <a href="https://x.com/novus_academy?s=21&t=XfK1mDGREnpBlsliusDF2Q">
            <Image src={Twitter} alt="twitter-icon" />
          </a>
          <a href="#">
            <Image src={Facebook} alt="facebook-icon" />
          </a>
          <a href="#">
            <Image src={Instagram} alt="instagram-icon" />
          </a>
          <a href="#">
            <Image src={LinkedIn} alt="linkedin-icon" />
          </a>
          <a href="#">
            <Image src={Youtube} alt="youtube-icon" />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
