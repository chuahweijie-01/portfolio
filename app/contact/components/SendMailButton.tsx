import React from 'react';
import { ArrowRight, Check, Loader } from 'react-feather';
import useBoop from '@/app/hooks/useBoop';
import { animated, AnimatedProps } from 'react-spring';

type SendMailButtonProps = {
  sent: boolean;
  loading: boolean;
};

const SendMailButton = ({ sent, loading }: SendMailButtonProps) => {
  const [style, trigger] = useBoop({ x: 2 });
  const text = sent ? 'Boom. Sent.' : loading ? 'Blast-off in 3..2..1..' : 'Detonate Email';
  const icon = sent
    ? <Check className="bg-indigo-700 p-1 rounded-sm" size={25} />
    : loading
      ? <Loader className="p-1 animate-spin text-white" size={25} />
      : <ArrowRight className="border-1 border-slate-600 bg-slate-600 p-1" size={25} />
  const buttonbg = sent ? 'bg-indigo-500 text-white pointer-events-none cursor-pointer' : 'bg-slate-800 text-white';

  return (
    <button
      onMouseEnter={trigger as React.MouseEventHandler<HTMLSpanElement>}
      className={`flex items-center justify-between pl-5 pr-3 py-2 w-full ${buttonbg} 
        text-sm border cursor-pointer rounded-sm transition-colors duration-300`}
      type="submit"
    >
      <span>{text}</span>
      <animated.span style={style as AnimatedProps<React.HTMLAttributes<HTMLSpanElement>>['style']}>{icon}</animated.span>
    </button>
  )
}

export default SendMailButton