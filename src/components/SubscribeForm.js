import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MuiPhoneInput from 'material-ui-phone-number';
import checkImage from '../assets/images/cCheck.svg';

import { Segment, Header, Button, Image } from 'semantic-ui-react';
import { styled } from '@mui/system';

const SubscribeForm = () => {
    const { header, button, header2, buttonOnClick, header2OnClick } = styles;
    const [visible, setVisible] = useState(false);

    const CssTextField = styled(TextField, {
        shouldForwardProp: (props) => props !== "focusColor"
    })((p) => ({
        // input label when focused
        "& label.Mui-focused": {
            color: p.focusColor
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: p.focusColor
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: p.focusColor
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: p.focusColor
            }
        }
    }));

    const CssMuiPhoneInput = styled(MuiPhoneInput, {
        shouldForwardProp: (props) => props !== "focusColor"
    })((p) => ({
        // input label when focused
        "& label.Mui-focused": {
            color: p.focusColor
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: p.focusColor
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: p.focusColor
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: p.focusColor
            }
        }
    }));

    return (
        <Segment basic>
            <Box
                autoComplete="off"
            >
                <Header textAlign='center' style={header}>Subscribe</Header>
                <Stack spacing={2}>

                    <Stack spacing={2} direction="row">
                        <CssTextField focusColor='rgba(0, 0, 0, 0.38)' fullWidth label="Name" variant="outlined" placeholder='Name' focused />

                        <CssTextField focusColor='rgba(0, 0, 0, 0.38)' fullWidth label="Birthday" variant="outlined" focused type='date' />
                    </Stack>

                    <CssTextField focusColor='rgba(0, 0, 0, 0.38)' fullWidth label="Email" variant="outlined" focused type="email" placeholder='Email' />

                    <CssMuiPhoneInput
                        defaultCountry='ae'
                        fullWidth
                        focused
                        label="Phone Number"
                        placeholder='Phone Number'
                        variant="outlined"
                        focusColor='rgba(0, 0, 0, 0.38)'
                        regions={['north-america', 'south-america', 'central-america', 'carribean', 'european-union', 'ex-ussr', 'middle-east', 'north-africa']}
                    />

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        {/* <Transition visible={visible} animation='slide left' duration={2000}>
                            <Button style={{ ...button, boxShadow: "2px 1000px 1px black inset" }} >
                                <span style={{ ...header2, fontSize: 20 }}>Thank You</span>
                                <span style={{ position: 'absolute', top: 0, right: 0 }}><Image src={checkImage} style={{ width: 45, height: 45 }} /></span>
                            </Button>
                        </Transition> */}

                        <Button style={visible ? buttonOnClick : button} onClick={() => setVisible(true)}>
                            <span style={visible ? header2OnClick : header2}>{visible ? "Thank You" : "Confirm"}</span>
                            <span style={{ position: 'absolute', top: 0, right: 0 }}>
                                <Image src={checkImage} style={{ width: 45, height: 45 }} />
                            </span>
                        </Button>
                    </div >
                </Stack>
            </Box>
        </Segment >
    );
};


const styles = {
    noExtraspace: {
        padding: 0,
        margin: 0
    },
    header: {
        fontFamily: 'Baskervville',
        fontStyle: "italic",
        fontWeight: '400',
        fontSize: '4rem',
        background: "linear-gradient(90deg, #A45E17 0%, #EED052 31.77%, #CB8B1D 63.02%, #A07E2D 85.42%, #CD9441 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",
    },
    header2: {
        fonFamily: 'Gilroy',
        fontWeight: "300",
        fontSize: '2rem',
        letterSpacing: "0.01em",
        color: 'black',
        transition: 'all 1s ease',
    },
    header2OnClick: {
        fonFamily: 'Gilroy',
        fontWeight: "300",
        fontSize: '2rem',
        letterSpacing: "0.01em",
        background: "linear-gradient(90deg, #A45E17 0%, #EED052 31.77%, #CB8B1D 63.02%, #A07E2D 85.42%, #CD9441 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        transition: 'all 1s ease',
    },
    button: {
        borderRadius: 30,
        padding: "1.5rem 5rem",
        paddingRight: 60,
        border: "3px solid transparent",
        background: "linear-gradient(90deg, #EED052 0%, #B67925 100%)",
        backgroundOrigin: "border-box",
        boxShadow: "2px 1000px 1px white inset",
        backgroundPosition: "left bottom",
        position: 'relative',
        transition: 'all 1s ease',
    },
    buttonOnClick: {
        borderRadius: 30,
        padding: "1.5rem 5rem",
        paddingRight: 60,
        border: "3px solid black",
        background: "linear-gradient(to left, black 50%, white 50%)",
        backgroundSize: "200% 100%",
        boxShadow: "none",
        position: 'relative',
        backgroundPosition: "right bottom",
        transition: 'all 1s ease',
    }
};

export default SubscribeForm;