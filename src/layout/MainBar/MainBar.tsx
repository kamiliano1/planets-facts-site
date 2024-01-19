import { DataType } from "@/data/data";
import MainBarLinks from "./MainBarLinks";

export default function MainBar({ planetData }: { planetData: DataType }) {
  return (
    <div className="lg:col-start-2">
      <MainBarLinks planetData={planetData} />
    </div>
  );
}
