import React from "react"
import Link from "next/link"
export default function Footer() {
    return (
        <footer className="my-5">
            <div class="flex justify-center items-center lg:justify-around py-6  border-t border-gray-300">
                <div class="mr-12 hidden lg:block">
                    <span>Get other useful pages: </span>
                </div>
                <ul className="flex items-center justify-center gap-3 text-base">
                    <li className="">
                        <Link href="/" className="" aria-current="page">Home</Link>
                    </li>
                    <li className="">
                        <Link href="/search" className="">Search</Link>
                    </li>
                    <li className="">
                        <Link href="#about" className="">About</Link>
                    </li>
                    <li className="">
                        <Link href="#contact" className="">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="px-5 py-8 mx-auto flex justify-around items-center sm:flex-row flex-col">
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
            <div className="mx-auto flex justify-center text-sm">
                <p className="text-center inline">© 2021 Copyright:&nbsp;&nbsp; </p>
                <span className="">  All right reserved</span>

            </div>
        </footer >



    )
}