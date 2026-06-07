import SliderControl from '@/src/components/ui/SliderControl';
import React, { useEffect, useMemo, useState } from 'react'
import { Play, Repeat } from 'react-feather';
import { Point } from '../types/types';

type Props = {
  controlPoint1: Point;
  controlPoint2: Point;
}

const AnimationPanel = ({ controlPoint1, controlPoint2 }: Props) => {
  const [mode, setMode] = useState<'manual' | 'auto'>('manual');
  const [isAtRight, setIsAtRight] = useState(false);
  const [duration, setDuration] = useState(1.2);
  const travelDistance = 230

  useEffect(() => {
    if (mode !== 'auto') {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsAtRight(prev => !prev);
    }, duration * 1000);

    return () => window.clearTimeout(timer);
  }, [mode, duration, isAtRight]);

  const handleAnimate = () => {
    setIsAtRight(prev => !prev);
  };

  const getXValue = (value: number) => value.toFixed(2);
  const getYValue = (value: number) => value.toFixed(2);

  const bezierCss = useMemo(
    () => `cubic-bezier(${getXValue(controlPoint1.x)}, ${getYValue(controlPoint1.y)}, ${getXValue(controlPoint2.x)}, ${getYValue(controlPoint2.y)})`,
    [controlPoint1, controlPoint2]
  );

  return (
    <>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center gap-4'>
          <div className='border-3 border-gray-300 rounded-xl w-[300px] h-[300px] relative overflow-hidden'>
            <div
              className='absolute top-1/2 h-15 w-15 rounded-full bg-amber-400 shadow-xl'
              style={{
                left: isAtRight ? `${travelDistance}px` : '5px',
                transform: 'translateY(-50%)',
                transition: `left ${duration}s ${bezierCss}`,
              }}
            />
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={handleAnimate}
              className={`flex items-center px-3 py-3 text-black text-xs rounded-sm transition-colors duration-300 ${mode === 'auto' ? ' bg-amber-400/30 cursor-not-allowed' : 'bg-amber-400 cursor-pointer hover:bg-amber-400/70'}`}
            >
              <Play size={20} />
            </button>
            <button
              onClick={() => setMode(prev => {
                const nextMode = prev === 'auto' ? 'manual' : 'auto';
                if (nextMode === 'auto') {
                  setIsAtRight(prevPos => !prevPos);
                }
                return nextMode;
              })}
              className={`cursor-pointer flex items-center px-3 py-3 text-xs rounded-sm transition-colors duration-300 bg-amber-400 hover:bg-amber-400/70 ${mode === 'auto' ? ' text-white' : 'text-black'}`}
            >
              <Repeat size={20} />
            </button>
          </div>
        </div>
        <SliderControl
          id='duration'
          label='Duration'
          min={0.2}
          max={3}
          step={0.1}
          value={duration}
          onChange={value => setDuration(value)}
          valueLabel={`${duration.toFixed(1)}s`}
        />
      </div>
    </>
  )
}

export default AnimationPanel