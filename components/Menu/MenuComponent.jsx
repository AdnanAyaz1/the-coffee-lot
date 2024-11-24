import React from "react";
import MenuItems from "./MenuItems";

const MenuComponent = ({ heading, data }) => {
  return (
    <div className="flex flex-col gap-[48px] xl:w-[412px]">
      <h1 className="font-base font-semibold text-[45px] text-center text-white leading-[58px] tracking-[4%]">
        {heading}
      </h1>
      <div className="flex flex-col gap-[40px]">
        {data.map((data, index) => (
          <MenuItems
            key={index}
            title={data.title}
            price={data.price}
            tags={data.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
