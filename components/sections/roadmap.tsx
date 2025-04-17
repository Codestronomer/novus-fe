"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MileStoneItemType } from "@/types";
import RoadmapSection from "../ui/roadmapSection";
import NovusLogo from "@/public/Landing/novus.svg";
import VisionImage from "@/public/Landing/visionimage.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const preLaunchMileStones: MileStoneItemType[] = [
  {
    index: 1,
    title: "MVP Development",
    content:
      "Core platform build with instructor dashboard, wallet payments, and student onboarding.",
    isFinalItem: false,
  },
  {
    index: 2,
    title: "Beta Access",
    content:
      "Invite-only access for early testers and tutors to validate core features.",
    isFinalItem: false,
  },
  {
    index: 3,
    title: "Community Building",
    content:
      "Grow awareness on X, IG, and Discord with teaser content and waitlist campaigns.",
    isFinalItem: false,
  },
  {
    index: 4,
    title: "Tutor Onboarding",
    content:
      "Recruit and onboard experienced Web3 tutors for curated course creation.",
    isFinalItem: true,
  },
];

const postLaunchMileStones: MileStoneItemType[] = [
  {
    index: 1,
    title: "Public Launch",
    content:
      "Open the platform to everyone with selected instructor-led courses.",
    isFinalItem: false,
  },
  {
    index: 2,
    title: "On-Chain Certificates",
    content:
      "Deploy blockchain-based credential system to verify course completion.",
    isFinalItem: false,
  },
  {
    index: 3,
    title: "Scholarships",
    content:
      "Enable learners to apply for grants and subsidies through verified contracts.",
    isFinalItem: false,
  },
  {
    index: 4,
    title: "Pathways Expansion",
    content:
      "Introduce structured learning tracks in Solidity, DeFi, Web3 Marketing, and more.",
    isFinalItem: true,
  },
];

const Roadmap = () => {
  return (
    <section className="relative p-8 flex flex-col gap-12">
      {/* Watermark */}
      <div className="hidden md:flex lg:flex absolute inset-0 items-center justify-center pointer-events-none z-[1] pt-[40px] mt-[90px]">
        <Image src={NovusLogo} alt="Novus Logo Background Watermark" />
      </div>

      {/* Blur Effect Layer */}
      <div className="absolute top-0 right-0 w-[300px] h-[400px] bg-[#21FFD6] opacity-20 rounded-full blur-3xl pointer-events-none z-2"></div>

      {/* Content */}
      <motion.div
        className="flex flex-col justify-center gap-[48px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div
          className="flex flex-col justify-center items-center gap-6.5 text-center text-white"
          custom={1}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Our <span className="text-[#F342E8]">Roadmap</span>
          </h2>
          <h4 className="md:w-[55%] text-xl">
            The roadmap illustrates what we&apos;re working on. We are
            continuously updating it based on your
            <span className="text-[#F342E8]"> feedback</span>.
          </h4>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-around gap-12"
          custom={2}
          variants={fadeUp}
        >
          <RoadmapSection title="Pre-Launch" milestones={preLaunchMileStones} />
          <RoadmapSection
            title="Post-Launch"
            milestones={postLaunchMileStones}
          />
        </motion.div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className={`flex flex-col-reverse md:flex-row items-center justify-between gap-5 xl:gap-[5.5rem] max-w-7xl mx-auto px-4`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col gap-3 md:gap-5 text-center md:text-left"
          custom={3}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2rem] text-white">
            Why We Are <span className="text-[#F342E8]">Building</span> Novus
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#fff]/50 hover:text-white max-w-[700px]">
            Education shouldn’t be expensive, outdated, or out of reach. Novus
            is here to make Web3 learning practical, instructor-led, and
            globally accessible — for anyone ready to build the future.
          </p>
        </motion.div>
        <motion.div className="w-full md:w-[50%]" custom={4} variants={fadeUp}>
          <Image
            src={VisionImage}
            alt="Illustration of Novus vision for inclusive Web3 education"
            className="max-w-[20rem] md:max-w-full"
            layout="responsive"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Roadmap;
