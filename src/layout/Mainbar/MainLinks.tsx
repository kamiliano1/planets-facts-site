"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";
import { DataType } from "@/data/data";
type MainLinksProps = {
  planetData: DataType;
};

const links = [
  { name: "Overview", href: "/overview" },
  {
    name: "Structure",
    href: "/structure",
  },
  { name: "Surface", href: "/surface" },
];

const MainLink = ({
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
  const pathname = usePathname();
  const isActive = pathname.includes(href.toString());
  return (
    <NavigationMenu.Item
      className={clsx(
        `${borderColor} sm:px-5 py-2 lg:py-3 sm:border-[1px] sm:border-FFFFF sm:border-opacity-20`,
        {
          "border-b-[4px]": isActive,
          [backgroundColor]: isActive,
          "hover:bg-D8D8D8": !isActive,
        }
      )}
    >
      <Link href={`/${planetName}/${href}`} passHref legacyBehavior>
        <NavigationMenu.Link
          active={isActive}
          {...props}
          className="flex items-center uppercase font-spartan text-H3Tablet lg:text-H3Desktop pb-4 sm:py-0 lg:pb-0"
        >
          <span className="hidden sm:block opacity-50 mr-4">0{number}</span>{" "}
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

const MainLinks: React.FC<MainLinksProps> = ({ planetData }) => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex justify-between px-6 sm:px-0 sm:pl-16 lg:p-0 sm:flex-col sm:gap-4 lg:mb-20">
        {links.map((item, id) => (
          <MainLink
            href={item.href}
            key={item.name}
            planetName={planetData.name}
            borderColor={planetData?.border}
            backgroundColor={planetData?.background}
            number={id + 1}
          >
            {item.name}
          </MainLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default MainLinks;
