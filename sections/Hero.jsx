import React from "react";
import { images } from "@/constants";
import Image from "next/image";
import Heading from "@/components/Reuseable/Heading";
import SectionButton from "@/components/Reuseable/SectionButton";
import SectionComponent from "@/components/Reuseable/SectionComponent";

const Hero = () => {
  return (
    <SectionComponent id={"home"}>
      <div className="flex lg:flex-row flex-col max-lg:gap-[80px] xl:gap-[180px] px-[20px]">
        {/* left */}
        <div className="flex flex-col justify-center items-start lg:w-1/2">
          <Heading heading={"Chase The New Flavour"} src={images.spoon} />
          <h1 className="font-base font-bold text-[90px] text-balance text-golden leading-[117px] tracking-[4%]">
            The Key To Fine Dinning
          </h1>
          <p className="my-[32px] font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <SectionButton text={"Explore Menu"} />
        </div>
        {/* right */}
        <div className="lg:w-1/2">
          <Image
            src={images.welcome}
            alt="welcome image"
            width={800}
            height={800}
            className="max-sm:mx-auto xl:w-[667px] max-sm:max-w-[340px] xl:h-[736px]"
          />
        </div>
      </div>
    </SectionComponent>
  );
};

export default Hero;
