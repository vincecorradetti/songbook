import { useEffect, useState } from "react";

// Fetches from iTunes
export default function useYoutubeSearch() {
  const [results, setResults] = useState<unknown[]>([]);

  useEffect(() => {
    setResults(["hi!"]);
    console.log("mounted");
  }, []);

  return results;
}