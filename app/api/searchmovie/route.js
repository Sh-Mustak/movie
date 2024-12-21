import { NextResponse } from 'next/server';

const TMDB_API_URL = process.env.BASE_URL;
const TMDB_API_KEY = process.env.API_KEY;

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query'); // Get the 'query' parameter from the URL

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    try {
        const response = await fetch(`${TMDB_API_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${TMDB_API_KEY}`);
        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch data from TMDB' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
