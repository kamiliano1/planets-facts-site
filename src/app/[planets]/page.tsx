import { redirect } from "next/navigation";
export default function Page({ params }: { params: { planets: string } }) {
  const planets = params.planets;
  redirect(`/${planets}/overview`);
}
