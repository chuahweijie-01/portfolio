'use client';

import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring';
import { ThemeContext } from '../../contexts/ThemeContext';
import useDarkTheme from '../../hooks/useDarkTheme';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    const properties = {
        dark: { r: 9, transform: "rotate(40deg)", cx: 12, cy: 4, opacity: 0 },
        light: { r: 5, transform: "rotate(90deg)", cx: 30, cy: 0, opacity: 1 },
        springConfig: { mass: 4, tension: 250, friction: 35 }
    };

    const { r, transform, cx, cy, opacity } = properties[useDarkTheme() ? "dark" : "light"];

    const svgContainerProps = useSpring({ transform, config: properties.springConfig });
    const centerCircleProps = useSpring({ r, config: properties.springConfig });
    const maskedCircleProps = useSpring({ cx, cy, config: properties.springConfig });
    const linesProps = useSpring({ opacity, config: properties.springConfig });

    return (
        <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
            onClick={toggleTheme}
            style={{ cursor: "pointer", ...svgContainerProps }}
        >
            <mask id="masking">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <animated.circle {...maskedCircleProps} r="9" fill="black" />
            </mask>

            <animated.circle
                cx="12"
                cy="12"
                {...centerCircleProps}
                fill="white"
                mask="url(#masking)"
            />
            <animated.g stroke="currentColor" style={linesProps}>
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </animated.g>
        </animated.svg>
    );
}

export default ThemeToggle