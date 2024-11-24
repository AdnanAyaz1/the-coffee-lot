import SectionButton from "@/components/Reuseable/SectionButton";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import React from "react";

const NewsLetter = () => {
  return (
    <SectionComponent id={"sub"}>
      <div className="">
        <SectionStarterText
          text={"NewsLetter"}
          heading={"Subscribe To Our Newsletter"}
          cl2={"items-center justify-center"}
          cl1={"max-sm:text-center"}
        />
        <p className="mt-[24px] font-alt text-[16px] text-center text-white leading-[28px] tracking-[4%]">
          And never miss latest Updates!
        </p>
        <div className="flex xl:flex-row flex-col justify-between items-center gap-[32px] mx-auto mt-[64px] max-w-[796px] xl:h-[60px]">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border-2 border-golden bg-transparent px-[19px] max-lg:w-[80%] h-full min-h-[60px] placeholder:font-base text-[16px] text-golden outline-none"
          />
          <SectionButton text={"Subscribe"} cl1={"max-lg:w-[80%]"} />
        </div>
      </div>
    </SectionComponent>
  );
};

export default NewsLetter;
