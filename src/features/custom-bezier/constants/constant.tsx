type EaseConfig = {
    label: string,
    controlPoint1: Point,
    controlPoint2: Point,
}

type Point = {
    x: number;
    y: number;
};

export const easeCollections: EaseConfig[] = [
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