"use client";
import React from "react";
import MenuItems from "./MenuItems";
import { motion } from "framer-motion";

const MenuComponent = ({ heading, data }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-[48px] xl:w-[412px]"
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="font-base font-semibold text-[45px] text-center text-white leading-[58px] tracking-[4%]"
      >
        {heading}
      </motion.h1>
      <motion.div 
        className="flex flex-col gap-[40px]"
      >
        {data.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <MenuItems
              title={data.title}
              price={data.price}
              tags={data.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MenuComponent;
