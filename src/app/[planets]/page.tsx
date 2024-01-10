import React from "react";
import { data } from "@/data/data";
export default function Page({ params }: { params: { planets: string } }) {
  const planets = params.planets;
  const planetData = data.find(
    (item) => item.name.toLocaleLowerCase() === planets.toLocaleLowerCase()
  );

  return (
    <div>
      <h2>{planetData?.name}</h2>
    </div>
  );
}
