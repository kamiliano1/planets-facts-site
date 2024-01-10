import React from "react";
import MainLinks from "./MainLinks";

type MainBarProps = { planetName: string };

const MainBar: React.FC<MainBarProps> = ({ planetName }) => {
  return (
    <nav>
      <MainLinks planetName={planetName} />
    </nav>
  );
};
export default MainBar;
