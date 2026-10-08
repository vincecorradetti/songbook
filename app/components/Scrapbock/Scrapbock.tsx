import useYoutubeSearch from "~/hooks/useYoutubeSearch";

export default function Scrapbock() {
  const results = useYoutubeSearch();
  
  return (
    <>
      <h1>Results:</h1>
      {results}
    </>
  )
}