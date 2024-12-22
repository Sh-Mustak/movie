"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
export default function SearchModal({ handleModal, handleMovieSelect }) {
  const [movie, setMovie] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value) {
      setMovie([]); // Clear movies if the input is empty
      setError("");
      return;
    }
    const fetchMovie = async () => {
      setLoading(true); // Set loading state to true
      try {
        const response = await fetch(
          `http://localhost:3000/api/searchmovie?query=${value}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        setMovie(data.results);
        setError(""); // Clear error on successful fetch
      } catch (err) {
        setError(err.message);
        setMovie([]); // Clear movies on error
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    const debounceFetch = setTimeout(fetchMovie, 500); // Debounce API call

    return () => clearTimeout(debounceFetch); // Cleanup debounce on value change
  }, [value]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button
            onClick={handleModal}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Loading Fallback and Search Results */}
        <Suspense
          fallback={<p className="text-gray-500 mb-4">Loading movies...</p>}
        >
          <div className="max-h-96 overflow-y-auto">
            {loading && !error && (
              <p className="text-gray-500 mb-4">Loading movies...</p>
            )}
            {!loading &&
              (movie?.length > 0
                ? movie.map((movie) => (
                    <div
                      key={movie.id}
                      className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
                      onClick={() => handleMovieSelect(movie)} // Pass movie back to parent
                    >
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-16 h-24 object-cover rounded"
                        height={288}
                        width={192}
                      />
                      <div>
                        <h3 className="font-bold">{movie.title}</h3>
                        <p className="text-sm text-gray-400">
                          {movie.release_date?.split("-")[0]}
                        </p>
                      </div>
                    </div>
                  ))
                : !error &&
                  value && <p className="text-gray-500">No results found.</p>)}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
