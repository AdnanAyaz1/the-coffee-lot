import Image from "next/image";
import React from "react";
import SectionButton from "../Reuseable/SectionButton";
import { twMerge } from "tailwind-merge";

const AboutSection = ({ cl1, cl2,cl3, heading, text, buttontext, image }) => {
  return (
    <div
      className={twMerge(
        "z-[2] flex flex-col justify-center items-end gap-[32px]",
        cl1
      )}
    >
      <div className="max-sm:mx-auto">
        <h1 className="font-base font-semibold text-[64px] text-golden max-sm:text-[50px] max-md:text-[40px] leading-[84px] tracking-[3%]">
          {heading}
        </h1>
        <Image
          src={image}
          alt="spoon"
          width={40}
          height={10}
          className={twMerge(`max-sm:mx-auto ml-auto w-[40px] h-[10px]`, cl2)}
        />
      </div>
      <p className={twMerge("font-alt text-[16px] text-grey max-sm:text-center max-sm:text-[16px] max-md:text-[12px] leading-[28px] tracking-[4%]",cl3)}>
        {text}
      </p>
      <SectionButton text={buttontext} cl1={"max-sm:mx-auto"} />
    </div>
  );
};

export default AboutSection;
