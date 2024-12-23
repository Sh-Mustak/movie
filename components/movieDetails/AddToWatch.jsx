"use client";
import React, { useState } from "react";
import PlusIcon from "../svgIcon/PlusIcon";
import AddedIcon from "../svgIcon/AddedIcon";
import useAuthContext from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AddToWatch() {
  const router = useRouter();
  const { auth } = useAuthContext();
  const [watchList, setWatchList] = useState(false); // Only use component state

  const handleList = () => {
    if (!auth.user) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setWatchList((prev) => !prev); // Toggle watchList state on click
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
