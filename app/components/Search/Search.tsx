import { Form } from "react-router";
import "./Search.css";

export function Search() {
  return (
    <>
      <search className="search">
        <Form>
          <label htmlFor="song" className="sr-only">
            Search for a song
          </label>
          <input type="search" id="song" name="q" />
        </Form>
      </search>
    </>
  );
}
