import Loading from "@/components/Loading";
import { getSimilarMovies } from "@/utils/api";
import Image from "next/image";
import React from "react";

export default async function MoreLikeThis({ movieId }) {
  const similarMovies = await getSimilarMovies(movieId);
  return (
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4">More Like This</h2>

      <div class="flex space-x-4 overflow-x-auto pb-4">
        <Loading />
        {similarMovies.results.map((movie) => (
          <div
            key={movie.id}
            class="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
          >
            <a href="details.html">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="The Good German"
                class="w-full rounded-lg"
                height={288}
                width={192}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
