import { getMoviesById } from "@/utils/api";
import Image from "next/image";
import React from "react";

export default async function Backround({ movieId }) {
  const movie = await getMoviesById(movieId);
  return (
    <div class="absolute inset-0">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="Smile 2"
        className="w-full h-full object-cover"
        height={888}
        width={792}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
    </div>
  );
}
