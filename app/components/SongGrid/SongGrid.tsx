import { MoveUpRight } from "lucide-react";
import type { Song } from "~/types";
import "./SongGrid.css";

type SongGridProps = {
  data: Song[] | undefined;
  isSuccess: boolean;
  variant?: "scrapbook" | "default";
};

export function SongGrid({
  data,
  isSuccess,
  variant = "default",
}: SongGridProps) {
  return (
    <>
      {data && isSuccess && (
        <ol className={`song-grid song-grid--${variant}`}>
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
