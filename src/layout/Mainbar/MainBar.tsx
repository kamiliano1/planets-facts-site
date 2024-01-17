import React from "react";
import { DataType } from "@/data/data";
import MainLinks from "./MainLinks";

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
