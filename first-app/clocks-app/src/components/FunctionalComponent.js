import React, { useState, useEffect } from 'react';

function FunctionalComponent(props) {
    let date = new Date().toLocaleTimeString();
    const [time, setTime] = useState(date);
    const [timerOn, setTimerOn] = useState(true)


    useEffect(() => {
        let counterId;
        if (timerOn) {
            counterId = setInterval(() => {
                date = new Date().toLocaleTimeString();
                setTime(date);
            }, 1000)
        }
        return () => {
            clearInterval(counterId);
        }

    }, [timerOn])

    const start = () => {
        setTimerOn(true);
        setTime(date);
    }

    const stop = () => {
        setTimerOn(false);
    }

    return (
        <div className="clocks">

            <h1>Clocks</h1>
            <h2>{time}</h2>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
        </div>
    );
}

export default FunctionalComponent;