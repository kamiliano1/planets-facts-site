import MainBar from "@/layout/Mainbar/MainBar";
import React from "react";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { planets: string };
}) {
  const planetName = params.planets;
  return (
    <main>
      <MainBar planetName={planetName} />
      <span className="block border-b-[1px] border-opacity-10 border-FFFFF"></span>
      {children}
    </main>
  );
}
