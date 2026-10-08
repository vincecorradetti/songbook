import useSongQuery from "~/hooks/useSongQuery";
import "./Scrapbock.css";

export default function Scrapbock() {
  const { data, isSuccess } = useSongQuery(
    "interpol turn off the bright lights",
  );

  return (
    <>
      <h1>Scrapbook</h1>
      {data && isSuccess && (
        <ol className="scrapbook">
          {data.map(({ trackId, artistName, artworkUrl500 }) => (
            <li key={trackId}>
              <p className="artist">{artistName}</p>
              <img src={artworkUrl500} className="album-cover" />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
