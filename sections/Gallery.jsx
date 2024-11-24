"use client";
import SectionButton from "@/components/Reuseable/SectionButton";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { galleryImages } from "@/constants/images";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaInstagram } from "react-icons/fa"; // Import icons

const Gallery = () => {
  const galleryRef = useRef(null); // Ref for the gallery

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      id="gallery"
      className="relative flex xl:flex-row flex-col gap-[64px] px-[20px]"
    >
      {/* Left Section */}
      <div className="space-y-[24px] my-auto xl:ml-[50px] xl:w-1/3">
        <SectionStarterText text={"Instagram"} heading={"Photo Gallery"} />
        <div className="font-alt text-[16px] text-grey leading-[30px] tracking-[4%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </div>
        <SectionButton text={"View More"} />
      </div>

      {/* Right Section (Gallery) */}
      <div className="relative flex items-center xl:w-2/3">
        {/* Scrollable Gallery */}
        <div
          ref={galleryRef}
          className="flex gap-[32px] overflow-x-scroll scroll-hide"
        >
          {galleryImages.map((img, i) => (
            <div key={i} className="relative cursor-pointer group">
              <Image
                src={img}
                alt="gallery img"
                width={500}
                height={500}
                className="min-w-[301px] h-[447px] object-cover"
              />
              <div className="group-hover:flex absolute inset-0 justify-center items-center hidden bg-slate-900/50">
                <FaInstagram size={30} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="left-[20px] z-10 absolute bg-slate-950/50 hover:bg-slate-950/70 p-3 rounded-full text-white"
        >
          <FaArrowLeft size={20} className="opacity-100" />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="right-[20px] z-10 absolute bg-slate-950/50 hover:bg-slate-950/70 p-3 rounded-full text-white"
        >
          <FaArrowRight size={20} className="opacity-100" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
