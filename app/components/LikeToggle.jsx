'use client';

import React from 'react';
import { useClick } from '../contexts/ClickContext';
import { animated, useSpring } from 'react-spring';

const LikeToggle = () => {
    const { count, incrementClick, decrementClick } = useClick();
    const maxCount = 5;
    const fullHeight = 24;
    const fillLevel = Math.min(count / maxCount, 1);

    const fillProps = useSpring({
        y: fullHeight * (1 - fillLevel),
        height: fullHeight * fillLevel,
        config: { tension: 120, friction: 20 },
    });

    const handleOnClickEvent = (e) => {
        if (count === maxCount) { return; }
        incrementClick();
    }

    const handleOnContextMenuEvent = (e) => {
        e.preventDefault();
        decrementClick();
    }
    
    return (
        <div className='cursor-pointer flex'>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={handleOnClickEvent}
                onContextMenu={handleOnContextMenuEvent}
                style={{ cursor: 'pointer' }}
            >
                <defs>
                    <clipPath id="heartClip">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </clipPath>
                </defs>
                <g clipPath="url(#heartClip)">
                    <animated.rect
                        x="0"
                        width="24"
                        fill="#EA3668"
                        y={fillProps.y}
                        height={fillProps.height} />
                </g>
                <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    fill="none"
                    stroke="#EA3668"
                />
            </svg>
        </div>
    );
}

export default LikeToggle