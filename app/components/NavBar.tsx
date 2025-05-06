import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <header className="w-full bg-white font-bold text-gray-500">
            <nav className='flex justify-between py-10'>
                <Link href='/'>CHUAH, Wei Jie</Link>
                <ul className='flex items-center gap-5'>
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
            </nav>
        </header>
    )
}

export default NavBar