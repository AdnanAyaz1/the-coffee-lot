import React from "react";

const MenuItems = ({ title, price, tags }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-base font-bold text-[23px] text-golden leading-[28px] tracking-[4%]">{title}</h1>
        <div className="flex flex-row items-center max-sm:gap-[16px] xl:gap-[32px]">
          <div className="bg-grey w-[119px] max-sm:w-[80px] h-[1px]"></div>
          <h1 className="font-base font-bold text-[23px] text-white leading-[28px] tracking-[4%]">
            {price}
          </h1>
        </div>
      </div>
      <h2 className="font-alt text-[16px] text-grey leading-[28px] tracking-[4%]">
        {tags}
      </h2>
    </div>
  );
};

export default MenuItems;
