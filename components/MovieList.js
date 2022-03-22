import React from 'react'
import Movie from './Movie'
import { Footer } from './Landing'
const MovieList = (props) => {
    const moviesdata = props.moviesdata.movies

    return (
        <div>
            {moviesdata.map(el => <Movie movie={el} key={el.id} />)}
        </div>
    )
}


export default MovieList
