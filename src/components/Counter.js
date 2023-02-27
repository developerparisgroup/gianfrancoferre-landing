import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Card, Segment } from 'semantic-ui-react';

const LAUNCHING_DATE = "04/10/2023";

const Counter = () => {
    const { container, item, letter } = styles;
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: new Date(LAUNCHING_DATE).getTime(), onExpire: () => { } });

    return (
        <Segment basic textAlign='center' style={container}>
            <Card.Group itemsPerRow={4} centered stackable >
                <Card style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Card.Content>
                        <div style={item}>{days}<span style={letter}>d</span></div>
                    </Card.Content>
                </Card>

                <Card style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Card.Content>
                        <div style={item}>{hours}<span style={letter}>h</span></div>
                    </Card.Content>
                </Card>
                <Card style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Card.Content>
                        <div style={item}>{minutes}<span style={letter}>m</span></div>
                    </Card.Content>
                </Card>
                <Card style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Card.Content>
                        <div style={item}>{seconds}<span style={letter}>s</span></div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Segment>
    );
};


const styles = {
    container: {
        padding: 0,
        margin: 0
    },
    item: {
        fontFamily: 'poppins',
        fontWeight: '900',
        fontSize: '18rem',
        fontStyle: 'normal',
        letterSpacing: '0.01em',
        marginBottom: '3vh',
        color: 'blue',
        "-webkit-text-fill-color": 'transparent',
        "-webkit-text-stroke-width": .1,
        "-webkit-text-stroke-color": 'rgba(255,255,255, 0.3)'
    },
    letter: {
        fontFamily: 'poppins',
        fontWeight: '900',
        fontSize: '4.6rem',
        fontStyle: 'normal',
        letterSpacing: '0.01em',
        color: 'blue',
        "-webkit-text-fill-color": 'transparent',
        "-webkit-text-stroke-width": .1,
        "-webkit-text-stroke-color": 'rgba(255,255,255, 0.3)'
    }
};

export default Counter;