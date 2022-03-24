import { useRef } from 'react'
import { useState } from 'react/'
import Link from "next/link"

import MovieList from './MovieList'
import Landing from './Landing'

const OpsErr = () => {
    return (
        <p className="text-sm text-center mt-4 text-gray-400">Ops there is nothing out there:(</p>
    )
}

const Spinner = () => {
    return (
        <div className="mt-8 mt-14 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-yellow-300"></div>
        </div>
    )
}

export default function SearchComp() {
    let [landing, setLanding] = useState(<Landing />)

    let usrInp = useRef()
    const getData = async (e) => {
        e.preventDefault()
        setLanding(<Spinner />)
        const movies = await fetch("api/get_movie", {
            method: "POST",
            body: JSON.stringify({
                query_term: usrInp.current.value,
                limit: 40
            })
        })
        movies = await movies.json()
        if (movies.data.data.movie_count != 0)
            setLanding(<MovieList moviesdata={movies.data.data} />)
        else setLanding(<OpsErr />)

    }

    return (
        <div>
            <form onSubmit={getData} >
                <div className="mt-4 flex justify-center sm:mt-15">
                    <input className="text-gray-700 shadow-sm rounded-l-full px-3 py-2 h-10  focus:outline-none bg-white"
                        id="search"
                        type="text"
                        placeholder="Search Movie"
                        ref={usrInp}></input>
                    <div className="">
                        <button className="bg-yellow-300 text-white h-10 px-2 rounded-r-full hover:bg-yellow-400 focus:outline-none"
                            onClick={getData}>
                            Search
                        </button>
                    </div>
                </div>
            </form>
            {landing}
        </div>
    )
}


