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



const urlToBlob = async (hash) => {
    let res = await fetch(`api/torrent/${hash}`)
    let reader = res.body.getReader()
    let strm = new ReadableStream({
        async start(controller) {
            while (true) {
                const { done, value } = await reader.read()
                if (done) {
                    break
                }
                controller.enqueue(value)
            }
            controller.close()
            reader.releaseLock()
        }
    })
    let respone = new Response(strm)
    let blob = await respone.blob()

    let url = await URL.createObjectURL(blob)
    return url
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

            // for (let i in movies.data.data.movies) {
            //     for (let j in movies.data.data.movies[i].torrents) {
            //         movies.data.data.movies[i].torrents[j].url = await urlToBlob(movies.data.data.movies[i].torrents[j].hash)
            //     }
            // }

            // console.log(movies.data.data)


            setLanding(<MovieList moviesdata={movies.data.data} />)
        }

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


