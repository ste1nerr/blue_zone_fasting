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
    width: '130px',
    marginLeft: '20px',
    marginRight: '10px',
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
  bmi: {
    textAlign:'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '30px',
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    width: '350px',
    height: '150px',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
  },
  bmiContent: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop: '20px',
    marginBottom: '5px',
    gap: '8%'
  }
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
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
              inputProps: { maxLength: 5 }
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
          <Typography variant="p" component="div" sx={{ fontWeight: '700', fontSize: '18px' }}>
            Your BMI is 30 which is considered obese
          </Typography>
        </Container>
        <Typography sx={{ width: '100%', fontSize: '16px' }} variant="p" component="div" >
          There's a lot you could gain by losing a little weight. 
          We’ll use your BMI to create the weight loss program you need.
        </Typography>
      </Container>
    </Container>
  );
};

export default InputCurrentWeight;
