import React, { useState, useEffect } from 'react';
import { Typography, Container, TextField } from '@mui/material';
import Image from 'next/image';

const styles = {
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
    width: '30%',
    maxWidth: '130px',
    border: 'none',
    borderBottom: '1px solid #9e9e9e',
    borderRadius: '0',
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
  unitText: {
    fontSize: '30px',
    fontWeight: '700',
    position: 'absolute',
    top: '10px',
    right: '-5px'
  },
  space: {
    position: 'relative',
    width: '20px',
    height: '60px'
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    border: '2px solid #1488F0',
    overflow: 'hidden',
  },
  switchOption: {
    cursor: 'pointer',
    width: '100px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#1488F0',
    transition: 'background-color 0.3s',
  },
  activeOption: {
    backgroundColor: '#1488F0',
    color: '#fff',
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
  bmiTitle: {
    fontWeight: 600,
    fontSize: "16px",
    marginLeft: {
      xl: "10px",
      lg: "10px",
      sm: "10px",
      xs: "0",
    },
  },
  bmiDescription: {
    fontSize: "16px",
    textAlign: "left",
  },
};

const InputCurrentWeight = () => {
  const [weight, setWeight] = useState('');

  useEffect(() => {
    const storedWeight = localStorage.getItem('weight');
    if (storedWeight) setWeight(storedWeight);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setWeight(value);
    localStorage.setItem('weight', value);
  };

  return (
    <Container sx={styles.mainContainer}>
      <Container sx={styles.inputBlock}>
        <Container sx={{ gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            <Image src="/images/yellowWeight.svg" alt="Company Logo" width={50} height={50} />
          </Typography>
          <TextField
            variant="standard"
            value={weight}
            onChange={handleChange}
            sx={styles.textField}
            InputProps={{
              disableUnderline: true,
              placeholder: '',
              inputProps: { maxLength: 5, pattern: "[0-9]*" }
            }}
          />
          <Typography variant="p" sx={styles.space}>
            <Typography variant="p" sx={styles.unitText}>
              lbs
            </Typography>
          </Typography>
        </Container>
      </Container>


      <Container sx={styles.bmi}>
        <Container sx={styles.bmiContent}>
          <Typography component="p">
            <Image src="/images/redIbm.svg" alt="Company Logo" width={34} height={40} />
          </Typography>
          <Typography variant="p" component="div" sx={styles.bmiTitle}>
            Your BMI is 30 which is considered obese
          </Typography>
        </Container>
        <Typography sx={styles.bmiDescription} variant="p" component="div" >
          There's a lot you could gain by losing a little weight.
          We’ll use your BMI to create the weight loss program you need.
        </Typography>
      </Container>
    </Container>
  );
};

export default InputCurrentWeight;
