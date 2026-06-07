'use client';

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import me from "@/public/figure/k-wave.png";

const Footer = () => {
    const footerSections = [
        {
            title: 'General',
            items: [
                { label: 'About me', href: '/about' },
                { label: 'Contact', href: '/contact' },
            ],
        },
    ];

    return (
        <footer className='pb-10 pt-20 grid gap-10 sm:grid-cols-[1fr_auto]'>
            <div className='space-y-5'>
                <Image
                    src={me}
                    alt="me"
                    width={150}
                    className="drop-shadow-xl"
                />
                <div className='text-xs text-gray-500'>
                    &copy; {new Date().getFullYear()} CHUAH, Wei Jie. All rights reserved.
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 gap-8'>
                {footerSections.map((section) => (
                    <div key={section.title} className='text-end'>
                        <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-gray-400'>
                            {section.title}
                        </h3>
                        <ul className='mt-5 space-y-3 text-sm'>
                            {section.items.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer