import { useRef } from 'react'
import { useState } from 'react/'

import MovieList from './MovieList'
import Landing from './Landing'
import Spinner from './Spinner'

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
        const movies = await fetch("api/get_movie", {
            method: "POST",
            body: JSON.stringify({
                query_term: usrInp.current.value,
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
                <div class="flex flex-wrap mx-3 mb-6 justify-center">
                    <div class="w-xl px-3 flex items-baseline gap-2">
                        <div>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"
                                type="text" placeholder="Search Your Movie" ref={usrInp}>
                            </input>
                            <p class="text-gray-600 text-xs italic">Search your favorite hollywood movies and shows.</p>
                        </div>
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={getData}>
                            Button
                        </button>
                    </div>
                </div>

            </form>
            {landing}

        </div>
    )
}

// Legacy codes


