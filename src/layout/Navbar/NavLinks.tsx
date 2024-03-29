"use client";
import React from "react";
import { data } from "@/data/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";
import IconChevron from "./IconChevron";
type NavLinksProps = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLink = ({
  href,
  children,
  dotColor,
  borderHover,
  setIsNavbarOpen,
  ...props
}: {
  href: Url;
  children: React.ReactNode;
  dotColor: string;
  borderHover: string;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive =
    pathname.split("/")[1].toLocaleLowerCase() ===
    href.toString().split("/")[1];
  const activatedPage = pathname.split("/")[2] || "overview";
  return (
    <NavigationMenu.Item className="[&:not(:last-child)]:border-b-[1px] border-opacity-10 border-FFFFF sm:border-none">
      <Link href={`/${href}/${activatedPage}`} passHref legacyBehavior>
        <NavigationMenu.Link
          onClick={() => setIsNavbarOpen(false)}
          active={isActive}
          {...props}
          className={`flex items-center uppercase font-spartan text-H4Mobile sm:text-H4Desktop py-5 sm:py-0 lg:border-t-[5px] lg:border-opacity-0 lg:hover:border-opacity-100 sm:text-opacity-75 sm:tracking-[2.6px] sm:hover:text-opacity-100 text-FFFFF ${borderHover} h-full lg:pt-[1.8125rem] lg:pb-[1.7085rem]`}
        >
          <span
            className={`w-5 aspect-square rounded-full block mr-6 ${dotColor} sm:hidden`}
          ></span>{" "}
          {children}
          <IconChevron />
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};
const NavLinks: React.FC<NavLinksProps> = ({
  isNavbarOpen,
  setIsNavbarOpen,
}) => {
  return (
    <NavigationMenu.Root
      aria-label="navbar"
      className={clsx(
        `duration-500 sm:translate-x-0 lg:ml-auto fixed sm:static w-full sm:w-auto z-[50] bg-070724 h-full`,
        {
          "translate-x-full": !isNavbarOpen,
        }
      )}
    >
      <NavigationMenu.List className="pl-6 pr-8 lg:p-0 sm:flex sm:justify-evenly lg:gap-[2.0625rem]">
        {data.map((item) => (
          <NavLink
            setIsNavbarOpen={setIsNavbarOpen}
            href={item.name.toLocaleLowerCase()}
            key={item.name}
            borderHover={item.border}
            dotColor={item.color}
          >
            {item.name}
          </NavLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default NavLinks;
