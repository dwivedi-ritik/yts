import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    const { moviesData } = props
    return (
        <div>
            {moviesData.map(el => <Movie movie={el} key={el.id} />)}
        </div>
    )
}


export default MovieList