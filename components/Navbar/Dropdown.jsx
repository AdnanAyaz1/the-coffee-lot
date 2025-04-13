"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoReorderThreeSharp, IoRestaurant } from "react-icons/io5";
import NavLinks from "./NavLinks";
import RegistrationLinks from "./RegistrationLinks";

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20
  },
  open: {
    opacity: 1,
    y: 0
  }
};

const Dropdown = ({ showDropDown, setShowDropDown }) => {
  return (
    <div className="lg:hidden">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <IoReorderThreeSharp
          color="white"
          className="w-[35px] h-[30px] hover:cursor-pointer"
          onClick={() => setShowDropDown((pre) => !pre)}
        />
      </motion.div>
      
      <AnimatePresence>
        {showDropDown && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-4"
            >
              <IoRestaurant
                className="h-[30px] w-[35px] text-golden cursor-pointer"
                onClick={() => setShowDropDown((pre) => !pre)}
              />
            </motion.div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center h-screen gap-12">
              <motion.div variants={linkVariants}>
                <NavLinks
                  cl1={"flex flex-col gap-[32px] "}
                  cl2={
                    "text-golden font-base leading-[32px] tracking-[4%] text-[28px] cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-300 z-50"
                  }
                  setShowDropDown={setShowDropDown}
                />
              </motion.div>
              
              {/* Registration */}
              <motion.div variants={linkVariants}>
                <RegistrationLinks
                  cl1={
                    "text-golden md:hidden font-base font-semibold text-[22px] leading-[28px] tracking-[5%] hover:border-b-[2px] hover:cursor-pointer pb-1 hover:scale-110 transition-all duration-300"
                  }
                  cl2={"max-sm:inline-flex md:hidden"}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
