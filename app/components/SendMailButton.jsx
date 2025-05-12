import React from 'react';
import { ArrowRight } from 'react-feather';
import Boop from './Boop';

const SendMailButton = (props) => {
  return (
    <button
      className={`flex items-center justify-between pl-5 pr-3 py-2 w-full ${props.bgcolor} ${props.textcolor} text-sm border cursor-pointer rounded-sm`}
      onClick={props.onClick}>
      <span>{props.text}</span>
      <Boop x={2}><ArrowRight className='border-1 border-slate-600 bg-slate-600 p-1' size={25} /></Boop>
    </button>
  )
}

export default SendMailButton