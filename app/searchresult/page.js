// "use client";

// import { useEffect, useState } from "react";
// import useSearchContext from "@/app/context/Context";
import Image from "next/image";
import Link from "next/link";
import { getSearchMovies } from "@/utils/api";

export default function SearchResults({ searchValue }) {
    // const movies = await getSearchMovies(searchValue);
    // console.log(movies[0].title);
    const movies = searchValue.length > 0 ? [...searchValue] : [];
    return (
        <main className="container mx-auto px-4 pt-24 pb-8">
            {/* Search Stats */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    {/* {searchValue} */}
                </h1>
                <p className="text-gray-400">Found {movies.length} results</p>
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies?.map((movie) => (
                    <Link
                        key={movie.id}
                        href={`/movie/${movie.id}`} // Update to dynamic details page route
                        className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full aspect-[2/3] object-cover"
                            height={288}
                            width={192}
                        />
                        <div className="p-4">
                            <h3 className="font-bold mb-2">{movie.title}</h3>
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>{movie.release_date?.split("-")[0] || "N/A"}</span>
                                <span>⭐ {movie.vote_average || "N/A"}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
