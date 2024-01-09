"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import clsx from "clsx";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between pl-6 pr-8">
        <h2 className="text-NavTitle uppercase ">The Planets</h2>
        <span
          className="w-[24px] h-[17px] flex flex-col justify-between"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <span
            className={clsx(`w-full h-[3px] transition duration-500 bg-FFFFF`, {
              "bg-opacity-20": isNavbarOpen,
            })}
          ></span>
          <span
            className={clsx(`w-full h-[3px] transition duration-500 bg-FFFFF`, {
              "bg-opacity-20": isNavbarOpen,
            })}
          ></span>
          <span
            className={clsx(`w-full h-[3px] transition duration-500 bg-FFFFF`, {
              "bg-opacity-20": isNavbarOpen,
            })}
          ></span>
        </span>
      </div>

      <span className="border-b-[1px] border-opacity-10 my-4 border-FFFFF block"></span>
      <NavLinks isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </div>
  );
};
export default Navbar;
