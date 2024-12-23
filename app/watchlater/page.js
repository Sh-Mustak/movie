"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getMoviesById, getUserWatchlist, removeFromWatchlist } from "@/app/actions"; // Make sure these are implemented
import useAuthContext from "@/app/context/AuthContext";
import EmptyList from "./EmptyList";
// import { getMoviesById } from "@/utils/api";

export default function WatchLater() {
    const { auth } = useAuthContext();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWatchlist = async () => {
            if (!auth?.user) return;

            try {
                // Fetch the user's watchlist
                const movieIds = await getUserWatchlist(auth.user._id);
                // console.log(movieIds);

                // Fetch movie details for each `movieId`
                const fetchedMovies = await Promise.all(
                    movieIds.map((movieId) => getMoviesById(movieId))
                );
                console.log(fetchedMovies);


                setMovies(fetchedMovies);
                console.log(movies);

            } catch (error) {
                console.error("Error fetching watchlist movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWatchlist();
    }, [auth]);

    const handleRemove = async (movieId) => {
        try {
            await removeFromWatchlist(auth.user._id, movieId);
            setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
        } catch (error) {
            console.error("Error removing movie from watchlist:", error);
        }
    };

    if (loading) {
        return <p className="text-center text-white">Loading...</p>;
    }
    console.log(movies);


    return (
        <div className="container mx-auto pt-24 pb-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white">Watch Later</h1>
                <p className="text-light/70 mt-2">
                    Movies you've saved to watch in the future
                </p>
            </header>

            {movies.length === 0 ? (
                <EmptyList />
            ) : (
                <div
                    id="watchLaterList"
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative"
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} // Replace with the actual movie poster field
                                alt={movie.title}
                                className="w-full h-[450px] object-cover"
                                height={288}
                                width={192}
                            />
                            <div
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                            >
                                <h2 className="text-xl font-bold text-light mb-2">{movie.title}</h2>
                                <div className="flex justify-between items-center">
                                    <span className="text-primary">{movie.release_date.split("-")[0]}</span>
                                    <button
                                        onClick={() => handleRemove(movie.id)}
                                        className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
