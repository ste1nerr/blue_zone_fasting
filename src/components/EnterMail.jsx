import React, { useState, useEffect } from 'react';
import { Typography, Container, TextField } from '@mui/material';
import Image from 'next/image';

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputBlock: {
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    width: '455px',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
  },
  textField: {
    width: '320px',
    marginLeft: '20px',
    border: 'none',
    borderBottom: '1px solid #9e9e9e',
    '& .MuiInputBase-input': {
      fontSize: '18px',
      fontWeight: '700',
      textAlign: 'left',
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
  bmi: {
    display: 'flex',
    marginTop: '30px',
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    width: '455px',
    height: '75px',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
  }, 
  title: {
    textAlign:'center',
    maxWidth: '410px',
    fontWeight: '700',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '40px',
    marginBottom: '4vh',
  },
};

const EnterMail = () => {
  const [targetWeight, setTargetWeight] = useState('');

  useEffect(() => {
    const storedTargetWeight = localStorage.getItem('email');
    if (storedTargetWeight) setTargetWeight(storedTargetWeight);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setTargetWeight(value);
    localStorage.setItem('email', value);
  };

  return (
    <Container sx={styles.mainContainer}>
      <Typography variant="p" sx={{ ...styles.title }}>
        Enter your email to get your fasting plan!
      </Typography>
      <Container sx={styles.inputBlock}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            <Image src="/images/mail.svg" alt="Company Logo" width={50} height={50} />
          </Typography>
          <TextField
            variant="standard"
            value={targetWeight}
            onChange={handleChange}
            sx={styles.textField}
            InputProps={{
              disableUnderline: true,
              placeholder: 'Enter your email',
              inputProps: { maxLength: 50 }
            }}
          />
        </Container>
      </Container>

      <Container sx={styles.bmi}>
        <Container sx={styles.bmiContent}>
          <Typography sx={{ width: '100%', fontSize: '16px', textAlign: 'center', marginTop: '20px' }} variant="p" component="div" >
            Please check our <span style={{ color: '#1488F0', cursor:'pointer'}}>Privacy Policy</span> to understand how we use your data
          </Typography>
        </Container>

      </Container>
    </Container>
  );
};

export default EnterMail;
