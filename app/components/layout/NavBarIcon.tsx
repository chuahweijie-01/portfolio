import React from 'react'
import ThemeToggle from '../common/ThemeToggle'
import Boop from '../animation/Boop'
import Link from 'next/link'

const NavBarIcon = () => {
    return (
        <div className='flex gap-3'>
            <Boop rotation={20}>
                <Link href='/career-path'>
                    <svg className='cursor-pointer feather feather-file-text' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </Link>
            </Boop>
            <Boop rotation={20}>
                <ThemeToggle />
            </Boop>
        </div>
    )
}

export default NavBarIcon