import type { Route } from "./+types/home";
import { Home as HomeComponent } from "~/components/Home/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Songbook // Social Music Logging" },
    { name: "description", content: "Log your song!" },
  ];
}

export default function Home() {
  return <HomeComponent />;
}
