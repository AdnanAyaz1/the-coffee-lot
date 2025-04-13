"use client";
import Image from "next/image";
import React from "react";
import SectionButton from "../Reuseable/SectionButton";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const AboutSection = ({ cl1, cl2, cl3, heading, text, buttontext, image }) => {
  return (
    <motion.div
      className={twMerge(
        "z-[2] flex flex-col justify-center items-end gap-[32px]",
        cl1
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-sm:mx-auto"
      >
        <motion.h1
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="font-base font-semibold text-[64px] text-golden max-sm:text-[50px] max-md:text-[40px] leading-[84px] tracking-[3%]"
        >
          {heading}
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ rotate: [0, -10, 0] }}
        >
          <Image
            src={image}
            alt="spoon"
            width={40}
            height={10}
            className={twMerge(`max-sm:mx-auto ml-auto w-[40px] h-[10px]`, cl2)}
          />
        </motion.div>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className={twMerge("font-alt text-[16px] text-grey max-sm:text-center max-sm:text-[16px] max-md:text-[12px] leading-[28px] tracking-[4%]",cl3)}
      >
        {text}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <SectionButton text={buttontext} cl1={"max-sm:mx-auto"} />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
