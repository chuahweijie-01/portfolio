'use client'

import React from 'react'

interface ButtonProps {
    bgcolor?: string;
    textcolor?: string;
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={`px-5 py-2 ${props.bgcolor} ${props.textcolor} text-sm border cursor-pointer rounded-sm`}
            onClick={props.onClick}>{props.text}</button>
    )
}

export default Button