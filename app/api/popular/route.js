import { NextResponse } from 'next/server';

const TMDB_API_URL = process.env.BASE_URL;
const TMDB_API_KEY = process.env.API_KEY;

export async function GET() {
    try {
        const response = await fetch(`${TMDB_API_URL}/movie/popular?language=en-US&page=1&api_key=${TMDB_API_KEY}`);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
