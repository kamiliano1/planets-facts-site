import Image from "next/image";
import React from "react";
import fetchData from "@/app/utils/fetchData";
import Link from "next/link";
export default function Page({ params }: { params: { planets: string } }) {
  const planetName = params.planets;
  const planetData = fetchData(planetName);
  return (
    <>
      <div
        className={`my-24 sm:my-36 sm:row-start-1 sm:col-span-2 lg:col-span-1 lg:my-0 aspect-square lg:row-start-1 lg:row-span-2 ${planetData?.planetImageSize} m-auto relative flex justify-center`}
      >
        <Image
          fill
          src={planetData ? planetData?.images.planet : ""}
          alt={`${planetData?.name} planet`}
        />
        <Image
          className="hidden sm:inline-block absolute sm:top-[calc(100%_-_31%)]"
          width={158}
          height={158}
          src={planetData ? planetData?.images.geology : ""}
          alt={`${planetData?.name} planet`}
        />
        <Image
          className="sm:hidden absolute top-[calc(100%_-_50%)]"
          width={99}
          height={99}
          src={planetData ? planetData?.images.geology : ""}
          alt={`${planetData?.name} planet`}
        />
      </div>
      <div className="text-center sm:text-start sm:px-0 px-6 sm:col-start-1 sm:row-start-2 lg:col-start-2 lg:row-start-1">
        <h1 className="mb-4 lg:mb-6 lg:mt-32">{planetData?.name}</h1>
        <p className="text-BodyTablet sm:text-BodyDesktop lg:text-[1.0625rem] mb-8 lg:mb-6 text-FFFFF text-opacity-75">
          {planetData?.geology.content}
        </p>
        <Link
          className="text-H3Desktop lg:text-BodyDesktop font-normal tracking-normal opacity-50 font-spartan flex items-center justify-center sm:justify-start mb-7 lg:mb-[2.44rem]"
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
    </>
  );
}
