import React from 'react';
import { ArrowRight, Check, Loader } from 'react-feather';
import Boop from '../../components/Boop';

const SendMailButton = ({ sent, loading }) => {
  const text = sent ? 'Boom. Sent.' : loading ? 'Blast-off in 3..2..1..' : 'Detonate Email';
  const icon = sent
    ? <Check className="bg-indigo-700 p-1 rounded-sm" size={25} />
    : loading
      ? <Loader className="p-1 animate-spin text-white" size={25} />
      : <ArrowRight className="border-1 border-slate-600 bg-slate-600 p-1" size={25} />
  const style = sent ? 'bg-indigo-500 text-white pointer-events-none cursor-pointer' : 'bg-slate-800 text-white';

  return (
    <button
      className={`flex items-center justify-between pl-5 pr-3 py-2 w-full ${style} 
        text-sm border cursor-pointer rounded-sm transition-colors duration-300`}
      type="submit"
    >
      <span>{text}</span>
      <Boop x={2}>{icon}</Boop>
    </button>
  )
}

export default SendMailButton