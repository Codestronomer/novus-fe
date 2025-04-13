"use client"
import React from 'react'
import { Button } from '../ui/button';

const Contact = () => {
  // const [email, setEmail] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Email: ', email);
  // }

  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-[url(@/public/landing/purple.jpg)] bg-no-repeat bg-cover p-[28px] pt-[45px]">
      <h2 className="text-5xl text-center mt-[30px] mb-[10px] text-white font-medium tracking-tighter">Are you <span className="text-[#F342E8]">thrilled?</span></h2>
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[500px] items-center justify-center">
        <label htmlFor="email" className="sr-only">Email address</label>
        <div className='p-[2px] bg-gradient-to-r from-[#4F4AC4] to-[#0C958D] rounded-xl w-full'>
          <input
            required
            id="email"
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            className="h-[70px] w-full text-white gradient-background outline-none placeholder-white/80 rounded-xl px-4"
          />
        </div> */}
      {/* </form> */}
      <Button className="bg-[#534CFF] w-[160px] mb-[30px]" size='lg' type="submit">Join Waitlist</Button>
    </section>
  )
}

export default Contact