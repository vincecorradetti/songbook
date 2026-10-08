import type { Route } from "./+types/home";
import { Scrapbook as ScrapbookComponent } from "~/components/Scrapbook/Scrapbook";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "{scrapbook}'s Scrapbook" },
    { name: "description", content: "{scrapbook} Scrapbook" },
  ];
}

export default function Scrapbook() {
  return <ScrapbookComponent />;
}
