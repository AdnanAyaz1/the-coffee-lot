"use client";

import React, { useRef, useState } from "react";
import { FaRegCirclePause } from "react-icons/fa6";
import { RxResume } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const ResVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((pre) => !pre);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src="/meal.mp4"
        className="w-full"
        muted
        playsInline
        loop
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.5 }}
        className="z-[1] absolute inset-0 bg-black"
      />

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="z-[2] absolute inset-0 flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="pause"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaRegCirclePause
                className="z-[3] w-[100px] max-sm:w-[70px] h-[80px] max-sm:h-[50px] text-golden cursor-pointer"
                onClick={handlePlayPause}
              />
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <RxResume
                className="z-[3] w-[100px] max-sm:w-[70px] h-[80px] max-sm:h-[50px] text-golden cursor-pointer"
                onClick={handlePlayPause}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ResVideo;
