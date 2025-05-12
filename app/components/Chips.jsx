import React from 'react'

const Chips = (props) => {
    return (
        <div key={props.id} className='text-indigo-500 bg-indigo-200/30 p-2 text-xs rounded-lg pointer-events-none'>{props.name}</div>
    )
}

export default Chips