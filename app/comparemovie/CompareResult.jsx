"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CloseResultBox from "./CloseResultBox";
const TMDB_API_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function CompareResult({ movie, handleRemove }) {
  const [fetchedMovie, setFetchedMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        console.log("Fetching movie with ID:", movie?.id);
        const response = await fetch(
          `${TMDB_API_URL}/movie/${movie.id}?api_key=${TMDB_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newMovie = await response.json();
        console.log("Fetched Movie:", newMovie); // Log the fetched movie
        setFetchedMovie(newMovie);
      } catch (error) {
        console.error("Error fetching new movie:", error);
      }
    };

    if (movie?.id) fetchMovie();
  }, [movie]);

  if (!fetchedMovie) {
    return <p>Loading...</p>; // Render loading state
  }

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      {/* Remove Button */}
      <CloseResultBox handleRemove={handleRemove} />

      {/* Movie Details */}
      <div className="grid grid-cols-5 gap-8">
        {/* Left Column: Movie Poster and Title */}
        <div className="col-span-2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${fetchedMovie.poster_path}`}
            alt={fetchedMovie.title}
            className="w-full rounded-lg mb-4 object-contain"
            height={288}
            width={192}
          />
          <h2 className="text-xl font-bold text-center">
            {fetchedMovie.title}
          </h2>
        </div>

        {/* Right Column: Movie Details */}
        <div className="col-span-3 space-y-4">
          {/* Rating */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {fetchedMovie.vote_average.toFixed(1)}/10
            </span>
          </div>

          {/* Release Year */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">
              {fetchedMovie.release_date.split("-")[0]}
            </span>
          </div>

          {/* Runtime */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Runtime:</span>
            <span className="float-right">
              {fetchedMovie.runtime ? `${fetchedMovie.runtime} min` : `N/A`}
            </span>
          </div>

          {/* Budget */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Budget:</span>
            <span className="float-right">
              {`$${(fetchedMovie.budget / 1e6).toFixed(1)}M`}
            </span>
          </div>

          {/* Revenue */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">
              {`$${(fetchedMovie.revenue / 1e6).toFixed(1)}M`}
            </span>
          </div>

          {/* Genres */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {fetchedMovie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
