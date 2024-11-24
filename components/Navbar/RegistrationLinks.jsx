import React from "react";
import { twMerge } from "tailwind-merge";

const RegistrationLinks = ({ cl1, cl2 }) => {
  return (
    <div
      className={twMerge(
        "py-[14.5px] flex items-center  h-[57px] max-sm:hidden",
        cl2
      )}
    >
      <div
        className={twMerge(
          "text-white font-alt font-semibold text-[16px] leading-[28px] tracking-[5%] hover:border-b-[2px] hover:cursor-pointer pb-1",
          cl1
        )}
      >
        Log In /Registration
      </div>
      <div className="w-[2px] h-full   mx-[15px]  bg-slate-100/35"></div>
      <div
        className={twMerge(
          "text-white font-alt font-semibold text-[16px] leading-[28px] tracking-[5%] hover:border-b-[2px] hover:cursor-pointer pb-1",
          cl1
        )}
      >
        Book Table
      </div>
    </div>
  );
};

export default RegistrationLinks;
