import Image from "next/image";
import React from "react";

export default function SearchModal() {
    return (
        <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div class="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Search Movie</h2>
                    <button class="text-gray-400 hover:text-white">✕</button>
                </div>
                <input
                    type="text"
                    placeholder="Type movie name..."
                    class="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <div class="max-h-96 overflow-y-auto">
                    <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                        <Image
                            src="https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg"
                            alt="The Social Network"
                            class="w-16 h-24 object-cover rounded"
                            height={288}
                            width={192}
                        />
                        <div>
                            <h3 class="font-bold">The Social Network</h3>
                            <p class="text-sm text-gray-400">2010</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
