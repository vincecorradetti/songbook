import type { Route } from "./+types/home";
import Scrapbock from "~/components/Scrapbock/Scrapbock";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "{scrapbook} Scrapbook" },
    { name: "description", content: "{scrapbook} Scrapbook" },
  ];
}

export default function Scrapbook() {
  return <Scrapbock />;
}
