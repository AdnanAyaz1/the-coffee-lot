"use client";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const SectionStarterText = ({ text, heading, cl1, cl2, cl3, cl4 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={twMerge("flex flex-col gap-[8px]", cl1)}
    >
      <motion.div 
        className={twMerge("flex flex-col gap-[8px]", cl2)}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white font-base text-[23px] font-bold leading-[30px] tracking-[4%] flex flex-col gap-[8px]"
        >
          {text}
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ rotate: [0, -10, 0] }}
        >
          <Image
            src={images.spoon}
            alt="spoon"
            width={40}
            height={9}
            className={twMerge("", cl3)}
          />
        </motion.div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className={twMerge('font-base font-semibold text-[64px] leading-[84px] tracking-[4%] text-golden',cl4)}
      >
        {heading}
      </motion.h1>
    </motion.div>
  );
};

export default SectionStarterText;
