import React from 'react'
import Image from 'next/image';
import { MileStoneItemType } from '@/types';
import Line from '@/public/Landing/Line 16.svg';

const Milestone = ({ index, title, content, isFinalItem }: MileStoneItemType) => {
  return (
    <div className="flex flex-row gap-3 lg:gap-5 pb-0 lg:pb-3 text-white">
      <div className="flex flex-col gap-0 md:gap-3 lg:gap-5">
        <div className="bg-gradient-to-b from-[#3737CE] to-[#2379BC] rounded-full w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">{ index }</span>
        </div>
        {!isFinalItem && (
          <div className="flex items-center justify-center">
            <Image src={Line} alt='running-line' className='h-2/3 md:h-full lg:h-full' />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold">{ title }</h2>
        <p className="max-w-sm ext-base md:text-lg lg:text-[20px] leading-relaxed md:leading-[30px] lg:leading-[34px] font-normal">{ content }</p>
      </div>
    </div>
  )
}

export default Milestone