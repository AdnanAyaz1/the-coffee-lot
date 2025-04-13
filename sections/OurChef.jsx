"use client";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurChef = () => {
  return (
    <SectionComponent id={"chef"}>
      <div className="flex flex-col px-[10px] xl:flex-row gap-[96px] ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={images.chef}
            alt="chef"
            width={634}
            height={790}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, 634px"
            className="w-[634px] h-[790px] max-sm:h-[600px] object-contain"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-[64px] my-auto h-max max-sm:px-[10px]"
        >
          <SectionStarterText
            text={"Chef's Word"}
            heading={"What We Believe In"}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-end gap-[10px]">
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.quote}
                  alt="quote"
                  height={40}
                  width={47}
                  loading="lazy"
                  className="w-[47px] h-[40px]"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-base text-[16px] text-grey italic leading-[28px] tracking-[4%]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit.
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-base text-[16px] text-grey italic leading-[28px] tracking-[4%]"
            >
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-[8px]"
          >
            <h1 className="font-alt text-[32px] text-golden leading-[41px] tracking-[4%]">
              Kevin Lou
            </h1>
            <h2 className="font-base text-[16px] text-grey leading-[28px] tracking-[4%]">
              Chef and Founder
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={images.sign}
              alt="signature"
              height={200}
              width={200}
              loading="lazy"
              quality={85}
              className="transition-opacity duration-300 hover:opacity-90"
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionComponent>
  );
};

export default OurChef;
