import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

export function MouseTracker() {
    const { x, y } = useMouse();

    return (
        <Text ta="center">
          Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
        </Text>
    );
}