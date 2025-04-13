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
            width={555}
            height={691}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, 555px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDARAVFhkYGR8ZGR8eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="max-sm:mx-auto max-sm:w-full xl:w-[555px] max-sm:h-[600px] xl:h-[691px] object-contain"
          />
        </div>
      </div>
    </SectionComponent>
  );
};

export default Laurels;
