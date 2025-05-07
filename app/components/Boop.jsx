'use client';

import { animated } from 'react-spring';
import React, { ReactNode } from 'react';
import useBoop from '@/app/hooks/useBoop';

const Boop = ({ children, ...boopConfig }) => {
    const [style, trigger] = useBoop(boopConfig);
    return (
        <animated.span onMouseEnter={() => trigger} style={style}>
            {children}
        </animated.span>
    );
}

export default Boop