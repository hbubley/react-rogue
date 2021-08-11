import React, { useEffect, useRef, useState } from 'react';
import InputManager from './InputManager';

const ReactRogue = ({ width, height, tileSize }) => {
    const canvasRef = useRef();
    const [player, setPlayer] = useState({x: 64, y: 128 });
    let inputManager = new InputManager();

    const handleInput = (action, data) => {
        console.log("handle input", action, data)
        let newPlayer = {...player};

        newPlayer.x += tileSize*data.x
        newPlayer.y += tileSize*data.y

        setPlayer(newPlayer)
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
        ctx.fillRect(player.x, player.y, width, height)
    }, [height, player, tileSize, width]);

    return <canvas
        ref={canvasRef}
        width={width * tileSize}
        height={height * tileSize}
        style={{ border: '1px solid black' }}
    />
}

export default ReactRogue