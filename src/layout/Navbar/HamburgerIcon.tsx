import React from "react";
import clsx from "clsx";

type HamburgerIconProps = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isNavbarOpen,
  setIsNavbarOpen,
}) => {
  return (
    <span
      className="w-[24px] h-[17px] flex flex-col justify-between sm:hidden cursor-pointer"
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
  );
};
export default HamburgerIcon;
