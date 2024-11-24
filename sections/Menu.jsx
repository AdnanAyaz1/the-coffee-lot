import MenuComponent from "@/components/Menu/MenuComponent";
import SectionComponent from "@/components/Reuseable/SectionComponent";
import SectionStarterText from "@/components/Reuseable/SectionStarterText";
import { data, images } from "@/constants";
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <SectionComponent id={"menu"}>
      <div className="">
        <SectionStarterText
          text={"Menu that fits you palatte"}
          heading={"Today’s Special"}
          cl1={"items-center justify-center"}
          cl2={"items-center justify-center"}
          cl4={"max-sm:text-[50px]"}
        />
        <div className="flex xl:flex-row flex-col gap-[32px] mt-[64px] px-[10px] ">
          <MenuComponent heading={"Wine & Beer"} data={data.wines} />
          <Image
            src={images.menu}
            alt="menu"
            width={600}
            height={660}
            className="max-sm:w-[350px] xl:w-[444px] h-[660px]"
          />
          <MenuComponent heading={"CockTails"} data={data.cocktails} />
        </div>
      </div>
    </SectionComponent>
  );
};

export default Menu;
