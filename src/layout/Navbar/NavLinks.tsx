"use client";
import React from "react";
import { data } from "@/data/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import IconChevron from "../../../public/icon-chevron";
import clsx from "clsx";
type NavLinksProps = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLink = ({
  href,
  children,
  dotColor,
  setIsNavbarOpen,
  ...props
}: {
  href: Url;
  children: React.ReactNode;
  dotColor: string;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenu.Item className="[&:not(:last-child)]:border-b-[1px] border-opacity-10 border-FFFFF">
      <Link
        href={href}
        passHref
        legacyBehavior
        onClick={() => setIsNavbarOpen(false)}
      >
        <NavigationMenu.Link
          active={isActive}
          {...props}
          className="flex items-center uppercase font-spartan text-H4Mobile py-5"
        >
          <span
            className={`w-5 aspect-square rounded-full block mr-6 ${dotColor}`}
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
      className={clsx(`duration-500`, {
        "translate-x-full": !isNavbarOpen,
      })}
    >
      <NavigationMenu.List className="pl-6 pr-8">
        {data.map((item) => (
          <NavLink
            setIsNavbarOpen={setIsNavbarOpen}
            href={item.name}
            key={item.name}
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
