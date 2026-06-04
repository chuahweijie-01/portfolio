import useDarkTheme from '@/src/hooks/useDarkTheme';
import React, { useRef, useState } from 'react';
import { animated, to, useSpring } from 'react-spring';

type BezierProps = {
    viewBoxWidth: number;
    viewBoxHeight: number;
    controlPoint1: Point;
    controlPoint2: Point;
    onChange?: (data: {
        controlPoint1: Point;
        controlPoint2: Point;
    }) => void;
};

type Point = {
    x: number;
    y: number;
};

const Bezier: React.FC<BezierProps> = ({
    viewBoxWidth,
    viewBoxHeight,
    controlPoint1,
    controlPoint2,
    onChange
}) => {

    const darkTheme = useDarkTheme();
    const startPoint: Point = { x: 0, y: viewBoxHeight };
    const endPoint: Point = { x: viewBoxWidth, y: 0 };

    const [draggingPointId, setDraggingPointId] =
        useState<string | null>(null);

    const animatedProps = useSpring({
        cp1x: controlPoint1.x,
        cp1y: controlPoint1.y,
        cp2x: controlPoint2.x,
        cp2y: controlPoint2.y,
        config: {
            tension: 120,
            friction: 18,
        },
    });

    const animatedD = to(
        [animatedProps.cp1x, animatedProps.cp1y, animatedProps.cp2x, animatedProps.cp2y],
        (cp1x, cp1y, cp2x, cp2y) =>
            `M ${startPoint.x},${startPoint.y} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endPoint.x},${endPoint.y}`
    );

    const svgRef = useRef<SVGSVGElement | null>(
        null
    );

    const clamp = (value: number, min: number, max: number) =>
        Math.min(Math.max(value, min), max);

    const handleMouseDown = (
        pointId:
            | 'controlPoint1'
            | 'controlPoint2'
    ) => {
        setDraggingPointId(pointId);
    };

    const handleMouseUp = () => {
        setDraggingPointId(null);
    };

    const handleMouseMove = (
        ev: React.MouseEvent<SVGSVGElement>
    ) => {
        if (!draggingPointId || !svgRef.current) {
            return;
        }

        const svgRect =
            svgRef.current.getBoundingClientRect();

        const svgX = ev.clientX - svgRect.left;
        const svgY = ev.clientY - svgRect.top;

        const viewBoxX =
            (svgX * viewBoxWidth) / svgRect.width;

        const viewBoxY =
            (svgY * viewBoxHeight) / svgRect.height;

        const clampedPoint = {
            x: clamp(viewBoxX, 0, viewBoxWidth),
            y: clamp(viewBoxY, 0, viewBoxHeight),
        };

        switch (draggingPointId) {
            case 'controlPoint1':
                onChange?.({
                    controlPoint1: clampedPoint,
                    controlPoint2,
                });

                break;

            case 'controlPoint2':
                onChange?.({
                    controlPoint1,
                    controlPoint2: clampedPoint,
                });

                break;
        }
    };

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
            }}
        >
            <defs>
                <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="0" cy="0" r="1" fill={darkTheme ? "#fff" : "#000"} />
                </pattern>
            </defs>

            <rect
                x={0.5}
                y={0.5}
                width={viewBoxWidth}
                height={viewBoxHeight}
                fill="url(#dot-grid)"
                opacity={0.55}
            />
            
            {/* Guide lines */}
            <animated.line
                x1={startPoint.x}
                y1={startPoint.y}
                x2={animatedProps.cp1x}
                y2={animatedProps.cp1y}
                stroke="#f5bc1e"
                strokeWidth={2}
                strokeDasharray="2 2"
            />

            <animated.line
                x1={animatedProps.cp2x}
                y1={animatedProps.cp2y}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="#f5bc1e"
                strokeWidth={2}
                strokeDasharray="2 2"
            />

            {/* Cubic Bezier Curve */}
            <animated.path
                d={animatedD}
                fill="none"
                stroke={darkTheme ? "#fff" : "#000"}
                strokeWidth={3}
            />

            {/* Handles */}

            <animated.ellipse
                cx={animatedProps.cp1x}
                cy={animatedProps.cp1y}
                rx={6}
                ry={6}
                fill='#f5bc1e'
                style={{ cursor: 'grab' }}
                onMouseDown={() =>
                    handleMouseDown('controlPoint1')
                }
            />

            <animated.ellipse
                cx={animatedProps.cp2x}
                cy={animatedProps.cp2y}
                rx={6}
                ry={6}
                fill='#f5bc1e'
                style={{ cursor: 'grab' }}
                onMouseDown={() =>
                    handleMouseDown('controlPoint2')
                }
            />
        </svg>
    );
};

export default Bezier;