import React from 'react'

const BtnComp = (props) => {
    const { type, url } = props
    return (
        <div className="ml-2 mt-3">
            <a class="bg-yellow-400  px-2 py-3 rounded-lg text-xs font-bold sm:rounded-xl sm:px-6 sm:py-4 flex justify-center cursor-pointer hover:shadow-lg" target="_blank" rel="noreferrer" href={url}>{type}</a>
        </div>
    )
}

const MovieDetails = (props) => {

    const movie = props.data

    return (
        <div className="m-5 lg:mx-auto p-6 bg-white rounded-2xl shadow-2xl max-w-5xl relative">
            <div className="flex">
                <div className="block sm:flex">
                    <img src={movie.medium_cover_image} className="rounded-lg my-2 shadow-xl sm:shadow-2xl mx-auto sm:block cover" alt="movie poster" />
                    <div className="sm:ml-8 ">
                        <p className="text-lg sm:text-3xl font-bold  my-8">{movie.title}</p>
                        <div className="bg-yellow-400 text-white font-bold rounded-xl p-2 w-14 flex justify-center">{movie.rating}</div>

                        <div className="mt-4">
                            <p className="font-bold text-xl text-gray-800">Summary</p>
                            <p className="text-gray-600 my-3 text-gray-400 text-xs">{movie.summary}</p>
                        </div>

                        <div className="mt-5">
                            <p className="font-bold text-xl text-gray-800">The Genres</p>
                            <p className="text-gray-600 my-3  ">{movie.genres.join(" ")}</p>
                        </div>

                        <div className="mt-5">
                            <p className="font-bold text-xl text-gray-800">Movie time</p>
                            <p className="text-gray-600 my-3">{movie.runtime} minutes</p>
                        </div>
                        <div className="my-4 mx-auto">
                            <a class="bg-yellow-400 px-2 py-3 w-xl rounded-lg text-xs font-bold cursor-pointer hover:shadow-lg" target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}>Watch Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-3 gap-2">
                    {movie.torrents.map(el => <BtnComp type={el.quality} url={el.url} key={el.url} />)}
                </div>
                {/* <div class="mt-6 flex-col sm:flex space-x-5">
                    <input value="magent:8768726gjhgadjhadjaskdkdas" class="bg-gray-100 rounded-sm sm:rounded-lg p-1 sm:p-3 text-gray-500" />
                    <div className="flex justify-center my-3">
                        <button class="bg-yellow-400 text-xs text-white font-bold mx-auto rounded-xl px-2 py-3  sm:px-6 sm:py-4  hover:shadow-lg">Magnet Link</button>
                    </div>
                </div> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white absolute top-2 right-1 sm:h-8 w-8  sm:top-2 sm:right-2 cursor-pointer" viewBox="0 0 20 20" fill="#fbbf24" onClick={() => props.setMovieView(false)}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
        </div>

    )
}

export default MovieDetails


