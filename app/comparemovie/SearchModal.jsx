"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// http://localhost:3000/api/searchmovie?query=avatar
export default function SearchModal({ handleModal }) {
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
  return (
    <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div class="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Search Movie</h2>
          <button onClick={handleModal} class="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type movie name..."
          class="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div class="max-h-96 overflow-y-auto">
          {movie?.map((movie) => (
            <div
              key={movie.id}
              class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="The Social Network"
                class="w-16 h-24 object-cover rounded"
                height={288}
                width={192}
              />
              <div>
                <h3 class="font-bold">{movie.title}</h3>
                <p class="text-sm text-gray-400">
                  {movie.release_date.split("-")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
