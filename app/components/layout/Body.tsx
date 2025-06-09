'use client';

import useDarkTheme from '@/app/hooks/useDarkTheme';
import React from 'react';
import NavBar from './NavBar';


const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
    const bgColor = useDarkTheme() ? 'bg-zinc-900' : 'bg-white';
    return (
        <body className={`${bgColor} px-7 lg:px-50 bg-zin`}>
            <NavBar />
            {children}
        </body>
    )
}

export default Body