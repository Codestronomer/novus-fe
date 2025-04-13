"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import NovusAcademy from "@/public/Landing/novusacademy.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-between items-center h-fit relative">
      <Image src={NovusAcademy} alt="Novus Academy Logo" />

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex text-[0.9375rem] leading-[1.125rem] gap-10">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Features</li>
        <li className="cursor-pointer hover:text-gray-300">Why us</li>
        <li className="cursor-pointer hover:text-gray-300">Roadmap</li>
      </ul>

      {/* Desktop Button */}
      <Button className="hidden lg:block bg-white text-black text-sm" size="lg">
        Join Waitlist
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 mt-2 bg-[#0E0B1D] rounded-md shadow-lg z-50 py-4 lg:hidden">
          <ul className="flex flex-col space-y-4 px-6">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Features</li>
            <li className="cursor-pointer hover:text-gray-300">Why us</li>
            <li className="cursor-pointer hover:text-gray-300">Roadmap</li>
            <li className="pt-2">
              <Button className="w-full bg-white text-black text-sm" size="lg">
                Join Waitlist
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import NovusAcademy from "@/public/Landing/novusacademy.svg";

// const Navbar = () => {
//   return (
//     <nav className="w-full flex justify-between items-center h-fit">
//       <Image src={NovusAcademy} alt="" />
//       <ul className="text-[0.9375rem] leading-[1.125rem] flex gap-2 md:gap-5 lg:gap-10">
//         <li>Home</li>
//         <li>Features</li>
//         <li>Why us</li>
//         <li>Roadmap</li>
//       </ul>
//       <Button className="bg-white text-black text-sm" size="lg">
//         Join Waitlist
//       </Button>
//     </nav>
//   );
// };

// export default Navbar;
