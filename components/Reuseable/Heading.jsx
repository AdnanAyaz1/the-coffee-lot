import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = ({heading,src,cl1}) => {
  return (
    <div>
    <h2 className='font-bold font-base text-[23px] leading-[30px] tracking-[4%] text-white'>{heading}</h2>
    <Image src={src} alt='spoon' width={20} height={20} className={twMerge('mt-[8px] w-[40px] h-[9px] mr-auto',cl1)}/>
    </div>
  )
}

export default Heading