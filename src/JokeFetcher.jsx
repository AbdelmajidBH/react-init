import { useEffect, useState } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState("");
  const [toManyRequests, setToManyRequests] = useState(false);

  function fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.joke);
        setJoke(data.joke);
      })
      .catch((err) => {
        console.error("Error fetching joke:", err);
        setJoke("Failed to fetch a joke.");
        setToManyRequests(true);
      });
  }
  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // empty array = run once on mount

  return (
    <>
      <p>🃏 {joke}</p>
      <button onClick={fetchJoke} disabled={toManyRequests}>
        Get New Joke
      </button>
    </>
  );
}

export default JokeFetcher;
