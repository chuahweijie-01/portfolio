'use client'

import React from 'react'

const Button = (props) => {
    return (
        <button
            className={`px-5 py-2 ${props.bgcolor} ${props.textcolor} text-sm border cursor-pointer rounded-sm`}
            onClick={props.onClick}>{props.text}</button>
    )
}

export default Button