'use client';

import Boop from '@/src/components/animation/Boop';
import Bezier from '@/src/components/ui/Bezier';
import Button from '@/src/components/ui/Button';
import SliderControl from '@/src/components/ui/SliderControl';
import useDarkTheme from '@/src/hooks/useDarkTheme';
import React, { useEffect, useMemo, useState } from 'react'
import { Copy, Play, Repeat } from 'react-feather';

type EaseConfig = {
    label: string,
    controlPoint1: Point,
    controlPoint2: Point,
}

const BezierVisualize = () => {
    const viewBoxWidth = 300;
    const viewBoxHeight = 300;

    const [controlPoint1, setControlPoint1] = useState<Point>({ x: 0, y: 0 });
    const [controlPoint2, setControlPoint2] = useState<Point>({ x: 1, y: 1 });
    const [selectedEase, setSelectedEase] = useState('linear');
    const [mode, setMode] = useState<'manual' | 'auto'>('manual');
    const darkTheme = useDarkTheme();


    const getXValue = (value: number) => value.toFixed(2);
    const getYValue = (value: number) => value.toFixed(2);

    const easeCollections: EaseConfig[] = [
        {
            label: 'linear',
            controlPoint1: {
                x: 0,
                y: 0
            },
            controlPoint2: {
                x: 1,
                y: 1
            }
        },
        {
            label: 'ease-in',
            controlPoint1: {
                x: 0.5,
                y: 0
            },
            controlPoint2: {
                x: 1,
                y: 1
            }
        },
        {
            label: 'ease-out',
            controlPoint1: {
                x: 0,
                y: 0
            },
            controlPoint2: {
                x: 0.5,
                y: 1
            }
        },
        {
            label: 'ease-in-out',
            controlPoint1: {
                x: 0.5,
                y: 0
            },
            controlPoint2: {
                x: 0.5,
                y: 1
            }
        },
        {
            label: 'ease',
            controlPoint1: {
                x: 0.25,
                y: 0
            },
            controlPoint2: {
                x: 0.25,
                y: 1
            }
        },
    ]

    const renderEaseSelection = () => {
        return easeCollections.map(x => (
            <Boop scale={1.05} key={x.label}>
                <Button
                    text={x.label}
                    textcolor={darkTheme ? (selectedEase === x.label ? 'text-amber-400' : 'text-white') : (selectedEase === x.label ? 'text-amber-400' : 'text-black')}
                    style={`text-xs border ${darkTheme ? (selectedEase === x.label ? 'border-amber-400' : 'border-white') : (selectedEase === x.label ? 'border-amber-400' : 'border-black')} ${selectedEase === x.label ? '' : 'hover:border-gray-500/70'}`}
                    onClick={() => {
                        setSelectedEase(x.label);
                        setControlPoint1(x.controlPoint1);
                        setControlPoint2(x.controlPoint2);
                    }}
                />
            </Boop>
        ))
    }

    const bezierCss = useMemo(
        () => `cubic-bezier(${getXValue(controlPoint1.x)}, ${getYValue(controlPoint1.y)}, ${getXValue(controlPoint2.x)}, ${getYValue(controlPoint2.y)})`,
        [controlPoint1, controlPoint2]
    );

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

    return (
        <div className={`flex justify-center flex-col px-20 ${darkTheme ? 'text-white' : 'text-black'}`}>
            <div>
                <div className='flex flex-col items-center gap-3 py-8'>
                    <span>Preset</span>
                    <div className='flex gap-6 justify-center'>
                        {renderEaseSelection()}
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-10 pb-8'>
                <div>
                    <div className='w-[300px] h-[300px] border-3 border-gray-300 rounded-xl box-border overflow-hidden p-3'>
                        <Bezier
                            viewBoxWidth={viewBoxWidth}
                            viewBoxHeight={viewBoxHeight}
                            onChange={point => {
                                setControlPoint1({
                                    x: point.controlPoint1.x / viewBoxWidth,
                                    y: 1 - point.controlPoint1.y / viewBoxHeight,
                                });
                                setControlPoint2({
                                    x: point.controlPoint2.x / viewBoxWidth,
                                    y: 1 - point.controlPoint2.y / viewBoxHeight,
                                });
                            }}
                            controlPoint1={{ x: controlPoint1.x * viewBoxWidth, y: (1 - controlPoint1.y) * viewBoxHeight }}
                            controlPoint2={{ x: controlPoint2.x * viewBoxWidth, y: (1 - controlPoint2.y) * viewBoxHeight }} />
                    </div>
                    <div className='mt-4 space-y-4'>
                        <SliderControl
                            id='control1x'
                            label='X1'
                            min={0}
                            max={1}
                            step={0.01}
                            value={controlPoint1.x}
                            onChange={value => setControlPoint1(prev => ({ ...prev, x: value }))}
                        />
                        <SliderControl
                            id='control1y'
                            label='Y1'
                            min={0}
                            max={1}
                            step={0.01}
                            value={controlPoint1.y}
                            onChange={value => setControlPoint1(prev => ({ ...prev, y: value }))}
                        />
                        <SliderControl
                            id='control2x'
                            label='X2'
                            min={0}
                            max={1}
                            step={0.01}
                            value={controlPoint2.x}
                            onChange={value => setControlPoint2(prev => ({ ...prev, x: value }))}
                        />
                        <SliderControl
                            id='control2y'
                            label='Y2'
                            min={0}
                            max={1}
                            step={0.01}
                            value={controlPoint2.y}
                            onChange={value => setControlPoint2(prev => ({ ...prev, y: value }))}
                        />
                    </div>
                </div>

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
            </div>
            <div className='flex flex-col items-center p-5 gap-3'>
                <div>Your Curve :</div>
                <div className='flex gap-3 items-center'>
                    <div>
                        <span className='text-cyan-600'>cubic-bezier</span> (
                        <span className='text-amber-400'>{getXValue(controlPoint1.x)}</span>,
                        <span className='text-amber-400'>{getYValue(controlPoint1.y)}</span>,
                        <span className='text-amber-400'>{getXValue(controlPoint2.x)}</span>,
                        <span className='text-amber-400'>{getYValue(controlPoint2.y)}</span>)
                    </div>
                    <div>
                        <Copy size={15} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BezierVisualize