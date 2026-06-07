'use client';

import Link from 'next/link'
import React from 'react'
import NavBarIcon from './NavBarIcon'
import NavDropDown from '../ui/NavDropDown';

const NavBar = () => {
    const items = [
        // { title: 'Operator Lookup', icon: '', url: 'operator-lookup' },
        { title: 'Motion', icon: '', url: 'motion' }
    ]

    return (
        <header className={`w-full transparent`}>
            <nav className='flex py-10 justify-between'>
                <div className='flex gap-5 lg:gap-10 flex-col sm:flex-row'>
                    <Link className='text-base lg:text-xl text-indigo-500 font-bold' href='/'>CHUAH, Wei Jie</Link>
                    <ul className={`flex items-center gap-3 lg:gap-5 text-gray-500 dark:text-white text-sm lg:text-base`}>
                        <li> <Link href='/'>Blog</Link> </li>
                        <li> <Link href='/about'>About</Link> </li>
                        <li> <Link href='/contact'>Contact</Link> </li>
                        <li> <NavDropDown title='Utilities' items={items} /> </li>
                    </ul>
                </div>
                <div>
                    <NavBarIcon />
                </div>
            </nav>
        </header>
    )
}

export default NavBar