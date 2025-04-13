"use client";
import SectionButton from "@/components/Reuseable/SectionButton";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <SectionComponent id={"contact"}>
      <div className="flex xl:flex-row flex-col px-[20px]">
        {/* left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center gap-[64px] xl:w-1/2"
        >
          <SectionStarterText text={"Contact"} heading={"Find Us"} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]"
            >
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col gap-[16px] mt-[32px]"
            >
              <motion.h2 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                className="font-base font-bold text-[23px] text-golden leading-[30px] tracking-[4%]"
              >
                Opening Hours
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="font-alt font-semibold text-[16px] text-grey leading-[30px] tracking-[4%]"
              >
                Mon - Fri: 10:00 am - 02:00 am
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="font-alt font-semibold text-[16px] text-grey leading-[30px] tracking-[4%]"
              >
                Sat - Sun: 10:00 am - 03:00 am
              </motion.h2>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SectionButton text={"View More"} cl1={"w-fit"} />
          </motion.div>
        </motion.div>
        {/* right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
          className="xl:w-1/2"
        >
          <Image
            src={images.findus}
            alt="contact-image"
            width={667}
            height={736}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, 667px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDARAVFhkYGR8ZGR8eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="w-[667px] h-[736px] object-contain transition-transform duration-300"
          />
        </motion.div>
      </div>
    </SectionComponent>
  );
};

export default Contact;
