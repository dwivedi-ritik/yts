import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="">
            <Header />
            <div className="">
                <p className="text-xl font-bold text-gray-600">About</p>
                <div className="text-sm text-start">
                    <p>This site is made for learning purpose only. Any of these data doesn't belong to this site</p>
                    <p>All the movies data and torrents are fetch from some other 3rd part APIs.</p>
                    <p></p>
                </div>

            </div>
            <Footer />
        </div>
    )
}