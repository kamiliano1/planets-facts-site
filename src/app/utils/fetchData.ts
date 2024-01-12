import { data } from "@/data/data";
export default function fetchData(planetName: string) {
  return data.find(
    (item) => item.name.toLocaleLowerCase() === planetName.toLocaleLowerCase()
  );
}
