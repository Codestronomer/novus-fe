import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';
import PurpleBg from '@/public/Landing/purple.jpg';

const Contact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${PurpleBg.src})`}}
      className="flex flex-col justify-center items-center gap-4 bg-no-repeat bg-cover p-[28px] pt-[45px]"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mt-[30px] mb-[10px] text-white font-medium tracking-tighter">Are you <span className="text-[#F342E8]">thrilled?</span></h2>
      <Link href='/waitlist'>
        <Button className="bg-[#534CFF] w-[160px] mb-[30px]" size='lg' type="submit">Join Waitlist</Button>
      </Link>
    </section>
  )
}

export default Contact