import Image from "next/image";
import React from "react";

const LaurelsComponent = ({ title, subtitle, imgUrl, index }) => {
  return (
    <div
      className={`flex items-center gap-[32px]  max-w-[301px] h-[91px] mb-[64px]`}
    >
      <Image
        src={imgUrl}
        alt="achievements"
        width={500}
        height={500}
        className="w-[80px] h-[80px]"
      />
      <div className="flex flex-col gap-[8px]">
        <h3 className="m-0 font-base font-bold text-[23px] text-golden leading-[30px] tracking-[4%]">
          {title}
        </h3>
        <h3 className="m-0 font-alt text-[16px] text-grey leading-[30px] tracking-[4%]">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default LaurelsComponent;
