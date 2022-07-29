import React, { useEffect, useState } from 'react'

import Spinner from "./Spinner"
import { urlToBlob, imgToBlob } from '../utils'
import NotYetLoaded from './NotYetLoaded'

const Tags = ({ tag }) => {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2" > {tag}</span>
    )
}

const BtnComp = (props) => {
    const { type, url, file } = props
    return (
        <div className="ml-2 mt-3">
            <a className="bg-yellow-400  px-2 py-3 rounded-lg text-xs font-bold sm:rounded-xl sm:px-6 sm:py-4 flex justify-center cursor-pointer hover:shadow-lg"
                target="_blank" rel="noreferrer" href={url} download={file + ".torrent"}
            >{type}</a>
        </div>
    )
}
const Img = ({ src }) => {
    return (
        <img className="w-auto" src={src} alt="movie poster" />
    )

}
const MovieDetails = (props) => {
    const movie = props.data
    let [downloadBtn, setDownloadBtn] = useState(false)
    let [showImage, setShowImg] = useState(false)

    useEffect(async () => {
        for (let i in props.data.torrents) {
            movie.torrents[i].url = await urlToBlob(props.data.torrents[i].hash)
        }
        setDownloadBtn(true)
        movie.medium_cover_image = await imgToBlob(props.data.slug)
        setShowImg(true)

    }, [])
    return (
        <div className="mt-14 px-3 md:px-0 mx-auto px-3 shadow-md max-w-5xl">
            <div className="flex flex-col gap-3 justify-around md:flex-row ">
                {(showImage ? <Img src={movie.medium_cover_image} /> : <NotYetLoaded />)}
                <div className="px-2">
                    <p className="text-2xl font-bold ">{movie.title}</p>
                    <div className="bg-yellow-400 text-white font-bold rounded-xl p-2 w-14 flex justify-center">{movie.rating}</div>

                    <div className="mt-4">
                        <p className="font-bold text-xl text-gray-800">Summary</p>
                        <p className="text-gray-600 my-3 text-gray-600 text-base">{movie.description_full}</p>
                    </div>

                    <div className="mt-5">
                        <p className="font-bold text-xl text-gray-800">The Genres</p>
                        <div className="px-1 my-3 md:px-3 mx-auto">
                            {movie.genres.map(el => <Tags tag={el} key={el} />)}
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="font-bold text-xl text-gray-800">Movie time</p>
                        <p className="text-gray-600 my-3">{movie.runtime} minutes</p>
                    </div>
                    <div className="my-4 mx-auto">
                        <a className="bg-yellow-400 px-2 py-3 w-xl rounded-lg text-xs font-bold cursor-pointer hover:shadow-lg" target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}>Watch Trailer</a>
                    </div>
                </div>

            </div>
            <div className="py-8 flex flex-col items-center">
                <p className="block font-bold text-xl text-gray-800">Downloads</p>
                <div className="grid grid-cols-3 gap-2">
                    {downloadBtn ? movie.torrents.map(el => <BtnComp type={el.quality} url={el.url} key={el.hash} file={movie.slug} />) : <Spinner />}
                </div>
            </div>

        </div>

    )
}

export default MovieDetails


