// TODO: identify how to get current gaze position coordinates

import { useState, useEffect } from 'react';
import { Button, Code, Text } from '@mantine/core';

// @ts-ignore
import webgazer from 'webgazer';

export function EyeTracker() {
    const [gazeData, setGazeData] = useState({ x: null, y: null });

    useEffect(() => {
        webgazer.showVideoPreview(true);
        webgazer.setRegression('ridge').setTracker('clmtrackr').begin();
        webgazer.showPredictionPoints(true);

        // Update gaze coordinates at a regular interval
        const interval = setInterval(() => {
            const gaze = webgazer.getGazeData();
            if (gaze) {
                setGazeData({ x: gaze.x, y: gaze.y });
            }
        }, 100); // Update every 100ms

        // Cleanup on unmount
        return () => {
            clearInterval(interval);
            webgazer.pause();
            webgazer.clearData();
        };
    }, []);

    return (
        <>
            <Text ta="center">
                Gaze coordinates <Code>{`{ x: ${gazeData.x}, y: ${gazeData.y} }`}</Code>
            </Text>

            <Button onClick={() => {
                webgazer.beginCalibration();
            }}>
                Calibrate
            </Button>
        </>
    );
}