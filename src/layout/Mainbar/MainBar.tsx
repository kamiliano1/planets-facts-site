import React from "react";
import MainLinks from "./MainLinks";
import { DataType } from "@/data/data";

type MainBarProps = {
  planetData: DataType;
};

const MainBar: React.FC<MainBarProps> = ({ planetData }) => {
  return (
    <nav className="lg:col-start-2">
      <MainLinks planetData={planetData} />
    </nav>
  );
};
export default MainBar;
