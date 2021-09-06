import React from 'react'
import axios from 'axios'

import MovieList from './MovieList'

const OpsErr = () => {
    return (
        <p className="text-sm text-center mt-4 text-gray-400">Ops there is nothing out there:(</p>
    )
}

class SearchComp extends React.Component {
    constructor() {
        super()
        this.state = {
            usrInp: '',
            showList: false,
            moviesData: []
        }
    }
    getInpVal = (e) => {
        this.setState({ usrInp: e.target.value })
    }
    fetchMovies = async (searchQuery) => {
        const obj = {
            method: 'post',
            url: 'https://yts-api-jvdv1fpxm-dwivedi-ritik.vercel.app/',
            data: {
                query_term: searchQuery
            }
        }
        const res = await axios(obj)
        const data = await res.data
        console.log(data)
        if (data.data.movie_count !== 0)
            return data.data.movies
        return null
    }

    searchMovie = async () => {
        const { usrInp } = this.state
        if (usrInp) {
            const moviesData = await this.fetchMovies(usrInp)
            this.setState({ showList: true, moviesData })
        }
    }
    render() {
        const { usrInp, showList, moviesData } = this.state
        let movieList
        if (showList && moviesData !== null) {
            movieList = <MovieList moviesData={moviesData} />
        } else if (moviesData === null) {
            movieList = <OpsErr />
        }
        return (
            <React.Fragment>
                <div className="mt-4 sm:mt-15 mx-auto">
                    <div className="flex justify-center items-center w-30">
                        <input className="text-gray-700 shadow-sm rounded-l-full p-6 h-12 w-auto sm:w-6xl focus:outline-none" id="search" type="text" value={usrInp} onChange={this.getInpVal} placeholder="Search Movie"></input>
                        <div className="">
                            <button onClick={this.searchMovie} className="bg-yellow-300 text-white h-12 p-3 rounded-r-full hover:bg-yellow-400 focus:outline-none">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {movieList}
            </React.Fragment>
        )
    }
}



export default SearchComp