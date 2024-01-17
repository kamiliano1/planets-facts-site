import { DataType } from "@/data/data";
import BarLinks from "./BarLinks";

export default function Bar({ planetData }: { planetData: DataType }) {
  return (
    <nav className="lg:col-start-2">
      <BarLinks planetData={planetData} />
    </nav>
  );
}
