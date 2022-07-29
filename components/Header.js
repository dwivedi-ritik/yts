import Link from "next/link"

const Header = () => {
    return (
        <header className="flex flex-col items-center md:flex-row md:justify-around my-3">
            <div className="flex ">
                <button className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <span className="ml-3 text-xl font-bold">Free Hollywood Movies</span>
                </button>
            </div>
            <ul className="flex items-center justify-center gap-3 text-base">
                <li className="px-2 py-1 rounded hover:outline outline-1">

                    <Link href="/" className="" aria-current="page">Home</Link>
                </li>
                <li className="px-2 py-1 rounded hover:outline outline-1">
                    <Link href="/search" className="">Search</Link>
                </li>
                <li className="px-2 py-1 rounded hover:outline outline-1">
                    <Link href="#about" className="">About</Link>
                </li>
                <li className="px-2 py-1 rounded hover:outline outline-1">
                    <Link href="#contact" className="">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header