import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
    return (
        <header className="w-full">
            <nav className='flex py-10 justify-between'>
                <div className='flex gap-10'>
                    <Link className='text-2xl text-indigo-500 font-bold' href='/'>CHUAH, Wei Jie</Link>
                    <ul className='flex items-center gap-5 font-bold text-gray-500'>
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
                    <ThemeToggle/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar