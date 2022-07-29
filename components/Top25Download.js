import React from 'react'
import useSWR from 'swr'
import MovieList from './MovieList'
import Spinner from './Spinner'
const fetcher = (...args) => fetch(...args, {
    method: "POST",
    body: JSON.stringify({
        sort_by: "download_count",
        limit: 6
    })
}).then((res) => res.json())

const Top25Download = () => {
    const { data, error } = useSWR("/api/get_movie_list", fetcher)
    return (
        <div>
            <div className='max-w-5xl mx-auto my-5'>
                <p className='font-bold text-xl text-gray-800 text-center'>Top Downloads Movies</p>
            </div>
            {(data) ? <MovieList moviesdata={data.data.data} /> : <Spinner />}
        </div>
    )
}

export default Top25Download