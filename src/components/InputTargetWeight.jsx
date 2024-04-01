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
    top: '5px',
    right: '-15px'
  },
  space: {
    position: 'relative',
    width: '10px',
    height: '60px'
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
    gap:'10px',
    display: "flex",
    alignItems: "center",
    justifyContent:'flexStart',
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

const InputTargetWeight = () => {
  const [targetWeight, setTargetWeight] = useState('');

  useEffect(() => {
    const storedTargetWeight = localStorage.getItem('targetWeight');
    if (storedTargetWeight) setTargetWeight(storedTargetWeight);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setTargetWeight(value);
    localStorage.setItem('targetWeight', value);
  };

  return (
    <Container sx={styles.mainContainer}>
      <Container sx={styles.inputBlock}>
      <Container sx={{ gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'-10px' }}>
          <Typography variant="h6" component="div">
            <Image src="/images/orangeWeight.svg" alt="Company Logo" width={50} height={50} />
          </Typography>
          <TextField
            variant="standard"
            value={targetWeight}
            onChange={handleChange}
            sx={styles.textField}
            InputProps={{
              disableUnderline: true,
              placeholder: '',
              inputProps: { maxLength: 5, pattern: "[0-9]*" }
            }}
          />

          <Typography variant="p" sx={styles.space}>
            <Typography variant="p" sx={{ ...styles.unitText }}>
              lbs
            </Typography>
          </Typography>
        </Container>
      </Container>

      <Container sx={styles.bmi}>
        <Container sx={styles.bmiContent}>
          <Typography component="p">
            <Image src="/images/darts.svg" alt="Company Logo" width={34} height={40} />
          </Typography>
          <Typography variant="p" component="div" sx={styles.bmiTitle}>
            Get Moving: Gain 124%
            of your weight
            </Typography>
        </Container>
        <Typography sx={styles.bmiDescription} variant="p" component="div" >
          A study by the University of Utah found that working out just
          5 minutes per day can maintain your level of fitness,
          improve energy levels, and lead to better sleep.
        </Typography>
      </Container>
    </Container>
  );
};

export default InputTargetWeight;
