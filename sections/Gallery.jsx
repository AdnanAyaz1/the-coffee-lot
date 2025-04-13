"use client";
import SectionButton from "@/components/Reuseable/SectionButton";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { galleryImages } from "@/constants/images";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="gallery"
      className="relative flex xl:flex-row flex-col gap-[64px] px-[20px]"
    >
      {/* Left Section */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-[24px] my-auto xl:ml-[50px] xl:w-1/3"
      >
        <SectionStarterText text={"Instagram"} heading={"Photo Gallery"} />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-alt text-[16px] text-grey leading-[30px] tracking-[4%]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionButton text={"View More"} />
        </motion.div>
      </motion.div>

      {/* Right Section (Gallery) */}
      <div className="relative flex items-center xl:w-2/3">
        <div
          ref={galleryRef}
          className="flex gap-[32px] overflow-x-scroll scroll-hide"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative cursor-pointer group"
            >
              <Image
                src={img}
                alt={`gallery image ${i + 1}`}
                width={301}
                height={447}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDARAVFhkYGR8ZGR8eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                className="min-w-[301px] h-[447px] object-cover transition-all duration-300 group-hover:scale-105"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex justify-center items-center bg-slate-900/50"
              >
                <FaInstagram size={30} className="text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollLeft}
          className="left-[20px] z-10 absolute bg-slate-950/50 hover:bg-slate-950/70 p-3 rounded-full text-white"
        >
          <FaArrowLeft size={20} className="opacity-100" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollRight}
          className="right-[20px] z-10 absolute bg-slate-950/50 hover:bg-slate-950/70 p-3 rounded-full text-white"
        >
          <FaArrowRight size={20} className="opacity-100" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Gallery;
