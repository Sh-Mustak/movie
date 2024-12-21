import React from "react";
import ShareOnSocial from "./ShareOnSocial";
import PlusIcon from "../svgIcon/PlusIcon";
import AddedIcon from "../svgIcon/AddedIcon";
import Image from "next/image";
import { getMonth, getMoviesById } from "@/utils/api";

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
        <span>127 min</span>
      </div>

      <p class="text-lg mb-6">{data.overview}</p>

      <div class="mb-6">
        <h3 class="text-gray-400 mb-2">Genres</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm">
            Horror{" "}
          </span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm">
            Mystery
          </span>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-gray-400 mb-2">Cast</h3>
        <div class="flex flex-wrap gap-4">
          <div class="text-center">
            <Image
              src="https://image.tmdb.org/t/p/original/6OLe7TskbEvYpo36eITfX91VoCP.jpg"
              alt="Naomi Scott"
              class="w-24 h-24 rounded-full object-cover mb-2"
              height={288}
              width={192}
            />
            <p class="text-sm">Naomi Scott</p>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <div class="flex flex-wrap gap-4">
          <div class="text-center">
            <button class="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
              <PlusIcon />
              Add to Wacth List
            </button>
          </div>

          <div class="text-center">
            <button class="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
              <AddedIcon />
              Added to Wacth List
            </button>
          </div>
        </div>
      </div>
      <ShareOnSocial />
    </div>
  );
}
