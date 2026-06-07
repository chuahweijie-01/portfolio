import SliderControl from '@/src/components/ui/SliderControl'
import React from 'react'
import { Point } from '../types/types';

type Props = {
    controlPoint1: Point;
    controlPoint2: Point;
    onControlPoint1Change?: (point: Point) => void;
    onControlPoint2Change?: (point: Point) => void;
}

const MotionControl = ({ controlPoint1, controlPoint2, onControlPoint1Change, onControlPoint2Change }: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <SliderControl
                id='control1x'
                label='X1'
                min={0}
                max={1}
                step={0.01}
                value={controlPoint1.x}
                onChange={value => onControlPoint1Change?.({ ...controlPoint1, x: value })}
            />
            <SliderControl
                id='control1y'
                label='Y1'
                min={0}
                max={1}
                step={0.01}
                value={controlPoint1.y}
                onChange={value => onControlPoint1Change?.({ ...controlPoint1, y: value })}
            />
            <SliderControl
                id='control2x'
                label='X2'
                min={0}
                max={1}
                step={0.01}
                value={controlPoint2.x}
                onChange={value => onControlPoint2Change?.({ ...controlPoint2, x: value })}
            />
            <SliderControl
                id='control2y'
                label='Y2'
                min={0}
                max={1}
                step={0.01}
                value={controlPoint2.y}
                onChange={value => onControlPoint2Change?.({ ...controlPoint2, y: value })}
            />
        </div>
    )
}

export default MotionControl