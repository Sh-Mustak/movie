"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchModal from "./SearchModal";

export default function EmptyCompareBox({ handleCount }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleCount}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <Link
          onClick={() => setModal(!modal)}
          href={""}
          className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          Select Movie
        </Link>
      </div>
      {modal && <SearchModal handleModal={() => setModal(!modal)} />}
    </div>
  );
}
