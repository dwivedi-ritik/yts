import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MovieDetails from "../../components/MovieDetails";
import Spinner from "../../components/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Movie() {
    const router = useRouter()
    let { m_id } = router.query

    const { data, error } = useSWR('/api/movie/' + m_id, fetcher)

    return (
        <div>
            <Header />
            {(data) ? <MovieDetails data={data.response.movie} /> : <Spinner />}
            <Footer />
        </div>
    )









}
