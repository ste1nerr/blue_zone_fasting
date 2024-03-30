import React, { useState, useEffect } from 'react';
import { Typography, Container} from '@mui/material';
import Image from 'next/image';

const styles = {
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    questionTitle: {
        marginBottom: '70px',
        fontSize: '40px',
        fontWeight: '700',
    },
    inputBlock: {
        marginTop: {
            xl: '70px',
            lg: '50px',
            sm: '30px',
            xs: '10px',
        },
        height: {
            xl: '240px',
            lg: '220px',
            sm: '200px',
            xs: '180px',
        },
        borderRadius: '14px',
        backgroundColor: '#FFFFFF',
        width: {
            xl: '400px',
            lg: '400px',
            sm: '340px',
            xs: '280px',
        },
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
    },
    textField: {
        width: '100%',
        maxWidth: {
            xl: '380px',
            lg: '380px',
            sm: '330px',
            xs: '280px',
        },
        borderBottom: '1px solid #9e9e9e',
        '& .MuiInputBase-input': {
            fontSize: {
                xl: '40px',
                lg: '40px',
                sm: '34px',
                xs: '28px',
            },
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

    event: {
        width: {
            xl: "400px",
            lg: "400px",
            sm: "340px",
            xs: "280px",
        },
        maxWidth: "400px",
        padding: "20px",
        margin: "0 auto",
        marginTop: "30px",
        borderRadius: "14px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    eventContent: {
        marginLeft: {
            xl: "-24px",
            lg: "-24px",
            sm: "-24px",
            xs: "-14px",
        },
        gap: '10px',
        display: "flex",
        alignItems: "center",
        justifyContent: 'flexStart',
    },
};

const InputEvent = () => {
    const [eventName, setEventName] = useState('');
    const [selectedDate, handleDateChange] = React.useState(new Date());
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
                    <Container sx={{ gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" component="div">
                            <Image src="/images/event.svg" alt="Event Icon" width={50} height={50} />
                        </Typography>
                        <input type="date" id="myDate"/>
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
