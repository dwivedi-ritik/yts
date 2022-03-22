export function Footer() {
    return (
        <footer className="text-gray-600 body-font ft">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-sm  sm:text-lg font-bold">YTS Clone</span>
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