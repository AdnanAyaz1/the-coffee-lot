"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionComponent = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mx-auto py-[128px] max-w-[1300px] overflow-hidden"
    >
      {children}
    </motion.section>
  );
};

export default SectionComponent;
