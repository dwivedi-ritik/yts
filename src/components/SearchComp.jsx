import React from 'react'
import axios from 'axios'

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


class SearchComp extends React.Component {
    constructor() {
        super()
        this.state = {
            usrInp: '',
            showList: false,
            showSpinner: false,
            showLanding: true,
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
        try {
            const res = await axios(obj)
            const data = await res.data
            console.log(data)

            if (data.data.movie_count !== 0)
                return data.data.movies
            else {
                return null
            }

        }
        catch (err) {
            return null
        }
    }

    searchMovie = async () => {
        const { usrInp } = this.state
        if (usrInp) {
            this.setState(() => {
                return {
                    showSpinner: true,
                    showList: false,
                    showLanding: false
                }
            })
            const moviesData = await this.fetchMovies(usrInp)
            this.setState(() => {
                return { showList: true, moviesData, showSpinner: false }
            })
        }
    }
    render() {
        const { usrInp, showList, moviesData, showSpinner, showLanding } = this.state
        let movieList, spin, landing
        spin = showSpinner ? <Spinner /> : null
        landing = showLanding ? <Landing /> : null

        if (showList && moviesData !== null) {
            movieList = <MovieList moviesData={moviesData} />
        } else if (moviesData === null) {
            movieList = <OpsErr />
        }
        return (
            <React.Fragment>
                <div className="mt-4 sm:mt-15 mx-auto">
                    <div className="flex justify-center items-center  sm:w-2xl">
                        <input className="text-gray-700 shadow-sm rounded-l-full px-3 sm:p-6 h-12 sm:w-6xl focus:outline-none" id="search" type="text" value={usrInp} onChange={this.getInpVal} placeholder="Search Movie"></input>
                        <div className="">
                            <button onClick={this.searchMovie} className="bg-yellow-300 text-white h-12 p-3 rounded-r-full hover:bg-yellow-400 focus:outline-none">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {spin}
                {movieList}
                {landing}
            </React.Fragment>
        )
    }
}



export default SearchComp