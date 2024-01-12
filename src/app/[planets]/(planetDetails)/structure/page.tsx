import Image from "next/image";
import React from "react";
import fetchData from "@/app/utils/fetchData";
import Link from "next/link";
export default function Page({ params }: { params: { planets: string } }) {
  const planetName = params.planets;
  const planetData = fetchData(planetName);
  return (
    <div className="text-center px-6">
      <Image
        className="mx-auto my-24"
        width={111}
        height={111}
        src={planetData ? planetData?.images.internal : ""}
        alt={`${planetData?.name} planet`}
      />
      <h1 className="mb-4">{planetData?.name}</h1>
      <p className="text-BodyTablet mb-8">{planetData?.structure.content}</p>
      <Link
        className="text-H3Desktop font-normal tracking-normal opacity-50 font-spartan flex items-center justify-center mb-7"
        href={planetData ? planetData?.structure.source : ""}
      >
        Source: <span className="underline font-bold mx-1 "> Wikipedia</span>
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
