import Image from "next/image";
import fetchData from "@/app/utils/fetchData";
import Link from "next/link";
import PlanetTimeDetails from "@/layout/PlanetTimeDetails";
import MainBar from "@/layout/MainBar/MainBar";
export default function Home() {
  const planetData = fetchData("earth");
  return (
    <main className="sm:grid sm:grid-cols-2 lg:grid-cols-[minmax(0,_1fr)_350px] sm:items-center sm:px-10 lg:max-w-[1110px] lg:mx-auto lg:gap-x-24">
      <MainBar planetData={planetData!} />
      <span className="block border-b-[1px] border-opacity-10 border-FFFFF sm:hidden"></span>
      <div
        className={`my-24 sm:my-36 sm:row-start-1 sm:col-span-2 lg:col-span-1 lg:my-0 aspect-square lg:row-start-1 lg:row-span-2 ${planetData?.planetImageSize} m-auto relative`}
      >
        <Image
          fill
          src={planetData ? planetData?.images.planet : ""}
          alt={`${planetData?.name} planet`}
        />
      </div>
      <div className="text-center sm:text-start sm:px-0 px-6 sm:col-start-1 sm:row-start-2 lg:col-start-2 lg:row-start-1">
        <h1 className="mb-4 lg:mb-6 lg:mt-32">{planetData?.name}</h1>
        <p className="text-BodyTablet sm:text-BodyDesktop mb-8">
          {planetData?.overview.content}
        </p>
        <Link
          className="text-H3Desktop lg:text-BodyDesktop font-normal tracking-normal opacity-50 font-spartan flex items-center justify-center sm:justify-start mb-7"
          href={planetData ? planetData?.overview.source : ""}
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
      <PlanetTimeDetails planetData={planetData} />
    </main>
  );
}
