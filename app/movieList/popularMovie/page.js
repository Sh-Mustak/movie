import { getPopularMovies } from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default async function PopularMovie() {
    const data = await getPopularMovies();
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular on MOVIE DB</h2>
            <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
                {data.results.map((data, index) => (
                    <div key={data.id}
                        className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
                    >
                        <Link href={`/movie/${data.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                alt="Smile 2"
                                className="w-full rounded-lg"
                                height={288}
                                width={192}
                            />
                            <div className="mt-2">
                                <h3 className="text-light text-sm font-bold truncate">{data.title}</h3>
                                <p className="text-primary text-xs">{data.release_date.split("-")[0]}</p>
                            </div>
                        </Link>
                    </div>
                ))}



            </div>
        </section>
    )
}
