import { useQuery } from "@tanstack/react-query";
import type { Song } from "~/types";

type SearchResult = {
  resultCount: number;
  results: Song[];
};

async function fetchSearchResults(searchTerm: string): Promise<SearchResult> {
  const url = `https://itunes.apple.com/search?term=${searchTerm}&media=music`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Couldn't fetch songs");
  }
  return response.json();
}

function transformSearchResults(searchResult: SearchResult) {
  const songs = searchResult.results;
  return songs
    .map((song) => ({
      ...song,
      artworkUrl500: song.artworkUrl100.replace("100x100", "500x500"),
    }))
    .reverse();
}

/* We could potentially optimize `queryFn` with `select` option
 * but it's not worth the effort at the moment.
 * See: https://tkdodo.eu/blog/react-query-data-transformations
 */
export default function useSongQuery(searchTerm: string) {
  const { data, isSuccess } = useQuery({
    queryKey: ["songData"],
    queryFn: () => fetchSearchResults(searchTerm).then(transformSearchResults),
    staleTime: 1000 * 60 * 5,
  });

  return { data, isSuccess };
}
