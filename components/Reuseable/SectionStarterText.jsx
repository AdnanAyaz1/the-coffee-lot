import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionStarterText = ({ text, heading, cl1, cl2, cl3,cl4 }) => {
  return (
    <div className={twMerge("flex flex-col gap-[8px]", cl1)}>
      <div className={twMerge("flex flex-col gap-[8px]", cl2)}>
        <p className="text-white font-base text-[23px] font-bold leading-[30px] tracking-[4%] flex flex-col gap-[8px]">
          {text}
        </p>
        <Image
          src={images.spoon}
          alt="spoon"
          width={40}
          height={9}
          className={twMerge("", cl3)}
        />
      </div>
      <h1 className={twMerge('font-base font-semibold text-[64px] leading-[84px] tracking-[4%] text-golden',cl4)}>
        {heading}
      </h1>
    </div>
  );
};

export default SectionStarterText;
