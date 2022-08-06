import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            <Head>
                <title>Free Hollywood Movies About</title>
                <meta description="A movie site to download hollywood"></meta>
            </Head>
            <Header />
            <div className="my-12 md:my-20">
                <div className="mt-10 flex justify-center px-8">
                    <div>
                        <div className="my-3 text-base md:text-lg">
                            <p className="text-xl md:text-xl font-bold text-gray-800 font-serif text-start">About the site</p>
                            <ul className="list-disc">
                                <li>This site is made for learning purpose only. Any informations or images associated with any movies
                                    doesn't belong to this site</li>
                                <li>Neither do this sites own any of the movies or informations related to those movies.</li>

                            </ul>
                        </div>
                        <div className="my-6 text-base md:text-lg" >
                            <p className="text-lg font-bold text-gray-800 font-serif">Public Domain</p>
                            <ul className="list-disc">
                                <li>All the movies data are available in the public domain.</li>
                                <li>All the links associated with the movies are fetched from mutliple other available sources on the internet</li>
                            </ul>

                        </div>
                        <div className="my-6 text-base md:text-lg">
                            <p className="text-lg font-bold text-gray-800 font-serif">Final Verdict</p>
                            <ul className="list-disc">
                                <li>These sites uses Public APIs. APIs that other sites provides for public usage.</li>
                                <li>Site doesn't encourage piracy in anyway but do promote freedom of the information.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}