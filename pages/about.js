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
                <p className="text-3xl font-bold text-gray-800 font-serif text-center underline">About the site</p>

                <div className="mt-10 flex justify-center px-3">
                    <div>
                        <div className="my-3 text-lg">
                            <p>This site is made for learning purpose only. Any informations or images associated with any movies
                                doesn't belong to this site</p>
                            <p>Neither do this sites own any of the movies or informations related to those movies.</p>
                        </div>
                        <div className="my-6 text-lg" >
                            <p className="text-xl font-bold text-gray-800 font-serif">Only usage information available in public domain</p>
                            <p>All the movies data are available in the public domain.</p>
                            <p>All the links associated with the movies are fetched from mutliple other available sources on the internet</p>

                        </div>
                        <div className="my-6 text-lg">
                            <p className="text-xl font-bold text-gray-800 font-serif">Final Verdict</p>
                            <p>These sites uses Public APIs. APIs that other sites provides for public usage.</p>
                            <p>Site doesn't encourage piracy in anyway but do promote freedom of the information.</p>
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