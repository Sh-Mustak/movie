/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'


export default function SearchResults({ movies }) {
    console.log(movies);

    return (
        <main classNameName="container mx-auto px-4 pt-24 pb-8">
            {/* <!-- Search Stats --> */}
            <div classNameName="mb-6">
                <h1 classNameName="text-2xl font-bold">Search Results for "Avatar"</h1>
                <p classNameName="text-gray-400">Found 48 results</p>
            </div>

            {/* <!-- Filters and Sort Section --> */}
            <div classNameName="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* <!-- Movie Card 1 --> */}
                {
                    movies.map((movie, i) => (
                        <Link key={movie.id}
                            href="details.html"
                            classNameName="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt="Avatar: The Way of Water"
                                classNameName="w-full aspect-[2/3] object-cover"
                                height={288}
                                width={192}
                            />
                            <div classNameName="p-4">
                                <h3 classNameName="font-bold mb-2">{movie.title}</h3>
                                <div classNameName="flex justify-between text-sm text-gray-400">
                                    <span>2022</span>
                                    <span>⭐ 7.7</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }


                {/* <!-- Add more dummy results as needed --> */}
            </div>
        </main>
    )
}
