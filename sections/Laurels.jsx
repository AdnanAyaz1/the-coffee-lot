import LaurelsComponent from "@/components/Laurels/LaurelsComponent";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { data, images } from "@/constants";
import Image from "next/image";
import React from "react";

const Laurels = () => {
  return (
    <SectionComponent id="laurels">
      <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-[111px] max-md:px-[20px]">
        {/* left */}
        <div className="xl:w-[634px]">
          <SectionStarterText
            text={"Awards and Recognition"}
            heading={"Our Laurels"}
            cl1={"max-lg:items-center "}
            cl2={"max-lg:items-center"}
          />
          <div>
            <div className="flex flex-row flex-wrap max-lg:justify-center items-center gap-[30px] mt-[64px]">
              {data.awards.map((data, index) => (
                <LaurelsComponent
                  key={index}
                  title={data.title}
                  subtitle={data.subtitle}
                  imgUrl={data.imgUrl}
                />
              ))}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="max-sm:flex border xl:w-[555px] self-start">
          <Image
            src={images.laurels}
            alt="laurels img"
            width={800}
            height={800}
            className="max-sm:mx-auto max-sm:w-full xl:w-[555px] max-sm:h-[600px] xl:h-[691px] object-contain"
          />
        </div>
      </div>
    </SectionComponent>
  );
};

export default Laurels;
