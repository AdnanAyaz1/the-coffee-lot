"use client";
import SectionButton from "@/components/Reuseable/SectionButton";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { motion } from "framer-motion";
import React from "react";

const NewsLetter = () => {
  return (
    <SectionComponent id={"sub"}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <SectionStarterText
          text={"NewsLetter"}
          heading={"Subscribe To Our Newsletter"}
          cl2={"items-center justify-center"}
          cl1={"max-sm:text-center"}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-[24px] font-alt text-[16px] text-center text-white leading-[28px] tracking-[4%]"
        >
          And never miss latest Updates!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex xl:flex-row flex-col justify-between items-center gap-[32px] mx-auto mt-[64px] max-w-[796px] xl:h-[60px]"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            type="email"
            placeholder="Email Address"
            className="flex-1 border-2 border-golden bg-transparent px-[19px] max-lg:w-[80%] h-full min-h-[60px] placeholder:font-base text-[16px] text-golden outline-none focus:border-opacity-80 transition-all duration-300"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SectionButton text={"Subscribe"} cl1={"max-lg:w-[80%]"} />
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionComponent>
  );
};

export default NewsLetter;
