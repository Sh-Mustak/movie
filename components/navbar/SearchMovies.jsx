"use client";

import useSearchContext from "@/app/context/Context";
import { useEffect, useState } from "react";

export default function SearchMovies() {
  const { setSearchValue } = useSearchContext();
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchedMovie = async () => {
      const response = await fetch(
        `http://localhost:3000/api/searchmovie?query=${value}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie");
      }
      const data = await response.json();
      setMovie(data.results);
    };
    fetchedMovie();
  }, [value]);

  const handleSearch = (e) => {
    setValue(e.target.value);
    setMovie(value);
    setSearchValue(movie);
  };
  // console.log(movie?.length);

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
      <div
        id="searchResults"
        className="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
      ></div>
    </div>
  );
}
