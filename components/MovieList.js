import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    const moviesdata = props.moviesdata.movies
    return (
        <React.Fragment>
            <div className='max-w-5xl mx-auto'>
                <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 px-3 sm:px-0 justify-items-center'>
                    {moviesdata.map(el => <Movie movie={el} key={el.id} />)}
                </div>

            </div>
        </React.Fragment>
    )
}


export default MovieList
