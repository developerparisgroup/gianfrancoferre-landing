import React from 'react';
import { useTimer } from 'react-timer-hook';

const LAUNCHING_DATE = "04/10/2023";

const Counter = () => {
    const { container, item, letter } = styles;
    const { minutes, hours, days } = useTimer({ expiryTimestamp: new Date(LAUNCHING_DATE).getTime(), onExpire: () => { } });

    return (
        <div style={container}>

            <div >
                <p style={item} className="borderdText">
                    {days}
                    <span style={letter}>d</span>
                </p>
            </div>
            <div >
                <p style={item} className="borderdText">
                    {hours}
                    <span style={letter}>h</span>
                </p>
            </div>
            <div >
                <p style={item} className="borderdText">
                    {minutes}
                    <span style={letter}>m</span>
                </p>
            </div>
            {/* <div className="borderdText">
                <p style={item}>
                    {seconds}
                    <span style={letter}>s</span>
                </p>
            </div> */}

        </div>


    );
};


const styles = {
    container: {
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
    },
    item: {
        fontFamily: 'poppins',
        fontWight: '700',
        fontSize: 'clamp(2rem, calc(2rem + 10vw),13rem)',
        letterSpacing: '0.01em',
    },
    letter: {
        fontFamily: 'poppins',
        fontSize: '2.3rem',
        letterSpacing: '0.01em',
        fontWight: '700',
    }
};

export default Counter;