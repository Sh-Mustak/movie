"use client";
import { getSearchMovies } from "@/utils/api";
import SearchResults from "@/app/searchresult/page";
import useSearchContext from "@/app/context/Context";
import { useEffect } from "react";

export default function HeroSection() {
  const movies = [];
  const { searchValue } = useSearchContext();
  // Fetch movies
  // console.log(searchValue);

  // Return the appropriate UI based on movie data
  return movies.length > 0 ? (
    <SearchResults movies={movies} />
  ) : (
    <div
      id="hero"
      className="relative h-screen"
      style={{
        backgroundImage:
          'url("https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 p-12">
        <h1 id="heroTitle" className="text-5xl font-bold mb-4 text-white">
          Venom: The Last Dance
        </h1>
        <p id="heroOverview" className="text-lg max-w-2xl mb-4 text-white">
          Eddie and Venom are on the run. Hunted by both of their worlds and
          with the net closing in, the duo are forced into a devastating
          decision that will bring the curtains down on Venom and Eddie's last
          dance.
        </p>
        <button className="bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80">
          ▶ Play
        </button>
      </div>
    </div>
  );
}
