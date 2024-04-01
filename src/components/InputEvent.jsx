import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import Image from 'next/image';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

const styles = {
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
    const [selectedDate, handleDateChange] = React.useState(dayjs());

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
                    <Container sx={{
                        gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
                        width: {
                            xl: '310px',
                            lg: '280px',
                            sm: '260px',
                            xs: '220px',
                        },
                    }}>
                        <Typography variant="h6" component="div">
                            <Image src="/images/event.svg" alt="Event Icon" width={50} height={50} />
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ mobileDate: 'DD\\MM\\YY' }}>
                            <MobileDatePicker
                                slotProps={{
                                    textField: {
                                        variant: "standard",
                                        sx: {
                                            '& input': {
                                                margin: '0 auto',
                                                fontWeight: '700',
                                                textAlign: 'center',
                                                width: '100%',
                                                fontSize: {
                                                    xl: '48px',
                                                    lg: '42px',
                                                    sm: '36px',
                                                    xs: '26px',
                                                },
                                            }
                                        }
                                    }
                                }}
                                value={selectedDate}
                                onChange={handleDateChange}
                                format="DD\MM\YY"
                            />
                        </LocalizationProvider>

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
