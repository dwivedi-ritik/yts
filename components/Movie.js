import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { imgToBlob } from '../utils'
import NotYetLoaded from './NotYetLoaded'

const Tags = ({ tag }) => {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" > {tag}</span>
    )
}

const Img = ({ src }) => {
    return <img className="w-full max-h-25 object-top" src={src} alt=""></img>
}
const Movie = (props) => {
    const movie = props.movie
    let [showImg, setShowImg] = useState(false)
    useEffect(async () => {
        movie.large_cover_image = await imgToBlob(props.movie.slug)
        setShowImg(true)
    }, [])

    return (
        <React.Fragment>
            <Link target="_blank" href={"/movie/" + movie.id} rel="noopener noreferrer">
                <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl">
                    {((showImg) ? <Img src={movie.large_cover_image} /> : <NotYetLoaded />)}
                    <div className="px-6 py-4">
                        <div className='flex justify-between items-center'>
                            <div className="font-bold text-xl mb-2">{movie.title}</div>
                            <div className="bg-yellow-400 rounded-sm h-4 p-3 sm:h-6 flex justify-center items-center"><p className="text-xs text-bold text-white">{movie.rating}</p></div>
                        </div>
                        <p className="text-gray-700 text-base">
                            {movie.summary.substring(0, 160)}....
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {movie.genres.map(el => <Tags tag={el} key={el} />)}

                    </div>
                </div>
            </Link>
        </React.Fragment >
    )
}

export default Movie