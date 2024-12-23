import React from 'react'
import PopularMovie from './popularMovie/page'
import TrendingMovie from './trendingMovie/page'
import TopRatedMovie from './topRatedMovie/page'


export default async function MovieLists() {



    return (
        <div className='container mx-auto px-4 py-8'>
            <PopularMovie />
            <TrendingMovie />
            <TopRatedMovie />
        </div>
    )
}
