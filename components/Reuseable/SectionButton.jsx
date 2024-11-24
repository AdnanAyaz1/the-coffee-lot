import React from 'react'
import { twMerge } from 'tailwind-merge'

const SectionButton = ({text,cl1}) => {
  return (
    <button className={twMerge('bg-golden hover:opacity-75 px-[32px] py-[8px] font-base font-bold text-[16px] leading-[28px] tracking-[4%] cursor-pointer',cl1)}>
    {text}
   </button>
  )
}

export default SectionButton