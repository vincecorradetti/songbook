import type { Route } from "./+types/home";
import { Log as LogComponent } from "~/components/Log/Log";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Songbook // Social Music Logging" },
    { name: "description", content: "Log your song!" },
  ];
}

export default function Log() {
  return <LogComponent />;
}
