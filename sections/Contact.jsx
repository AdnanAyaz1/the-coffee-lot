import SectionButton from "@/components/Reuseable/SectionButton";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <SectionComponent id={"contact"}>
      <div className="flex xl:flex-row flex-col px-[20px]">
        {/* left */}
        <div className="flex flex-col justify-center gap-[64px] xl:w-1/2">
          <SectionStarterText text={"Contact"} heading={"Find Us"} />
          <div>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>
            <div className="flex flex-col gap-[16px] mt-[32px]">
              <h2 className="font-base font-bold text-[23px] text-golden leading-[30px] tracking-[4%]">
                Opening Hours
              </h2>
              <h2 className="font-alt font-semibold text-[16px] text-grey leading-[30px] tracking-[4%]">
                Mon - Fri: 10:00 am - 02:00 am
              </h2>
              <h2 className="font-alt font-semibold text-[16px] text-grey leading-[30px] tracking-[4%]">
                Sat - Sun: 10:00 am - 03:00 am
              </h2>
            </div>
          </div>
          <SectionButton text={"View More"} cl1={"w-fit"} />
        </div>
        {/* right */}
        <div className="xl:w-1/2">
          <Image
            src={images.findus}
            alt="contact-image"
            width={800}
            height={800}
            className="w-[667] h-[736] object-contain"
          />
        </div>
      </div>
    </SectionComponent>
  );
};

export default Contact;
