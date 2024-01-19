"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";
import { DataType } from "@/data/data";

const links = [
  { nameMobile: "Overview", nameTablet: "Overview", href: "/overview" },
  {
    nameMobile: "Structure",
    nameTablet: "Internal Structure",
    href: "/structure",
  },
  { nameMobile: "Surface", nameTablet: "Surface Geology", href: "/surface" },
];

const MainBarLink = ({
  href,
  children,
  borderColor,
  backgroundColor,
  planetName,
  number,
  ...props
}: {
  href: Url;
  children: React.ReactNode;
  borderColor: string;
  backgroundColor: string;
  planetName: string;
  number: number;
}) => {
  const activePathname = usePathname();
  const pathname = activePathname.length < 2 ? "/overview" : activePathname;

  const isActive = pathname.includes(href.toString());
  return (
    <NavigationMenu.Item
      className={clsx(
        `${borderColor} sm:px-5 py-2 sm:py-[.7875rem] lg:py-3 sm:border-[1px] sm:border-FFFFF sm:border-opacity-20 text-FFFFF text-opacity-75 sm:text-opacity-100`,
        {
          "border-b-[4px] text-opacity-100": isActive,
          [backgroundColor]: isActive,
          "hover:bg-D8D8D8": !isActive,
        }
      )}
    >
      <Link
        href={`/${planetName.toLocaleLowerCase()}${href}`}
        passHref
        legacyBehavior
      >
        <NavigationMenu.Link
          active={isActive}
          {...props}
          className="flex items-center uppercase font-spartan text-H3Tablet lg:text-H3Desktop pb-4 sm:py-0 lg:pb-0"
        >
          <span className="hidden sm:block opacity-50 mr-4 lg:mr-[1.5625rem]">
            0{number}
          </span>{" "}
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

export default function MainBarLinks({ planetData }: { planetData: DataType }) {
  return (
    <NavigationMenu.Root aria-label="mainBar">
      <NavigationMenu.List className="flex justify-between px-6 sm:px-0 sm:pl-16 lg:p-0 sm:flex-col sm:gap-4 lg:mb-[4.5rem]">
        {links.map((item, id) => (
          <MainBarLink
            href={item.href}
            key={item.nameMobile}
            planetName={planetData.name}
            borderColor={planetData?.border}
            backgroundColor={planetData?.background}
            number={id + 1}
          >
            <p className="sm:hidden">{item.nameMobile}</p>
            <p className="hidden sm:block">{item.nameTablet}</p>
          </MainBarLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
