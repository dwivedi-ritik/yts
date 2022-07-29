import React, { useEffect, useState } from 'react'

import Spinner from "./Spinner"
import { urlToBlob, imgToBlob } from '../utils'
import NotYetLoaded from './NotYetLoaded'


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
        <img className="rounded-lg my-2 shadow-xl sm:shadow-2xl mx-auto sm:block cover" src={src} alt="movie poster" />
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
        <div className="m-5 lg:mx-auto p-6 bg-white rounded-2xl shadow-2xl max-w-5xl">
            <div className="flex">
                <div className="block sm:flex">
                    {/* <img src={(downloadBtn ? movie.medium_cover_image : "")} className="rounded-lg my-2 shadow-xl sm:shadow-2xl mx-auto sm:block cover" alt="movie poster" /> */}
                    {(showImage ? <Img src={movie.medium_cover_image} /> : <NotYetLoaded />)}
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
                            <a className="bg-yellow-400 px-2 py-3 w-xl rounded-lg text-xs font-bold cursor-pointer hover:shadow-lg" target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}>Watch Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-3 gap-2">
                    {downloadBtn ? movie.torrents.map(el => <BtnComp type={el.quality} url={el.url} key={el.hash} file={movie.slug} />) : <Spinner />}
                </div>
            </div>

        </div>

    )
}

export default MovieDetails


