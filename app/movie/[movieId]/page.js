import Backround from '@/components/movieDetails/Backround'
import LeftSide from '@/components/movieDetails/LeftSide'
import MoreLikeThis from '@/components/movieDetails/MoreLikeThis/MoreLikeThis'
import RightSide from '@/components/movieDetails/RightSide'
import React from 'react'

export default function MovieDetails({ params: { movieId } }) {
    return (
        <>
            <div id="movieDetails" class="min-h-screen pt-20 mb-8">
                <div class="relative h-screen">
                    <h1>{movieId}</h1>
                    <Backround movieId={movieId} />
                    <div class="relative container mx-auto px-4 pt-32">
                        <div class="flex flex-col md:flex-row gap-8">
                            <LeftSide movieId={movieId} />
                            <RightSide movieId={movieId} />
                        </div>
                    </div>
                </div>
            </div>
            <MoreLikeThis movieId={movieId} />
        </>

    )
}
