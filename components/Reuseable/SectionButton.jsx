"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const SectionButton = ({text, cl1}) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={twMerge('bg-golden hover:opacity-75 px-[32px] py-[8px] font-base font-bold text-[16px] leading-[28px] tracking-[4%] cursor-pointer', cl1)}
    >
      {text}
    </motion.button>
  );
};

export default SectionButton;