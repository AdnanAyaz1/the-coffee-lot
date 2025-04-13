"use client";
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const Heading = ({heading, src, cl1}) => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className='font-bold font-base text-[23px] leading-[30px] tracking-[4%] text-white'
      >
        {heading}
      </motion.h2>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ rotate: [0, -10, 0] }}
      >
        <Image 
          src={src} 
          alt='spoon' 
          width={20} 
          height={20} 
          className={twMerge('mt-[8px] w-[40px] h-[9px] mr-auto',cl1)}
        />
      </motion.div>
    </div>
  );
};

export default Heading;