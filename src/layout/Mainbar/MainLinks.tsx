"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";
import { data } from "@/data/data";
type MainLinksProps = { planetName: string };

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
  planetName,
  ...props
}: {
  href: Url;
  children: React.ReactNode;
  borderColor: string;
  planetName: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href.toString());
  return (
    <NavigationMenu.Item
      className={clsx(`${borderColor}`, {
        "border-b-[4px]": isActive,
      })}
    >
      <Link href={`/${planetName}/${href}`} passHref legacyBehavior>
        <NavigationMenu.Link
          active={isActive}
          {...props}
          className="flex items-center uppercase font-spartan text-H3Tablet pb-4 sm:py-0"
        >
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

const MainLinks: React.FC<MainLinksProps> = ({ planetName }) => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex justify-between px-6">
        {links.map((item) => (
          <MainLink
            href={item.href}
            key={item.name}
            planetName={planetName}
            borderColor={`border-b-dots-${planetName}`}
          >
            {item.name}
          </MainLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default MainLinks;
