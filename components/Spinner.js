import React from 'react'

const Spinner = () => {
    return (
        <div className="relative flex justify-center items-center h-20">
            <div className="rounded animate-spin ease duration-300 w-8 h-8 border-2 border-yellow-500"></div>
        </div>
    )
}

export default Spinner