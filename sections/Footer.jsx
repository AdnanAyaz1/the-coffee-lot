import SectionComponent from "@/components/Reuseable/SectionComponent";
import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <SectionComponent>
      <div className="flex flex-wrap justify-between xl:items-center max-sm:gap-[50px] px-[20px]">
        {/* 1st */}
        <div className="flex flex-col gap-[24px] max-md:order-2">
          <h1 className="font-base text-[32px] text-crimson leading-[42px] tracking-[4%]">
            Contact Us
          </h1>
          <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <div>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              +1 212-344-1230
            </p>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              +1 212-555-1230
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col gap-[32px] max-md:order-1 xl:mr-[230px] xl:ml-[125px]">
          <h1 className="font-base text-[64px] text-center text-golden leading-[84px] tracking-[4%]">
            Gerícht
          </h1>
          <div className="flex flex-col items-center gap-[16px] max-w-[438px]">
            <p className="font-alt text-[16px] text-center text-white leading-[28px] tracking-[4%]">
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <Image
              src={images.spoon}
              alt="spoon"
              width={40}
              height={40}
              className="w-[40px] h-[10px]"
            />
            <div className="flex gap-[20px]">
              <FaFacebook className="text-white hover:text-blue-500 cursor-pointer size-[24px] hover:scale-125" />
              <FaInstagram className="text-white hover:text-pink-700 cursor-pointer size-[24px] hover:scale-125" />
              <FaTwitter className="text-white hover:text-blue-500 cursor-pointer size-[24px] hover:scale-125" />
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-col gap-[24px] max-md:order-3">
          <h1 className="font-base text-[32px] text-crimson leading-[42px] tracking-[4%]">
            Working Time
          </h1>
          <div>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              Monday-Friday:
            </p>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              08:00 am -12:00 am
            </p>
          </div>
          <div>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              Saturday-Sunday:
            </p>
            <p className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
              07:00am -11:00 pm
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[80px] font-alt text-[16px] text-center text-grey leading-[28px] tracking-[4%]">
        2021 Gerícht. All Rights reserved.
      </div>
    </SectionComponent>
  );
};

export default Footer;
