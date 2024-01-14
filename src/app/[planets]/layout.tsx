import MainBar from "@/layout/Mainbar/MainBar";
import React from "react";
import { data } from "@/data/data";
import fetchData from "../utils/fetchData";
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
    <main className="sm:grid sm:grid-cols-2 lg:grid-cols-[minmax(0,_1fr)_350px] sm:rows-3 sm:items-center sm:px-10 lg:max-w-[1110px] lg:mx-auto">
      <MainBar planetData={planetData!} />
      <span className="block border-b-[1px] border-opacity-10 border-FFFFF sm:hidden"></span>
      {children}
      <div className="px-6 sm:px-0 space-y-2 sm:space-y-0 sm:flex sm:space-x-3 mb-20 sm:row-start-3 sm:col-span-2 lg:space-x-[1.875rem]">
        <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
          <p className="py-4 sm:pb-0 text-H4Tablet opacity-50">Rotation Time</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1 sm:mt-0 sm:mb-5">
            {planetData?.rotation}
          </p>
        </div>
        <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
          <p className="py-4 sm:pb-0 text-H4Tablet opacity-50">
            Revolution Time
          </p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1 sm:mt-0 sm:mb-5">
            {planetData?.revolution}
          </p>
        </div>
        <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
          <p className="py-4 sm:pb-0 text-H4Tablet opacity-50">Radius</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1 sm:mt-0 sm:mb-5">
            {planetData?.radius}
          </p>
        </div>
        <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
          <p className="py-4 sm:pb-0 text-H4Tablet opacity-50">Average Temp.</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1 sm:mt-0 sm:mb-5">
            {planetData?.temperature}
          </p>
        </div>
      </div>
    </main>
  );
}
