"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import NovusAcademy from "@/public/Landing/novusacademy.svg"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed bg-inherit w-full z-20 py-3 md:py-4 lg:py-5 2xl:py-6 top-0 right-0 left-0 backdrop-blur-3xl text-white/90">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-inherit"
      >
        <div className="w-full flex justify-between items-center h-fit relative px-4 md:px-12 lg:px-[5.3125rem]">
          <Image src={NovusAcademy || "/placeholder.svg"} alt="Novus Academy Logo" />

        
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

       
          <ul className="hidden lg:flex text-[0.9375rem] leading-[1.125rem] gap-10">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Features</li>
            <li className="cursor-pointer hover:text-gray-300">Why us</li>
            <li className="cursor-pointer hover:text-gray-300">Roadmap</li>
          </ul>

         
          <Link href="/waitlist" className="hidden lg:block">
            <Button className="hidden lg:block bg-white text-black text-sm" size="lg">
              Join Waitlist
            </Button>
          </Link>

        
          {isMenuOpen && (
            <div className="absolute top-full right-0 left-0 mt-2 bg-white/20 backdrop-blur-3xl rounded-md shadow-lg z-50 py-4 lg:hidden">
              <ul className="flex flex-col space-y-4 px-6">
                <li className="cursor-pointer hover:text-gray-300">Home</li>
                <li className="cursor-pointer hover:text-gray-300">Features</li>
                <li className="cursor-pointer hover:text-gray-300">Why us</li>
                <li className="cursor-pointer hover:text-gray-300">Roadmap</li>
                <li className="pt-2">
                  <Link href="/waitlist">
                    <Button className="w-full bg-white text-black text-sm" size="lg">
                      Join Waitlist
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
