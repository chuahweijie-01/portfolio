'use client';

import { animated, AnimatedProps } from 'react-spring';
import React from 'react';
import useBoop from '@/app/hooks/useBoop';

type BoopProps = {
    x?: number;
    y?: number;
    rotation?: number;
    scale?: number;
    timing?: number;
    springConfig?: SpringConfig;
}

type SpringConfig = {
    tension?: number;
    friction?: number;
}

const Boop: React.FC<React.PropsWithChildren<BoopProps>> = ({ children, ...boopConfig }) => {
    const [style, trigger] = useBoop(boopConfig);
    return (
        <animated.span
            onMouseEnter={trigger as React.MouseEventHandler<HTMLSpanElement>}
            style={style as AnimatedProps<React.HTMLAttributes<HTMLSpanElement>>['style']}>
            {children}
        </animated.span>
    );
}

export default Boop