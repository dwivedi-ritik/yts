import React from 'react'

const Spinner = () => {
    return (
        <div className="mt-8 mt-14 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-yellow-300"></div>
        </div>
    )
}

export default Spinner