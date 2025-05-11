'use client'

import React from 'react'

const Button = (props) => {
    const redirectToLink = (link) => window.location.href = link;
    return (
        <button
            className={`px-5 py-2 ${props.bgcolor} ${props.textcolor} text-sm border cursor-pointer rounded-sm`}
            onClick={() => props.link && redirectToLink(props.link)}>{props.text}</button>
    )
}

export default Button