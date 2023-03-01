import React, { useState } from 'react';
import { Header, Segment, Image, Button, Modal } from 'semantic-ui-react';
import SubscribeForm from './SubscribeForm';
import checkImage from '../assets/images/check.svg';
import { Container } from '@mui/material';

const Welcome = () => {
    const { header, subHeader, header2, button, formModal } = styles;
    const [showModal, setShowModal] = useState(false);

    return (
        <Segment basic >
            <Container maxWidth="sm">
                <Header style={header}>we are</Header>
                <Header style={{ ...header, marginTop: "-4vh" }}>coming soon</Header>
                <Header.Subheader style={subHeader}>
                    Step into the luxurious world of Gianfranco Ferre
                    and join our exclusive community.
                </Header.Subheader>

                <Header style={header2}>Get notified when we launch</Header>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <span><Image src={checkImage} style={{ widht: 30, height: 30 }} /></span>
                    <span>
                        <Header.Subheader style={subHeader}>Subscribe for the best deals</Header.Subheader>
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <span><Image src={checkImage} style={{ widht: 30, height: 30 }} /></span>
                    <span>
                        <Header.Subheader style={subHeader}>Exclusive referral program</Header.Subheader>
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <span><Image src={checkImage} style={{ widht: 30, height: 30 }} /></span>
                    <span>
                        <Header.Subheader style={subHeader}>Share the eleganc</Header.Subheader>
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button style={button} onClick={() => setShowModal(true)}>
                        <span style={{ ...header2, fontSize: 20 }}>Notify</span>
                    </Button>
                </div >

            </Container>

            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                content={<SubscribeForm />}
                size="tiny"
                style={formModal}
            />
        </Segment >
    );
};

const styles = {
    header: {
        fontFamily: 'Baskervville',
        fontWeight: '400',
        fontSize: 'clamp(3rem,calc(1rem + 10vw),6rem)',
        background: "linear-gradient(90deg, #A45E17 0%, #EED052 31.77%, #CB8B1D 63.02%, #A07E2D 85.42%, #CD9441 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        margin: 0,
        padding: 0
    },
    subHeader: {
        fontFamily: 'Gilroy',
        fontWeight: '300',
        fontSize: '1.5rem',
        letterSpacing: "0.1em",
        color: "white",
    },
    header2: {
        fontFamily: 'Gilroy',
        fontWeight: "300",
        fontSize: '2rem',
        letterSpacing: "0.01em",
        background: "linear-gradient(90deg, #A45E17 0%, #EED052 31.77%, #CB8B1D 63.02%, #A07E2D 85.42%, #CD9441 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
    },
    button: {
        borderRadius: 30,
        padding: "1rem 4rem",
        border: "2px solid transparent",
        background: "linear-gradient(90deg, #EED052 0%, #B67925 100%)",
        backgroundOrigin: "border-box",
        boxShadow: "2px 1000px 1px black inset"
    },
    formModal: {
        borderRadius: 100,
        padding: "1rem 3rem",
        border: "3px solid transparent",
        background: "linear-gradient(90deg, #EED052 0%, #B67925 100%) ",
        backgroundOrigin: "border-box",
        boxShadow: "2px 1000px 1px white inset"
    }
};

export default Welcome;