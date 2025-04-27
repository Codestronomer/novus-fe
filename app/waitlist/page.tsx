'use client';

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'motion/react';
import { toast } from 'sonner';
import { useAccount, useConnect } from 'wagmi';
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
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const [isConnecting, setIsConnecting] = useState(false);

  // Email submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      toast.loading('Joining Waitlist...');
      const res = await axios.post('/api/waitlist', { email });

      toast.dismiss();
      toast.success(res.data.message || 'Successfully joined waitlist');
      setEmail(''); 
    } catch (error) {
      toast.dismiss();
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred while joining the waitlist');
      }
    }
  };

  // Handle wallet submission
  const handleWalletSubmit = useCallback(async () => {
    if (!address) return;

    try {
      toast.loading('Joining with wallet...');
      const res = await axios.post('/api/waitlist', { address });
      
      toast.dismiss();
      toast.success(res.data.message || 'Wallet registered successfully');
    } catch (error) {
      toast.dismiss();
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred while registering wallet');
      }
    }
  }, [address]);

  // Handle wallet connection
  const handleWalletConnect = async () => {
    setIsConnecting(true);
    try {
      // Find the MetaMask connector
      const connector = connectors.find(c => c.id === 'metaMask');
      
      if (connector) {
        await connect({ connector });
        toast.success('Wallet connected successfully!');
      } else {
        toast.error('MetaMask connector not found');
      }
    } catch {
      // Empty catch block with no parameter
      toast.error('Failed to connect wallet');
    }
    setIsConnecting(false);
  };

  useEffect(() => {
    if (isConnecting && isConnected && address) {
      handleWalletSubmit();
      setIsConnecting(false);
    }
  }, [isConnecting, isConnected, address, handleWalletSubmit]);

  return (
    <div className="relative w-screen max-w-screen overflow-x-hidden min-h-screen py-[40px] px-4 sm:px-8 lg:px-[110px] gradient-background">
      {/* Logo */}
      <Image src={Novus} alt="novus" />

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-8 h-[500px] w-[450px] blur-[80px] rounded-full bg-gradient-to-tr from-transparent to-[#21FFD6]  opacity-20 pointer-events-none z-3" />

      {/* Top Blur */}
      <div className="absolute top-0 right-8 h-[500px] w-[450px] blur-[80px] rounded-full bg-gradient-to-tr from-transparent to-[#FFFFFF]  opacity-30 pointer-events-none z-3" />

      {/* Abstract Art */}
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="w-[90%]"
      >
        <motion.div
          className="will-change-transform absolute left-0 bottom-0 lg:left-[350px] lg:bottom-[150px] z-0"
          variants={dotVariants}
        >
          <Image src={Abstract3d} alt="abstract" />
        </motion.div>
      </motion.div>

      {/* Main Text & Form */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center pt-[50px] gap-12 w-full">
        {/* Left Text */}
        <div className="flex-1 pt-[150px] text-left mb-10 lg:mb-0 z-10 max-w-[600px]">
          <h2 className="text-4xl md:text-5xl lg:text-[65px] text-white font-bold">
            MVP Coming{' '}
            <span className="bg-gradient-to-t from-[#F36E15] to-[#74DB89] bg-clip-text text-transparent">
              Soon!
            </span>
          </h2>
        </div>

        {/* Form Card */}
        <div className="flex-1 w-full max-w-[550px] px-6 sm:px-6 md:px-8 lg:px-[60px] py-[100px] bg-white/30 backdrop-blur-md rounded-lg flex flex-col gap-[70px] z-10">
          <div className="text-center">
            <h2 className="text-white text-[30px] font-bold w-full">
              Join Our <span className="text-[#F342E8]">Waitlist</span>
            </h2>
            <p className="text-[#CED0E4] text-sm">
              Stay updated and Join the Movement
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full justify-center items-center"
          >
            <label htmlFor="email" className="text-[#CED0E4] self-start">
              Email address
            </label>
            <input
              required
              id="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="h-[45px] w-full outline-none bg-white placeholder-[#9F9F9F]/80 rounded-lg px-4"
            />
            <Button
              className="w-full h-[45px] rounded-xl bg-[#534CFF]"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </form>

          <div className="flex flex-col gap-4">
            <Button
              className="w-full h-[45px] rounded-xl flex justify-center items-center gap-2"
              variant="secondary"
              size="lg"
              onClick={isConnected ? handleWalletSubmit : handleWalletConnect}
            >
              <Image src={MetaMask} alt="metamask" />
              {isConnected ? 'Submit Wallet' : 'Join with Metamask'}
            </Button>
            <Button
              className="w-full h-[45px] rounded-xl flex justify-center items-center"
              variant="secondary"
              size="lg"
              onClick={isConnected ? handleWalletSubmit : handleWalletConnect}
            >
              <Image src={OpenCampus} alt="open campus" />
              Join with OCID
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;