"use client";

import React, { useRef, useState } from "react";
import { FaRegCirclePause } from "react-icons/fa6";
import { RxResume } from "react-icons/rx";

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
    <div className="relative">
      {/* Video element */}
      <video
        ref={videoRef}
        src="/meal.mp4" // Path to your video
        className="w-full"
        muted
        playsInline
        loop
      />

      <div className="z-[1] absolute inset-0 bg-black opacity-60"></div>

      <div className="z-[2] absolute inset-0 flex justify-center items-center">
        {isPlaying ? (
          <FaRegCirclePause
            className="z-[3] w-[100px] max-sm:w-[70px] h-[80px] max-sm:h-[50px] text-golden cursor-pointer"
            onClick={handlePlayPause}
          />
        ) : (
          <RxResume
            className="z-[3] w-[100px] max-sm:w-[70px] h-[80px] max-sm:h-[50px] text-golden cursor-pointer"
            onClick={handlePlayPause}
          />
        )}
      </div>
    </div>
  );
};

export default ResVideo;
