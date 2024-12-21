const TMDB_API_URL = process.env.BASE_URL;
const TMDB_API_KEY = process.env.API_KEY;
export async function getTrendingMovies() {
    try {
        const response = await fetch('http://localhost:3000/api/trending',

            //  { cache: 'no-store' }
        ); // Avoid stale data
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        return response.json();
    } catch (error) {
        console.error('Error in getTrendingMovies:', error);
        throw error;
    }
}
export async function getPopularMovies() {
    try {
        const response = await fetch('http://localhost:3000/api/popular',
            // { cache: 'no-store' }
        ); // Avoid stale data
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        return response.json();
    } catch (error) {
        console.error('Error in getTrendingMovies:', error);
        throw error;
    }
}
export async function getTopRatedMovies() {
    try {
        const response = await fetch('http://localhost:3000/api/top_rated',
            //  { cache: 'no-store' }
        ); // Avoid stale data
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        return response.json();
    } catch (error) {
        console.error('Error in getTrendingMovies:', error);
        throw error;
    }
}
export const getMoviesById = async (id) => {
    const response = await fetch(`${TMDB_API_URL}/movie/${id}?api_key=${TMDB_API_KEY}`);
    const data = await response.json();
    return data;
}
export const getSimilarMovies = async (id) => {
    const response = await fetch(`${TMDB_API_URL}/movie/${id}/similar?language=en-US&page=1&api_key=${TMDB_API_KEY}`);
    const data = await response.json();
    return data;
}
export const getMonth = (index) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[index - 1]
}

export const getSearchMovies = async (query) => {
    const TMDB_API_URL = "https://api.themoviedb.org/3/search/movie";
    const TMDB_BEARER_TOKEN = process.env.ACCESS_TOKEN; // Securely fetch from environment variables

    if (!query) {
        console.warn("No query provided to getSearchMovies.");
        return [];
    }

    try {
        const response = await fetch(`${TMDB_API_URL}?query=${encodeURIComponent(query)}&page=1`, {
            headers: {
                Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(
                `Error fetching movies: ${response.statusText} - ${errorDetails.status_message || "No details"}`
            );
        }

        const data = await response.json();
        return data.results || []; // Safely return movie results
    } catch (error) {
        console.error("Error in getSearchMovies:", error.message);
        return [];
    }
};
