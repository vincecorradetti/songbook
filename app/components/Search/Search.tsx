import React, { useState, useEffect } from "react";
import useSongQuery from "~/hooks/useSongQuery";
import "./Search.css";

type SearchProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export function Search({ setSearchTerm }: SearchProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase().trim();
    setSearchTerm(searchTerm);
  }

  // Todo
  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <search className="search">
        <form onSubmit={handleSubmit}>
          <label htmlFor="song" className="sr-only">
            Search for a song
          </label>
          <input type="search" id="song" name="q" onChange={handleChange} />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
      </search>
    </>
  );
}
