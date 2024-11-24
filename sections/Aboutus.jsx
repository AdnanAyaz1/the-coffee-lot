import AboutSection from "@/components/About/AboutSection";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const Aboutus = () => {
  return (
    <SectionComponent id={"about"}>
      <div className="relative flex md:flex-row flex-col gap-[85px] max-sm:px-[20px]">
        {/* left */}
        <AboutSection
          heading={"About Us"}
          image={images.spoon}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
          }
          cl3={'text-right'}
          buttontext={"Know More"}
        />

        {/* knife */}
        <Image
          src={images.knife}
          alt="knife"
          height={84}
          width={100}
          className="z-[2] max-sm:mx-auto"
        />

        {/* G image */}
        <Image
          src={images.G}
          alt="G"
          width={391}
          height={415}
          className="top-1/2 left-1/2 z-[1] absolute transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* right */}
        <AboutSection
          heading={"Our History"}
          cl1={"items-start"}
          image={images.spoonsvg}
          cl2={"mr-auto ml-0"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
          }
          cl3={"text-left"}
          buttontext={"Know More"}
        />
      </div>
    </SectionComponent>
  );
};

export default Aboutus;
