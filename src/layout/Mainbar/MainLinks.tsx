"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import clsx from "clsx";

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
  dotColor,
  planetName,
  ...props
}: {
  href: Url;
  children: React.ReactNode;
  dotColor: string;
  planetName: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenu.Item className="border-b-[4px] border-100">
      <Link href={`/${planetName}/${href}`} passHref legacyBehavior>
        <NavigationMenu.Link
          active={isActive}
          {...props}
          className="flex items-center uppercase font-spartan text-H3Tablet py-5 sm:py-0"
        >
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

const MainLinks: React.FC<MainLinksProps> = ({ planetName }) => {
  const pathname = usePathname();
  return (
    <NavigationMenu.Root>
      {pathname}
      <NavigationMenu.List className="flex justify-evenly">
        {links.map((item) => (
          <MainLink
            href={item.href}
            key={item.name}
            planetName={planetName}
            dotColor={"item.color"}
          >
            {item.name}
          </MainLink>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default MainLinks;
