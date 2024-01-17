import React from "react";
import fetchData from "../utils/fetchData";
import PlanetTimeDetails from "@/layout/PlanetTimeDetails";
import type { Metadata } from "next";
import MainBar from "./../../layout/MainBar/MainBar";

export async function generateMetadata({
  params,
}: {
  params: { planets: string };
}): Promise<Metadata> {
  return {
    title: params.planets.charAt(0).toUpperCase() + params.planets.slice(1),
  };
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { planets: string };
}) {
  const planetName = params.planets;
  const planetData = fetchData(planetName);

  return (
    <main className="sm:grid sm:grid-cols-2 lg:grid-cols-[minmax(0,_1fr)_350px] sm:items-center sm:px-10 lg:max-w-[1110px] lg:mx-auto lg:gap-x-24 ">
      <MainBar planetData={planetData!} />
      <span className="block border-b-[1px] border-opacity-10 border-FFFFF sm:hidden"></span>
      {children}
      <PlanetTimeDetails planetData={planetData} />
    </main>
  );
}
