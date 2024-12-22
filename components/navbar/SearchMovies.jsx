"use client";

import useSearchContext from "@/app/context/Context";
import { useEffect, useState } from "react";

export default function SearchMovies() {
  const { setSearchValue } = useSearchContext();
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    let isActive = true; // Flag to track active fetch

    if (!value) {
      setMovie([]); // Clear movies if the input is empty
      setSearchValue([]); // Clear context value
      return;
    }

    const fetchedMovie = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/searchmovie?query=${value}`,
          { cache: "no-store" }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        if (isActive) {
          setMovie(data.results);
          setSearchValue(data.results); // Update context with the new results
        }
      } catch (error) {
        console.error("Error fetching movie:", error.message);
        if (isActive) {
          setMovie([]);
          setSearchValue([]); // Clear context on error
        }
      }
    };

    fetchedMovie();

    return () => {
      isActive = false; // Cancel any ongoing fetch
    };
  }, [value, setSearchValue]);

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="searchInput"
        value={value}
        onChange={handleSearch}
        placeholder="Search movies..."
        className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
      />
      {value && movie.length === 0 && (
        <p className="absolute mt-2 text-gray-500">No results found.</p>
      )}
    </div>
  );
}
