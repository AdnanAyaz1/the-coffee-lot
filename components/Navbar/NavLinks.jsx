"use client";
import React from "react";
import { Links } from "@/constants/data";
import { motion } from "framer-motion";
import { scrollToSection } from "@/constants";

const NavLinks = ({ cl1, cl2, setShowDropDown = () => {} }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    setShowDropDown(false);
    scrollToSection(id);
  };

  return (
    <ul className={cl1}>
      {Links.map((link, index) => (
        <motion.li 
          key={index} 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ y: -3 }}
          className={cl2}
        >
          <motion.a 
            href={link.id}
            className="relative"
            onClick={(e) => handleClick(e, link.id)}
          >
            {link.link}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-golden"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;
