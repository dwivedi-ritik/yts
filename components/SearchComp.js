import { useRef } from 'react'
import { useState } from 'react/'

import MovieList from './MovieList'
import Spinner from './Spinner'
import Landing from './Landing'
const OpsErr = () => {
    return (
        <p className="text-sm text-center mt-4 text-gray-400">Ops there is nothing out there:(</p>
    )
}

export default function SearchComp() {
    let [landing, setLanding] = useState(<Landing />)

    let usrInp = useRef()
    const getData = async (e) => {
        e.preventDefault()
        setLanding(<Spinner />)
        const movies = await fetch("/api/get_movie_list", {
            method: "POST",
            body: JSON.stringify({
                query_term: usrInp.current.value,
                sort_by: "rating",
                limit: 40
            })
        })
        movies = await movies.json()
        if (movies.data.data.movie_count != 0) {

            setLanding(<MovieList moviesdata={movies.data.data} />)
        }

        else setLanding(<OpsErr />)

    }

    return (
        <div>
            <form onSubmit={getData}>
                <div className="flex flex-col my-4 items-center text-base">
                    <div className="w-xl px-3 flex items-baseline gap-2">
                        <div>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text" placeholder="Search Your Movie" ref={usrInp}>
                            </input>
                        </div>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={getData}>
                            Search
                        </button>
                    </div>
                    <p className="text-gray-600 text-xs italic align-center">Search your favorite hollywood movies and shows.</p>
                </div>

            </form>
            {landing}

        </div>
    )
}

// Legacy codes


