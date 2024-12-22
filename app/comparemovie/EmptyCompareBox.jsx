"use client";
import React, { useState } from "react";
import SearchModal from "./SearchModal";

export default function EmptyCompareBox({ id, handleRemove, handleUpdate }) {
  const [modal, setModal] = useState(false);

  const handleMovieSelect = (movie) => {
    handleUpdate(id, movie); // Notify parent about the selected movie
    setModal(false); // Close the modal
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      {/* Remove Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Select Movie */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <button
          onClick={() => setModal(true)}
          className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          Select Movie
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <SearchModal
          handleModal={() => setModal(false)}
          handleMovieSelect={handleMovieSelect}
        />
      )}
    </div>
  );
}
