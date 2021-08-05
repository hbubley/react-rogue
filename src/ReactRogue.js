import React, { useEffect, useRef } from 'react';
import InputManager from './InputManager';

const ReactRogue = ({ width, height, tileSize }) => {
    const canvasRef = useRef();
    let inputManager = new InputManager();

    const handleInput = (action, data) => {
        console.log("handle input", action, data)
    }
    useEffect(() => {
        console.log("Bind Input");
        inputManager.bindKeys();
        inputManager.subscribe(handleInput);
        return () => {
            inputManager.unbindKeys();
            inputManager.unsubscribe(handleInput);
        }
    })

    useEffect(() => {
        console.log(canvasRef)
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width * tileSize, height * tileSize)
        ctx.fillStyle = "#000"
        ctx.fillRect(15, 22, width, height)
    }, []);

    return <canvas
        ref={canvasRef}
        width={width * tileSize}
        height={height * tileSize}
        style={{ border: '1px solid black' }}
    />
}

export default ReactRogue