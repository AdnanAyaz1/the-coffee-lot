"use client";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <SectionComponent>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap justify-between xl:items-center max-sm:gap-[50px] px-[20px]"
      >
        {/* 1st */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-[24px] max-md:order-2"
        >
          <motion.h1
            whileHover={{ x: 10 }}
            className="font-base text-[32px] text-crimson leading-[42px] tracking-[4%]"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]"
          >
            9 W 53rd St, New York, NY 10019, USA
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              +1 212-344-1230
            </p>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              +1 212-555-1230
            </p>
          </motion.div>
        </motion.div>
        
        {/* 2nd */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-[32px] max-md:order-1 xl:mr-[230px] xl:ml-[125px]"
        >
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="font-base text-[64px] text-center text-golden leading-[84px] tracking-[4%]"
          >
            Gerícht
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-[16px] max-w-[438px]"
          >
            <p className="font-alt text-[16px] text-center text-white leading-[28px] tracking-[4%]">
              "The best way to find yourself is to lose yourself in the service
              of others."
            </p>
            <Image
              src={images.spoon}
              alt="spoon"
              width={40}
              height={40}
              className="w-[40px] h-[10px]"
            />
            <motion.div className="flex gap-[20px]">
              <motion.div
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebook className="text-white cursor-pointer size-[24px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram className="text-white cursor-pointer size-[24px]" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                transition={{ duration: 0.2 }}
              >
                <FaTwitter className="text-white cursor-pointer size-[24px]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* 3rd */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-[24px] max-md:order-3"
        >
          <motion.h1
            whileHover={{ x: -10 }}
            className="font-base text-[32px] text-crimson leading-[42px] tracking-[4%]"
          >
            Working Time
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              Monday-Friday:
            </p>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              08:00 am -12:00 am
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              Saturday-Sunday:
            </p>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              07:00am -11:00 pm
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-[80px] font-alt text-[16px] text-center text-grey leading-[28px] tracking-[4%]"
      >
        2021 Gerícht. All Rights reserved.
      </motion.div>
    </SectionComponent>
  );
};

export default Footer;
