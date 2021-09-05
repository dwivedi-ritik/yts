import React from 'react'

const BtnComp = (props) => {
    const { type, url } = props
    return (
        <div className="ml-4">
            <a class="block bg-yellow-400 font-bold rounded-xl px-6 py-4 flex justify-center cursor-pointer hover:shadow-lg" target="_blank" href={url}>{type}</a>
        </div>
    )
}

const MovieDetails = (props) => {

    const movie = props.data

    return (
        <div class="m-10 lg:mx-auto p-6 bg-white rounded-2xl shadow-2xl max-w-5xl relative">
            <div class="flex">
                <div class="block sm:flex justify-betwee">
                    <img src={movie.medium_cover_image} class="rounded-lg shadow-2xl mx-auto sm:block" width="w-1/2" alt="movie poster" />
                    <div class="ml-8 ">
                        <p class="text-3xl my-8">{movie.title}</p>
                        <div class="bg-yellow-400 font-bold rounded-xl p-2 w-14 flex justify-center">{movie.rating}</div>

                        <div class="mt-4">
                            <p class="font-bold text-xl text-gray-800">Summary</p>
                            <p class="text-gray-600 my-3  ">{movie.summary}</p>
                        </div>

                        <div class="mt-5">
                            <p class="font-bold text-xl text-gray-800">The Genres</p>
                            <p class="text-gray-600 my-3  ">{movie.genres.join(" ")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <div className="flex">
                    {movie.torrents.map(el => <BtnComp type={el.quality} url={el.url} />)}
                </div>
                <div class="my-6 flex space-x-5">
                    <input value="magent:8768726gjhgadjhadjaskdkdas" class="bg-gray-100 rounded-lg p-3 text-gray-500" />
                    <button class="bg-yellow-400 font-bold rounded-xl px-6 py-4 flex justify-center hover:shadow-lg">Magnet Link</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-3 right-3 cursor-pointer" viewBox="0 0 20 20" fill="#fbbf24" onClick={() => props.setMovieView(false)}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
        </div>

    )
}

export default MovieDetails


