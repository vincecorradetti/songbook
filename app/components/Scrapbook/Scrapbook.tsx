import useSongQuery from "~/hooks/useSongQuery";
import "./Scrapbook.css";
import { MoveUpRight } from "lucide-react";

export function Scrapbook() {
  const { data, isSuccess } = useSongQuery("alternative");

  return (
    <>
      <h1>Scrapbook</h1>
      {data && isSuccess && (
        <ol className="scrapbook">
          {data.map(({ trackId, artistName, artworkUrl500, trackViewUrl }) => (
            <li key={trackId}>
              <a href={trackViewUrl} target="_blank" rel="noopener noreferrer">
                <img src={artworkUrl500} className="album-cover" />
                <div className="metadata">
                  <p className="artist">{artistName}</p>
                  <MoveUpRight />
                </div>
              </a>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
