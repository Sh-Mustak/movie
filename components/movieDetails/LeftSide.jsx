import { getMoviesById } from "@/utils/api";
import Image from "next/image";
import React from "react";

export default async function LeftSide({ movieId }) {
  const movie = await getMoviesById(movieId);
  // console.log(movie);

  return (
    <div class="md:w-1/3">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="Smile 2"
        className="w-full rounded-lg shadow-lg"
        height={288}
        width={192}
      />
    </div>
  );
}
