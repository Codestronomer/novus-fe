"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email: ', email);
  }

  return (
    <section className="flex flex-col justify-center items-center gap-4 gradient-background p-[28px]">
      <h2 className="text-5xl text-center my-2 text-white font-medium tracking-tighter">Join the <span className="text-[#F342E8]">Waitlist</span></h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[500px] items-center justify-center">
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
        </div>
        <Button className="bg-[#534CFF] w-[150px]" size='lg' type="submit">Submit</Button>
      </form>
    </section>
  )
}

export default Contact