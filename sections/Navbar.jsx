"use client";
import React, { useState } from "react";
import { images } from "@/constants";
import Image from "next/image";
import NavLinks from "@/components/Navbar/NavLinks";
import Dropdown from "@/components/Navbar/Dropdown";
import RegistrationLinks from "@/components/Navbar/RegistrationLinks";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="top-0 z-10 sticky flex justify-between items-center bg-black px-[20px] lg:px-[120px] py-[32px]">
      {/* logo */}
      <Image
        src={images?.gericht}
        alt="logo"
        width={200}
        height={200}
        className="w-[150px] xl:w-[199px] xl:h-[57px]"
      />
      {/* links */}
      <NavLinks
        cl1={"flex gap-[32px] max-lg:hidden"}
        cl2={
          "text-white font-alt leading-[28px] tracking-[4%] text-[16px] cursor-pointer hover:opacity-80"
        }
      />
      {/* registration */}
      <RegistrationLinks />
      {/* hamburger */}
      <Dropdown showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
    </div>
  );
};

export default Navbar;
