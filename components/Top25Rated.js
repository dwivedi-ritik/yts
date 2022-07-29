import React from 'react'
import useSWR from 'swr'
import MovieList from './MovieList'
import Spinner from './Spinner'
const fetcher = (...args) => fetch(...args, {
    method: "POST",
    body: JSON.stringify({
        sort_by: "rating",
        limit: 6
    })
}).then((res) => res.json())

const Top25Rated = () => {
    const { data, error } = useSWR("/api/get_top_rated", fetcher)
    return (
        <div>
            <div className='max-w-5xl mx-auto my-5'>
                <p className='font-bold text-xl text-gray-800 text-center'>Top Rated Movies</p>
            </div>
            {(data) ? <MovieList moviesdata={data.data.data} /> : <Spinner />}
        </div>
    )
}

export default Top25Rated