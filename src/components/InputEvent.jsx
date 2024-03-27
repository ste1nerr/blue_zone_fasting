import React, { useState, useEffect } from 'react';
import { Typography, Container, TextField } from '@mui/material';
import Image from 'next/image';

const styles = {
    mainContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inputBlock: {
        borderRadius: '14px',
        backgroundColor: '#FFFFFF',
        width: '350px',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
    },
    textField: {
        width: '220px',

        border: 'none',
        borderBottom: '1px solid #9e9e9e',
        borderRadius: '0',
        '& .MuiInputBase-input': {
            fontSize: '48px',
            fontWeight: '700',
            textAlign: 'center',
        },
        '&:hover': {
            borderBottom: '1px solid #9e9e9e'
        },
        '& input': {
            '&:focus': {
                outline: 'none'
            }
        },
    },
    unitText: {
        marginBottom: '20px',
        fontSize: '30px',
        fontWeight: '700',
        position: 'absolute',
        top: 1,
        right: 8,
    },
    space: {
        position: 'relative',
        width: '44px',
        height: '60px'
    },
    event: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '30px',
        borderRadius: '14px',
        backgroundColor: '#FFFFFF',
        width: '350px',
        height: '120px',
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
    },
    eventContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '5px',
        gap: '8%'
    }
};

const InputEvent = () => {
    const [eventName, setEventName] = useState('');

    useEffect(() => {
        const storedEventName = localStorage.getItem('eventName');
        if (storedEventName) setEventName(storedEventName);
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setEventName(value);
        localStorage.setItem('eventName', value);
    };

    const handleSkipQuestion = () => {
        localStorage.setItem('eventName', '');
    };

    return (
        <>
            <Container sx={styles.mainContainer}>
                <Container sx={styles.inputBlock}>
                    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" component="div">
                            <Image src="/images/event.svg" alt="Event Icon" width={50} height={50} />
                        </Typography>
                        <TextField
                            variant="standard"
                            value={eventName}
                            onChange={handleChange}
                            sx={styles.textField}
                            InputProps={{
                                disableUnderline: true,
                                placeholder: '',
                                inputProps: { maxLength: 11 }
                            }}
                        />
                    </Container>
                </Container>
                <Container sx={styles.event}>
                    <Container sx={styles.eventContent}>
                    </Container>
                    <Typography sx={{ width: '100%', fontSize: '16px' }} variant="p" component="div" >
                        Once we know this, we'll be able to put together a personalized plan to help you get in shape. Your data will not be shared with any third parties.
                    </Typography>
                </Container>



            </Container>
        </>

    );
};

export default InputEvent;
