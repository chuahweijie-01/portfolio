'use client';

import React from 'react';
import NavBar from "./NavBar";
import useDarkTheme from '../hooks/useDarkTheme';

const Body = ({ children }) => {
    const bgColor = useDarkTheme() ? 'bg-black' : 'bg-white';
    return (
        <body className={`${bgColor} px-20 lg:px-50`}>
            <NavBar />
            {children}
        </body>
    )
}

export default Body