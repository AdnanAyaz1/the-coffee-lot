"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const RegistrationLinks = ({ cl1, cl2 }) => {
  return (
    <div
      className={twMerge(
        "py-[14.5px] flex items-center h-[57px] max-sm:hidden",
        cl2
      )}
    >
      <motion.div
        whileHover={{ y: -2 }}
        className={twMerge(
          "text-white font-alt font-semibold text-[16px] leading-[28px] tracking-[5%] hover:text-golden transition-colors duration-300 cursor-pointer pb-1 relative group",
          cl1
        )}
      >
        <span>Log In / Registration</span>
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-[1px] bg-golden"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="w-[2px] h-full mx-[15px] bg-slate-100/35"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        whileHover={{ y: -2 }}
        className={twMerge(
          "text-white font-alt font-semibold text-[16px] leading-[28px] tracking-[5%] hover:text-golden transition-colors duration-300 cursor-pointer pb-1 relative group",
          cl1
        )}
      >
        <span>Book Table</span>
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-[1px] bg-golden"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default RegistrationLinks;
