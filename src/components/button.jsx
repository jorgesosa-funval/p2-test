import React from 'react'

export function Button({ contenido, color, setSearch }) {

    const handleClick = (e) => {
        setSearch(contenido)
    }

    return (
        <div>
            <button
                onClick={handleClick}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                style={{ backgroundColor: color }}
            >{contenido}</button>

        </div>
    )
}

