import React from "react"
export default function Footer() {
    return (
        <footer className="text-gray-600 w-full flex justify-around my-3 px-4">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <span className="ml-3 text-sm  sm:text-lg font-bold">Free Hollywood Movies</span>
                </button>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500 text-mid font-bold" target="_blank" rel="noreferrer" href="https://github.com/dwivedi-ritik/yts/tree/deploy">
                        Github
                    </a>
                </span>
            </div>
        </footer>



    )
}