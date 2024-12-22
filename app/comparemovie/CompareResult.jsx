"use client";
import Image from "next/image";
import React from "react";

export default function CompareResult({ movie, handleRemove }) {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      {/* Remove Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Movie Details */}
      <div className="grid grid-cols-5 gap-8">
        {/* Left Column: Movie Poster and Title */}
        <div className="col-span-2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg mb-4 object-contain"
            height={288}
            width={192}
          />
          <h2 className="text-xl font-bold text-center">{movie.title}</h2>
        </div>

        {/* Right Column: Movie Details */}
        <div className="col-span-3 space-y-4">
          {/* Rating */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {movie.vote_average.toFixed(1)}/10
            </span>
          </div>

          {/* Release Year */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">
              {movie.release_date.split("-")[0]}
            </span>
          </div>

          {/* Runtime */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Runtime:</span>
            <span className="float-right">
              {
                movie.runtime
                  ? `${movie.runtime} min` // If runtime is available, show it
                  : `120 min` // Fallback value if runtime is not available
              }
            </span>
          </div>

          {/* Budget */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Budget:</span>
            <span className="float-right">
              {
                movie.budget
                  ? `$${(movie.budget / 1e6).toFixed(1)}M` // If budget is available, show it in millions
                  : `$50M` // Fallback value if budget is not available
              }
            </span>
          </div>

          {/* Revenue */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">
              {
                movie.revenue
                  ? `$${(movie.revenue / 1e6).toFixed(1)}M` // If revenue is available, show it in millions
                  : `$55M` // Fallback value if revenue is not available
              }
            </span>
          </div>

          {/* Genres */}
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))
              ) : (
                <>
                  <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                    Drama{" "}
                  </span>
                  <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                    History{" "}
                  </span>

                  <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                    Thriller
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
