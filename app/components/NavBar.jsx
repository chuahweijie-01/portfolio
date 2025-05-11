'use client';

import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Boop from './Boop'
import useDarkTheme from '../hooks/useDarkTheme';

const NavBar = () => {
    const bgColor = useDarkTheme() ? "bg-black" : "bg-white";
    const fontColor = useDarkTheme() ? "text-white" : "text-gray-500";

    return (
        <header className={`w-full ${bgColor}`}>
            <nav className='flex py-10 justify-between'>
                <div className='flex gap-10'>
                    <Link className='text-2xl text-indigo-500 font-bold' href='/'>CHUAH, Wei Jie</Link>
                    <ul className={`flex items-center gap-5 font-bold ${fontColor}`}>
                        <li>
                            <Link href='/'>About</Link>
                        </li>
                        <li>
                            <Link href='/'>Project</Link>
                        </li>
                        <li>
                            <Link href='/'>Blog</Link>
                        </li>
                        <li>
                            <Link href='/'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Boop rotation={20}>
                        <ThemeToggle />
                    </Boop>
                </div>
            </nav>
        </header>
    )
}

export default NavBar