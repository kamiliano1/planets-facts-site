import { DataType } from "@/data/data";

export default function PlanetTimeDetails({
  planetData,
}: {
  planetData: DataType | undefined;
}) {
  return (
    <div className="px-6 sm:px-0 space-y-2 sm:space-y-0 sm:flex sm:space-x-3 mb-20 sm:row-start-3 sm:col-span-2 lg:space-x-[1.875rem]">
      <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
        <p className="py-4 sm:pb-0 text-H4Tablet lg:text-H4Desktop opacity-50">
          Rotation Time
        </p>{" "}
        <p className="text-H2Mobile sm:text-H2Tablet lg:text-H2Desktop font-antonio -mt-1 sm:mt-0 sm:mb-5">
          {planetData?.rotation}
        </p>
      </div>
      <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
        <p className="py-4 sm:pb-0 text-H4Tablet lg:text-H4Desktop opacity-50">
          Revolution Time
        </p>{" "}
        <p className="text-H2Mobile sm:text-H2Tablet lg:text-H2Desktop font-antonio -mt-1 sm:mt-0 sm:mb-5">
          {planetData?.revolution}
        </p>
      </div>
      <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
        <p className="py-4 sm:pb-0 text-H4Tablet lg:text-H4Desktop opacity-50">
          Radius
        </p>{" "}
        <p className="text-H2Mobile sm:text-H2Tablet lg:text-H2Desktop font-antonio -mt-1 sm:mt-0 sm:mb-5">
          {planetData?.radius}
        </p>
      </div>
      <div className="uppercase flex sm:flex-col px-6 sm:px-4 items-center sm:items-start justify-between border-[1px] border-FFFFF border-opacity-10 sm:w-full">
        <p className="py-4 sm:pb-0 text-H4Tablet lg:text-H4Desktop opacity-50">
          Average Temp.
        </p>{" "}
        <p className="text-H2Mobile sm:text-H2Tablet lg:text-H2Desktop font-antonio -mt-1 sm:mt-0 sm:mb-5">
          {planetData?.temperature}
        </p>
      </div>
    </div>
  );
}
