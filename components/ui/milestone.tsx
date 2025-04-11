import React from 'react'
import Image from 'next/image';
import { MileStoneItemType } from '@/types';
import Line from '@/public/Landing/Line 16.svg';

const Milestone = ({ index, title, content, isFinalItem }: MileStoneItemType) => {
  return (
    <div className="flex flex-row gap-5 pb-3 text-white">
      <div className="flex flex-col gap-5">
        <div className="bg-gradient-to-b from-[#3737CE] to-[#2379BC] rounded-full w-[60px] h-[60px] flex items-center justify-center">
          <span className="text-4xl font-bold text-center">{ index }</span>
        </div>
        {!isFinalItem && (
          <div className="flex items-center justify-center">
            <Image src={Line} alt='running-line' />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className="text-3xl font-bold">{ title }</h2>
        <p className="max-w-sm text-[20px] leading-[34px] font-normal">{ content }</p>
      </div>
    </div>
  )
}

export default Milestone