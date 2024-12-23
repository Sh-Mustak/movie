import React from "react";
import ShareOnSocial from "./ShareOnSocial";
import Image from "next/image";
import { getMonth, getMoviesById } from "@/utils/api";
import AddToWatch from "./AddToWatch";

export default async function RightSide({ movieId }) {
  const data = await getMoviesById(movieId);
  const release_date = data.release_date.split("-");
  const month = getMonth(release_date[1]);

  return (
    <div class="md:w-2/3">
      <h1 class="text-4xl font-bold mb-4">{data.title} </h1>

      <div class="flex items-center mb-4 space-x-4">
        <span class="text-green-500">
          {" "}
          {release_date[0]} {month} {release_date[2]}{" "}
        </span>
        <span>| </span>
        <span>{data.runtime} min</span>
      </div>

      <p class="text-lg mb-6">{data.overview}</p>

      <div class="mb-6">
        <h3 class="text-gray-400 mb-2">Genres</h3>
        <div class="flex flex-wrap gap-2">
          {data.genres.map((genre, index) => (
            <span
              key={index}
              class="px-3 py-1 bg-gray-800 rounded-full text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-gray-400 mb-2">Cast</h3>
        <div class="flex flex-wrap gap-4">
          {data.production_companies.map((cast) => (
            <div key={cast.id} class="text-center">
              <Image
                src={`https://image.tmdb.org/t/p/original/${cast.logo_path}`}
                alt="Naomi Scott"
                class="w-24 h-24 rounded-full object-cover mb-2"
                height={288}
                width={192}
              />
              <p class="text-sm">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      <AddToWatch movieId={movieId} />
      <ShareOnSocial />
    </div>
  );
}
