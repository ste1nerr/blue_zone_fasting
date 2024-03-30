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
  bmiContent: {
    gap: '10px',
    display: "flex",
    alignItems: "center",
    justifyContent: 'flexStart',
  },
  bmiDescription: {
    fontSize: "14px",
    textAlign: "center",
  },
  title: {
    textAlign: 'center',
    maxWidth: '550px',
    fontSize: {
      xl: '40px',
      lg: '40px',
      sm: '34px',
      xs: '28px',
    },
    fontWeight: '700',
    fontFamily: 'Roboto, sans-serif',
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
          <Typography sx={styles.bmiDescription} variant="p" component="div" >
            Please check our <span style={{ color: '#1488F0', cursor: 'pointer' }}>Privacy Policy</span> to understand how we use your data
          </Typography>
        </Container>

      </Container>
    </Container>
  );
};

export default EnterMail;