"use client";
import React, { useState } from "react";
import { images } from "@/constants";
import Image from "next/image";
import NavLinks from "@/components/Navbar/NavLinks";
import Dropdown from "@/components/Navbar/Dropdown";
import RegistrationLinks from "@/components/Navbar/RegistrationLinks";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { scrollY } = useScroll();

  // Create smooth background opacity based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.95)"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="top-0 z-10 sticky flex justify-between items-center px-[20px] lg:px-[120px] py-[32px] backdrop-blur-sm"
    >
      {/* logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={images?.gericht}
          alt="logo"
          width={200}
          height={200}
          className="w-[150px] xl:w-[199px] xl:h-[57px]"
        />
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <NavLinks
          cl1={"flex gap-[32px] max-lg:hidden"}
          cl2={
            "text-white font-alt leading-[28px] tracking-[4%] text-[16px] cursor-pointer hover:text-golden transition-colors duration-300"
          }
        />
      </motion.div>

      {/* Desktop Registration */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <RegistrationLinks />
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Dropdown showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
