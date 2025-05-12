'use client';

import React from 'react'
import useDarkTheme from '../hooks/useDarkTheme';
import SendMailButton from '../components/SendMailButton';

const Contact = () => {
    const fontColor = useDarkTheme() ? "text-white" : "text-black";

    const handleSubmitEvent = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Woahh! Hold on tiger. This feature will be coming soon!')
    }
    const submitButtonConf = {
        text: "Send Mail",
        textcolor: "text-white",
        bgcolor: "bg-slate-800",
        onClick: (e: { preventDefault: () => void; }) => handleSubmitEvent(e)
    }

    return (
        <div className={`${fontColor}`}>
            <div className={'font-bold text-2xl pb-8'}>Get In Touch</div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className='flex flex-1 lg:pb-0 flex-col gap-3'>
                    <span>I am always open to new ideas, collaborations, or simply a good conversation. Feel free to drop me an email, whether it is a question, a project proposal, or just a quick hello.</span>
                    <span>I would love to connect and see how we might work together in the future!</span>
                </div>
                <div className='flex-1 email-stripes p-3 rounded-sm shadow-[0_0_15px] shadow-indigo-500/30'>
                    <div className='bg-white'>
                        <form className='p-5'>
                            <div className='flex gap-5 pb-3 flex-col lg:flex-row'>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-black pb-1'>How shall I address you</span>
                                    <input type='text' placeholder='John Doe' className='border border-gray-300 px-2 py-1 text-black'></input>
                                </div>
                                <div className='flex flex-1 flex-col'>
                                    <span className='text-black pb-1'>Email</span>
                                    <input type='email' placeholder='johndoe@gmail.com' className='border border-gray-300 px-2 py-1 text-black '></input>
                                </div>
                            </div>
                            <div className='flex flex-col pb-3'>
                                <span className='text-black'>Message</span>
                                <textarea className='border border-gray-300 px-2 py-1 min-h-50 text-black'></textarea>
                            </div>
                            <div>
                                <SendMailButton {...submitButtonConf}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact