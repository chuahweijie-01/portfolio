'use client';

import React from 'react';
import useDarkTheme from '../hooks/useDarkTheme';
import ContactForm from './components/ContactForm';

const Contact = () => {
    const fontColor = useDarkTheme() ? "text-white" : "text-black";

    return (
        <div className={`${fontColor}`}>
            <div className={'font-bold text-2xl pb-8'}>Get In Touch</div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className='flex flex-1 lg:pb-0 flex-col gap-3'>
                    <span>I am always open to new ideas, collaborations, or simply a good conversation. Feel free to drop me an email, whether it is a question, a project proposal, or just a quick hello.</span>
                    <span>I would love to connect and see how we might work together in the future!</span>
                </div>
                <div className='flex-1 email-stripes p-3 rounded-sm shadow-[0_0_15px] shadow-indigo-500/30'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact