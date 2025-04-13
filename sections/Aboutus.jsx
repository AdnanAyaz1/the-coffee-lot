"use client";
import AboutSection from "@/components/About/AboutSection";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <SectionComponent id={"about"}>
      <div className="relative flex md:flex-row flex-col gap-[85px] max-sm:px-[20px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AboutSection
            heading={"About Us"}
            image={images.spoon}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
            }
            cl3={'text-right'}
            buttontext={"Know More"}
          />
        </motion.div>

        {/* knife with rotation animation */}
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={images.knife}
            alt="knife"
            height={84}
            width={100}
            loading="lazy"
            className="z-[2] max-sm:mx-auto"
          />
        </motion.div>

        {/* G image with floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="top-1/2 left-1/2 z-[1] absolute transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src={images.G}
            alt="G"
            width={391}
            height={415}
            loading="lazy"
            priority={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AboutSection
            heading={"Our History"}
            cl1={"items-start"}
            image={images.spoonsvg}
            cl2={"mr-auto ml-0"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
            }
            cl3={"text-left"}
            buttontext={"Know More"}
          />
        </motion.div>
      </div>
    </SectionComponent>
  );
};

export default Aboutus;
