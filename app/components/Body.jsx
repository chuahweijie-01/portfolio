'use client';

import React from 'react';
import NavBar from "./NavBar";
import useDarkTheme from '../hooks/useDarkTheme';

const Body = ({ children }) => {
    const bgColor = useDarkTheme() ? 'bg-zinc-900' : 'bg-white';
    return (
        <body className={`${bgColor} px-7 lg:px-50 bg-zin`}>
            <NavBar />
            {children}
        </body>
    )
}

export default Body