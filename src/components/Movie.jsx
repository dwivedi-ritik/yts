import React, { useState } from 'react'

import MovieDetails from './MovieDetails'

const Movie = (props) => {
    const movie = props.movie
    let [renderMovie, setMovie] = useState(false)

    let movieDetails
    if (renderMovie) {
        movieDetails = <MovieDetails data={movie} setMovieView={setMovie} />
    }
    return (
        <React.Fragment>
            {movieDetails}
            <div className="py-5 my-4 max-w-xl sm:max-w-xl mx-auto">
                <div className="bg-white shadow-lg border-gray-100 max-h-80	 border rounded-3xl sm:rounded-3xl p-8 flex space-x-8">
                    <div className="ml-4">
                        <img className="rounded-2xl shadow-lg" src={movie.medium_cover_image} alt=""></img>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold">{movie.title}</h2>
                            <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.rating}</div>
                        </div>
                        <div className="flex flex-col items-end space-y-1 mr-4">
                            <p className="text-gray-400 max-h-80">{movie.summary.substring(0, 160)}....</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" viewBox="0 0 20 20" onClick={() => setMovie(true)} fill="#fbbf24">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Movie