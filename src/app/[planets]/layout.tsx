import MainBar from "@/layout/Mainbar/MainBar";
import React from "react";
import { data } from "@/data/data";
export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { planets: string };
}) {
  const planetName = params.planets;
  const planetData = data.find(
    (item) => item.name.toLocaleLowerCase() === planetName.toLocaleLowerCase()
  );
  return (
    <main>
      <MainBar planetName={planetName} />
      <span className="block border-b-[1px] border-opacity-10 border-FFFFF"></span>
      {children}
      <div className="px-6 space-y-2 sm:flex sm:space-x-3">
        <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center justify-between border-[1px] border-FFFFF border-opacity-10">
          <p className="py-4 sm:pb-0 text-H4Tablet opacity-50">Rotation Time</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1 sm:mt-0 sm:mb-5">
            {planetData?.rotation}
          </p>
        </div>
        <div className="uppercase flex px-6 items-center justify-between border-[1px] border-FFFFF border-opacity-10">
          <p className="py-4 text-H4Tablet opacity-50">Revolution Time</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1">
            {planetData?.revolution}
          </p>
        </div>
        <div className="uppercase flex px-6 items-center justify-between border-[1px] border-FFFFF border-opacity-10">
          <p className="py-4 text-H4Tablet opacity-50">Radius</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1">
            {planetData?.radius}
          </p>
        </div>
        <div className="uppercase flex px-6 items-center justify-between border-[1px] border-FFFFF border-opacity-10">
          <p className="py-4 text-H4Tablet opacity-50">Average Temp.</p>{" "}
          <p className="text-H2Mobile font-antonio -mt-1">
            {planetData?.temperature}
          </p>
        </div>
      </div>
    </main>
  );
}
