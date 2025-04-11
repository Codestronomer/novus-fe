import React from 'react';
import Image from 'next/image';
import { MileStoneItemType } from '@/types';
import RoadmapSection from '../ui/roadmapSection';
import NovusLogo from '@/public/Landing/novus.svg';

const preLaunchMileStones: MileStoneItemType[] = [
  {
    index: 1,
    title: 'MVP Development',
    content: 'Core platform build with instructor dashboard, wallet payments, and student onboarding.',
    isFinalItem: false,
  },
  {
    index: 2,
    title: 'Beta Access',
    content: 'Invite-only access for early testers and tutors to validate core features.',
    isFinalItem: false,
  },
  {
    index: 3,
    title: 'Community Building', 
    content: 'Grow awareness on X, IG, and Discord with teaser content and waitlist campaigns.',
    isFinalItem: false,
  },
  {
    index: 4,
    title: 'Tutor Onboarding',
    content: 'Recruit and onboard experienced Web3 tutors for curated course creation.',
    isFinalItem: true,
  }
]

const postLaunchMileStones: MileStoneItemType[] = [
  {
    index: 1,
    title: 'Public Launch',
    content: 'Open the platform to everyone with selected instructor-led courses.',
    isFinalItem: false,
  },
  {
    index: 2,
    title: 'On-Chain Certificates',
    content: 'Deploy blockchain-based credential system to verify course completion.',
    isFinalItem: false,
  },
  {
    index: 3,
    title: 'Scholarships', 
    content: 'Enable learners to apply for grants and subsidies through verified contracts.',
    isFinalItem: false,
  },
  {
    index: 4,
    title: 'Pathways Expansion',
    content: 'Introduce structured learning tracks in Solidity, DeFi, Web3 Marketing, and more.',
    isFinalItem: true,
  }
]

const Roadmap = () => {
  return (
    <section className='relative bg-gradient-to-tr from-[#0E0B1D] to-[#322E99] p-8'>
      {/* Watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-[1] pt-[40px] mt-[90px]'>
        <Image src={NovusLogo} alt='Novus Logo' />
      </div>
      {/* Blur Effect Layer */}
      <div className='absolute top-0 right-0 w-[300px] h-[400px] bg-[#21FFD6] opacity-20 rounded-full blur-3xl pointer-events-none z-2'></div>
      {/* Content */}
      <div className='flex flex-col justify-center gap-[48px]'>
        <div className="flex flex-col justify-center items-center gap-6.5 text-center text-white">
          <h2 className="text-6xl">Our <span className='text-[#F342E8]'>Roadmap</span></h2>
          <h4 className="md:w-[55%] text-xl">The roadmap illustrates what we&apos;re working on. We are continously updating it based on your
          <span className='text-[#F342E8]'> feedback</span>.</h4>
        </div>
        <div className="flex flex-wrap justify-around">
          <RoadmapSection title="Pre-Launch" milestones={preLaunchMileStones} />
          <RoadmapSection title="Post-Launch" milestones={postLaunchMileStones} />
        </div>
      </div>
      </section>
  )
}

export default Roadmap;