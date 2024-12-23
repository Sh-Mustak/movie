import { getMonth, getMoviesById } from "@/utils/api";
import AddToWatch from "./AddToWatch";
import ShareOnSocial from "./ShareOnSocial";

export default async function RightSide({ movieId }) {
  const data = await getMoviesById(movieId);
  const release_date = data.release_date.split("-");
  const month = getMonth(release_date[1]);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      <div className="flex items-center mb-4 space-x-4">
        <span className="text-green-500">
          {release_date[0]} {month} {release_date[2]}
        </span>
        <span>| </span>
        <span>{data.runtime} min</span>
      </div>

      <p className="text-lg mb-6">{data.overview}</p>

      <div className="mb-6">
        <h3 className="text-gray-400 mb-2">Genres</h3>
        <div className="flex flex-wrap gap-2">
          {data.genres.map((genre, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 rounded-full text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>

      <AddToWatch movieId={movieId} />
      <ShareOnSocial
        image={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        title={data.title}
        description={data.overview}
        // commnet
      />
    </div>
  );
}
