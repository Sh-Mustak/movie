/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import EmptyList from './EmptyList'

export default function WatchLater() {
    return (
        <div className="container mx-auto pt-24 pb-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white">Watch Later</h1>
                <p className="text-light/70 mt-2">
                    Movies you've saved to watch in the future
                </p>
            </header>

            <div
                id="watchLaterList"
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {/* <!-- Movie Card Template --> */}
                <div
                    className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative"
                >
                    <Image
                        src="https://image.tmdb.org/t/p/original/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg"
                        alt="Armor"
                        className="w-full h-[450px] object-cover"
                        height={288}
                        width={192}
                    />
                    <div
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                    >
                        <h2 className="text-xl font-bold text-light mb-2">Armor</h2>
                        <div className="flex justify-between items-center">
                            <span className="text-primary">2010</span>
                            <button
                                className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <EmptyList />

        </div>
    )
}
