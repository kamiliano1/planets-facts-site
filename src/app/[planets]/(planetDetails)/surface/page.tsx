import Image from "next/image";
import React from "react";
import fetchData from "@/app/utils/fetchData";
import Link from "next/link";
export default function Page({ params }: { params: { planets: string } }) {
  const planetName = params.planets;
  const planetData = fetchData(planetName);
  return (
    <div className="text-center px-6">
      <div className="relative mx-auto my-24 flex justify-center">
        <Image
          width={111}
          height={111}
          // fill={true}
          src={planetData ? planetData?.images.planet : ""}
          alt={`${planetData?.name} planet`}
        />
        <Image
          className="absolute top-[80px]"
          width={70}
          height={70}
          src={planetData ? planetData?.images.geology : ""}
          alt={`${planetData?.name} planet`}
        />
      </div>
      <h1 className="mb-4">{planetData?.name}</h1>
      <p className="text-BodyTablet mb-8">{planetData?.geology.content}</p>
      <Link
        className="text-H3Desktop font-normal tracking-normal opacity-50 font-spartan flex items-center justify-center mb-7"
        href={planetData ? planetData?.geology.source : ""}
      >
        Source: <span className="underline font-bold mx-1"> Wikipedia</span>
        <Image
          src="/assets/icon-source.svg"
          alt="icon source"
          width={11}
          height={11}
        />
      </Link>
    </div>
  );
}
