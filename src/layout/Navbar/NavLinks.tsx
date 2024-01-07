import React from "react";
import data from "@/data/data.json";
type NavLinksProps = {};

const NavLinks: React.FC<NavLinksProps> = () => {
  return (
    <div>
      {data.map((item) => (
        <h2 key={item.name}>{item.name}</h2>
      ))}
    </div>
  );
};
export default NavLinks;
