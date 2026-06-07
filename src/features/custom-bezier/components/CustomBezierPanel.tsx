'use client'

import Boop from '@/src/components/animation/Boop';
import Button from '@/src/components/ui/Button';
import React, { useState } from 'react'
import { Copy } from 'react-feather';
import { easeCollections } from '../constants/constant';
import { Point } from '../types/types';
import AnimationPanel from './AnimationPanel';
import Bezier from './Bezier';
import MotionControl from './MotionControl';

const CustomBezierPanel = () => {
    const viewBoxWidth = 300;
    const viewBoxHeight = 300;

    const [controlPoint1, setControlPoint1] = useState<Point>({ x: 0, y: 0 });
    const [controlPoint2, setControlPoint2] = useState<Point>({ x: 1, y: 1 });
    const [selectedEase, setSelectedEase] = useState('linear');

    const getXValue = (value: number) => value.toFixed(2);
    const getYValue = (value: number) => value.toFixed(2);

    const renderEaseSelection = () => {
        return easeCollections.map(x => (
            <Boop scale={1.05} key={x.label}>
                <Button
                    text={x.label}
                    textcolor={`${selectedEase === x.label ? 'text-amber-400' : 'text-black dark:text-white'} `}
                    style={`
                        text-xm border 
                        ${selectedEase === x.label ? 'border-amber-400' : 'border-black hover:border-gray-500/70 dark:border-white'}`}
                    onClick={() => {
                        setSelectedEase(x.label);
                        setControlPoint1(x.controlPoint1);
                        setControlPoint2(x.controlPoint2);
                    }}
                />
            </Boop>
        ))
    }

    return (
        <div className='flex justify-center flex-col px-20 dark:text-white text-black'>
            <div>
                <div className='flex flex-col items-center gap-3 py-8'>
                    <div className='flex gap-6 justify-center'>
                        {renderEaseSelection()}
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-10 pb-8'>
                <div>
                    <div>
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
                            controlPoint2={{ x: controlPoint2.x * viewBoxWidth, y: (1 - controlPoint2.y) * viewBoxHeight }}
                        />
                    </div>
                    <div className='mt-4'>
                        <MotionControl
                            controlPoint1={controlPoint1}
                            controlPoint2={controlPoint2}
                            onControlPoint1Change={setControlPoint1}
                            onControlPoint2Change={setControlPoint2}
                        />
                    </div>
                </div>

                <AnimationPanel controlPoint1={controlPoint1} controlPoint2={controlPoint2} />

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
        </div >
    )
}

export default CustomBezierPanel