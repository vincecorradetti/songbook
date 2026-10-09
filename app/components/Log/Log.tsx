import { useSearchParams } from "react-router";
import { Search } from "../Search/Search";
import { SongGrid } from "../SongGrid/SongGrid";
import useSongQuery from "~/hooks/useSongQuery";
import "./Log.css";

type Search = {
  searchTerm: string;
  searchParams: URLSearchParams;
};

export function Log() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  /* Hooks can only be called at the top level of a component or
   * another hook, so we can't call `useSongQuery` inside
   * `handleChange()`. Instead, `handleChange` just updates state.
   * That state change re-renders the component, and on that render
   * `useSongQuery` runs with the new search term. React Query then
   * fetches if it has no fresh cached data for that term.
   */
  const { data, isSuccess } = useSongQuery(searchTerm);
  return (
    <>
      <hgroup>
        <h1>{`Hey, {user}`}</h1>
        <p>Let's log your song for today</p>
      </hgroup>
      <Search />
      <SongGrid data={data} isSuccess={isSuccess} />
    </>
  );
}
