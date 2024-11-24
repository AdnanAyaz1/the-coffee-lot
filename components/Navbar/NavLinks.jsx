import React from "react";
import { Links } from "@/constants/data";
const NavLinks = ({ cl1, cl2, setShowDropDown=()=>{} }) => {
  return (
    <ul className={cl1}>
      {Links.map((link, index) => (
        <li key={index} className={cl2} onClick={() => setShowDropDown(false)}>
          <a href={link.id}>{link.link}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
