import useSongQuery from "~/hooks/useSongQuery";
import { SongGrid } from "../SongGrid/SongGrid";
import "./Scrapbook.css";

export function Scrapbook() {
  const { data, isSuccess } = useSongQuery("alternative");

  return (
    <>
      <h1>Scrapbook</h1>
      <SongGrid data={data} isSuccess={isSuccess} variant="scrapbook" />
    </>
  );
}
