import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export function CodeEditor() {
    const [value, setValue] = useState("console.log('hello world!');");
    const onChange = useCallback((val: string) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    return (
        <CodeMirror
            value={value}
            height="200px"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
        />
    );
}