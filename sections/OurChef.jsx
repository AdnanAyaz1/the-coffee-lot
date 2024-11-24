import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const OurChef = () => {
  return (
    <SectionComponent id={"chef"}>
      <div className="flex flex-col px-[10px] xl:flex-row gap-[96px] ">
        <Image
          src={images.chef}
          alt="chef"
          width={634}
          height={200}
          className="w-[634px] h-[790px] max-sm:h-[600px] object-contain"
        />
        <div className="flex flex-col gap-[64px] my-auto h-max max-sm:px-[10px]">
          <SectionStarterText
            text={"Chef’s Word"}
            heading={"What We Believe In"}
          />
          <div>
            <div className="flex items-end gap-[10px] ">
              <Image
                src={images.quote}
                alt="colons"
                height={40}
                width={47}
                className="w-[47px] h-[40px]"
              />
              <p className="font-base text-[16px] text-grey italic leading-[28px] tracking-[4%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </p>
            </div>
            <p className="font-base text-[16px] text-grey italic leading-[28px] tracking-[4%]">
              {" "}
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-alt text-[32px] text-golden leading-[41px] tracking-[4%]">
              Kevin Lou
            </h1>
            <h2 className="font-base text-[16px] text-grey leading-[28px] tracking-[4%]">
              Chef and Founder
            </h2>
          </div>
          <Image
            src={images.sign}
            alt="signature"
            height={200}
            width={200}
            className=""
          />
        </div>
      </div>
    </SectionComponent>
  );
};

export default OurChef;
