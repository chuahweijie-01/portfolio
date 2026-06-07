import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type NavProps = {
    title: string;
    url: string;
    icon: string;
}

type Props = {
    title: string;
    items: NavProps[];
}

const NavDropDown = ({ title, items }: Props) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [open]);

    return (
        <div className='relative inline-block' ref={dropdownRef}>
            <button
                type='button'
                onClick={handleToggle}
                aria-haspopup='menu'
                aria-expanded={open}
                className='inline-flex items-center gap-2 text-current cursor-pointer'
            >
                {title}
            </button>

            <div
                className={
                    'absolute left-0 top-full mt-2 z-20 min-w-[20rem] rounded-2xl border border-zinc-200 bg-white py-2 shadow-xl transition-all duration-200 ' +
                    (open
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 -translate-y-2 scale-95 pointer-events-none')
                }
            >
                <ul className='grid px-2'>
                    {items.map((item) => (
                        <li key={item.title}>
                            <Link
                                href={item.url}
                                onClick={() => setOpen(false)}
                                className='flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100'
                            >
                                <span className='text-base flex-shrink-0'>{item.icon}</span>
                                <span className='text-xs truncate'>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavDropDown