'use client';

import React from 'react';
import NavBar from './NavBar';
import '@/src/styles/globals.css';


const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <body className={`transition duration-150 px-7 lg:px-50 bg-white dark:bg-zinc-900`}>
            <NavBar />
            {children}
        </body>
    )
}

export default Body