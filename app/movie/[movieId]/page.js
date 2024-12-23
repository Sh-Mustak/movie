import Backround from '@/components/movieDetails/Backround'
import LeftSide from '@/components/movieDetails/LeftSide'
import MoreLikeThis from '@/components/movieDetails/MoreLikeThis/MoreLikeThis'
import RightSide from '@/components/movieDetails/RightSide'
import { getMoviesById } from '@/utils/api'

export async function generateMetadata({ params }) {
    const movie = await getMoviesById(params.movieId) // Adjusted to use movieId from params
    return {
        title: movie.title,
    }
}

export default async function MovieDetails({ params: { movieId } }) {
    return (
        <>
            <div id="movieDetails" className="min-h-screen pt-20 mb-8">
                <div className="relative h-screen">
                    <h1>{movieId}</h1>
                    <Backround movieId={movieId} />
                    <div className="relative container mx-auto px-4 pt-32">
                        <div className="flex flex-col md:flex-row gap-8">
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
