import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoReorderThreeSharp, IoRestaurant } from "react-icons/io5";
import NavLinks from "./NavLinks";
import RegistrationLinks from "./RegistrationLinks";

const Dropdown = ({ showDropDown, setShowDropDown }) => {
  return (
    <div className="lg:hidden">
      <IoReorderThreeSharp
        color="white"
        className="w-[35px] h-[30px] hover:cursor-pointer"
        onClick={() => setShowDropDown((pre) => !pre)}
      />
      <AnimatePresence>
        {showDropDown ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-10"
          >
            <IoRestaurant
              className="h-[30px] w-[35px] text-golden absolute right-4 top-4 cursor-pointer"
              onClick={() => setShowDropDown((pre) => !pre)}
            />
            {/* Links */}
            <div className="flex flex-col items-center justify-center h-screen gap-12">
              <NavLinks
                cl1={"flex flex-col gap-[32px] "}
                cl2={
                  "text-golden  font-base leading-[32px] tracking-[4%] text-[28px] cursor-pointer hover:opacity-80 z-50"
                }
                setShowDropDown={setShowDropDown}
              />
              {/* Registration */}
              <RegistrationLinks
                cl1={
                  "text-golden md:hidden font-base font-semibold text-[22px] leading-[28px] tracking-[5%] hover:border-b-[2px] hover:cursor-pointer pb-1"
                }
                cl2={" max-sm:inline-flex md:hidden"}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
