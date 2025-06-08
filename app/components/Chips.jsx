import React from 'react'

const Chips = ({ tech }) => {
    return (
        <span key={Math.random()} className='text-indigo-500 bg-indigo-200/30 p-2 text-xs rounded-lg pointer-events-none'>{tech}</span>
    )
}

export default Chips