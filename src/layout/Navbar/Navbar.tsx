import React from "react";
import NavLinks from "./NavLinks";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div>
      <NavLinks />
    </div>
  );
};
export default Navbar;
