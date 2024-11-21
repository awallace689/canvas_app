import { useEffect } from 'react';
import './App.css';
import { attach, detach } from 'canvas-render';
import { main } from 'canvas-gleam';

const CONTAINER_ID = 'canvas-container';

const App = () => {
    useEffect(() => {
        const canvas = attach(CONTAINER_ID);

        return () => {
            detach(canvas);
        };
    }, []);

    return (
        <>
            <h1>Canvas</h1>
            <div id={CONTAINER_ID}></div>
        </>
    );
};

export default App;
