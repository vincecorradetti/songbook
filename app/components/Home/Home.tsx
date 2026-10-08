import { useState } from "react";
import { Search } from "../Search/Search";
import { SongGrid } from "../SongGrid/SongGrid";
import "./Home.css";
import useSongQuery from "~/hooks/useSongQuery";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

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
      <Search setSearchTerm={setSearchTerm} />
      <SongGrid data={data} isSuccess={isSuccess} />
    </>
  );
}
