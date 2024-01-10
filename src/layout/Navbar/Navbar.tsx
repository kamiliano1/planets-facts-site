"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import HamburgerIcon from "./HamburgerIcon";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <nav className="pt-4 sm:pt-10 lg:p-0 overflow-x-hidden">
      <div className="lg:flex lg:items-center lg:px-8 lg:py-4">
        <div className="flex items-center justify-between sm:justify-center pl-6 pr-8 sm:p-0 sm:pb-10 lg:pb-0">
          <h2 className="text-NavTitle uppercase lg:mb-2">The Planets</h2>
          <HamburgerIcon
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
          />
        </div>

        <span className="border-b-[1px] border-opacity-10 my-4 border-FFFFF block sm:hidden"></span>
        <NavLinks
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
        />
      </div>
      <span className="hidden border-b-[1px] border-opacity-10 my-7 lg:my-0 border-FFFFF sm:block"></span>
    </nav>
  );
};
export default Navbar;
