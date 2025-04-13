"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LaurelsComponent = ({ title, subtitle, imgUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex items-center gap-[32px] max-w-[301px] h-[91px] mb-[64px]"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={imgUrl}
          alt="achievements"
          width={500}
          height={500}
          className="w-[80px] h-[80px]"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index * 0.2) + 0.2 }}
        className="flex flex-col gap-[8px]"
      >
        <h3 className="m-0 font-base font-bold text-[23px] text-golden leading-[30px] tracking-[4%]">
          {title}
        </h3>
        <h3 className="m-0 font-alt text-[16px] text-grey leading-[30px] tracking-[4%]">
          {subtitle}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default LaurelsComponent;
