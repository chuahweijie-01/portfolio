'use client'

import React from 'react'
import { AlertCircle, Icon, Info, XCircle } from 'react-feather'

type Variant = 'info' | 'warning' | 'error'

type Props = {
    title: string
    children: React.ReactNode
    type?: Variant
}

const VARIANTS: Record<Variant, {
    textColor: string
    bgColor: string
    borderColor: string
    pathColor: string
    Icon: Icon
}> = {
    info: {
        textColor: 'text-indigo-700',
        bgColor: 'bg-indigo-700/10',
        borderColor: 'bg-indigo-700',
        pathColor: '#432dd7',
        Icon: Info,
    },
    warning: {
        textColor: 'text-amber-400',
        bgColor: 'bg-amber-400/10',
        borderColor: 'bg-amber-400',
        pathColor: '#eeb800',
        Icon: AlertCircle,
    },
    error: {
        textColor: 'text-red-600',
        bgColor: 'bg-red-600/10',
        borderColor: 'bg-red-600',
        pathColor: '#c60010',
        Icon: XCircle,
    },
}

const Aside: React.FC<Props> = ({ title, children, type = 'info' }) => {
    const { textColor, bgColor, borderColor, pathColor, Icon } = VARIANTS[type]
    const size = 30

    return (
        <aside className={`${bgColor} mt-8 mb-16 relative py-4 pl-12 mx-[-2rem] rounded-lg`}>
            <div className="absolute top-0 left-0 h-full flex flex-col">
                <svg width="28.5" height="34.5" viewBox="0 0 57 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="transition duration-150 fill-[#fff] dark:fill-[#18181b]"
                        d="M54 0V0.716804C54 25.9434 35.0653 47.1517 10 50L0 57V0H54Z"
                    />
                    <path fill={pathColor} d="M56.9961 4.15364C57.0809 2.49896 55.8083 1.08879 54.1536 1.00394C52.499 0.919082 51.0888 2.19168 51.0039 3.84636L56.9961 4.15364ZM9.09704 51.7557L8.49716 48.8163L9.09704 51.7557ZM6 69V59.2227H0V69H6ZM9.69692 54.6951L14.3373 53.7481L13.1375 47.8693L8.49716 48.8163L9.69692 54.6951ZM14.3373 53.7481C38.202 48.8777 55.7486 28.4783 56.9961 4.15364L51.0039 3.84636C49.8967 25.4384 34.3213 43.5461 13.1375 47.8693L14.3373 53.7481ZM6 59.2227C6 57.0268 7.54537 55.1342 9.69692 54.6951L8.49716 48.8163C3.55195 49.8255 0 54.1756 0 59.2227H6Z"></path>
                </svg>
                <div className={`w-[3px] ${borderColor} flex-1`} />
            </div>

            <div className="absolute top-0 left-0 p-2 transform -translate-x-1/2 -translate-y-1/2">
                <Icon className={textColor} size={size} />
            </div>

            <strong className={`mb-2 block ${textColor}`}>{title}</strong>
            <div>{children}</div>
        </aside>
    )
}

export default Aside