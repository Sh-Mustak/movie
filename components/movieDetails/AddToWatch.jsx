"use client";
import React, { useState, useEffect } from "react";
import PlusIcon from "../svgIcon/PlusIcon";
import AddedIcon from "../svgIcon/AddedIcon";
import useAuthContext from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  addToWatchlist,
  removeFromWatchlist,
  fetchUserWatchlist,
} from "@/app/actions"; // Add fetchUserWatchlist

export default function AddToWatch({ movieId }) {
  const router = useRouter();
  const { auth } = useAuthContext();
  const [watchList, setWatchList] = useState(false); // Component state for watchlist

  // Fetch user's watchlist and check if the movie is already added
  useEffect(() => {
    const checkWatchlist = async () => {
      if (auth.user) {
        try {
          const userWatchlist = await fetchUserWatchlist(auth.user._id);
          if (userWatchlist?.includes(movieId)) {
            setWatchList(true); // Set state to true if movie exists in the watchlist
          }
        } catch (error) {
          console.error("Error fetching watchlist:", error);
        }
      }
    };

    checkWatchlist();
  }, [auth.user, movieId]); // Re-run if user or movieId changes

  const handleList = async () => {
    if (!auth.user) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      try {
        if (!watchList) {
          // Add to watchlist
          await addToWatchlist(auth.user._id, movieId);
        } else {
          // Remove from watchlist
          await removeFromWatchlist(auth.user._id, movieId);
        }
        setWatchList((prev) => !prev); // Toggle state
      } catch (error) {
        console.error("Error updating watchlist:", error);
      }
    }
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        {!watchList ? (
          <div className="text-center">
            <button
              onClick={handleList}
              className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg"
            >
              <PlusIcon />
              Add to Watch List
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleList}
              className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600"
            >
              <AddedIcon />
              Added to Watch List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
