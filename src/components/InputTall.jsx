import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Link from 'next/link';
import Image from 'next/image';
import theme from '@/styles/theme/theme';
import Switch from '@mui/material/Switch';


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
  button: {
    margin: '10px',
    '&:hover': {
      backgroundColor: '#2196f3'
    }
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
    flex: 1,
    cursor: 'pointer',
    padding: '10px 40px 10px 40px',
    fontSize: '20px',
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
    marginTop: '20px',
    marginBottom:'5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8%'
  }
};

const CustomSwitch = ({ isInCm, toggleUnit }) => {
  return (
    <div style={styles.switchContainer}>
      <div style={{ ...styles.switchOption, ...(isInCm ? styles.activeOption : {}), paddingLeft: '50px' }} onClick={() => !isInCm && toggleUnit()}>
        ft
      </div>
      <div style={{ ...styles.switchOption, ...(isInCm ? {} : styles.activeOption) }} onClick={() => isInCm && toggleUnit()} >
        cm
      </div>
    </div>
  );
};

const InputTall = () => {
  const [height, setHeight] = useState('');
  const [isInCm, setIsInCm] = useState(false);

  useEffect(() => {
    const storedHeight = localStorage.getItem('height');
    const storedUnit = localStorage.getItem('unit');
    if (storedHeight) setHeight(storedHeight);
    if (storedUnit) setIsInCm(storedUnit === 'cm');
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setHeight(value);
    localStorage.setItem('height', value);
  };

  const toggleUnit = () => {
    setIsInCm((prevIsInCm) => {
      const newIsInCm = !prevIsInCm;
      localStorage.setItem('unit', newIsInCm ? 'ft' :'cm');
      return newIsInCm;
    });
  };

  return (
    <Container sx={styles.mainContainer}>
      <Container sx={styles.inputBlock}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            <Image src="/images/greenLine.svg" alt="Company Logo" width={50} height={50} />
          </Typography>
          <TextField
            variant="standard"
            value={height}
            onChange={handleInputChange}
            sx={styles.textField}
            InputProps={{
              disableUnderline: true,
              placeholder: '',
              inputProps: { maxLength: 5 }
            }}
          />
          <Typography variant="p" sx={styles.space}>
            <Typography variant="p" sx={{ ...styles.unitText, ...(isInCm ? { marginRight: '20px' } : {}) }}>
              {isInCm ? 'ft' : 'cm'}
            </Typography>
          </Typography>
        </Container>
        <CustomSwitch isInCm={isInCm} toggleUnit={toggleUnit} />
      </Container>

      <Container sx={styles.bmi}>
        <Container sx={styles.bmiContent}>
          <Typography component="p">
            <Image src="/images/yellowFire.svg" alt="Company Logo" width={34} height={40} />
          </Typography>
          <Typography variant="p" component="div" sx={{ fontWeight: '600', fontSize: '18px' }}>
            Calculating your BMI
          </Typography>
        </Container>
        <Typography sx={{ width: '110%', fontSize: '16px' }} variant="p" component="div" >
          Body mass index (BMI) is a metric of body fat percentage commonly
          used to estimate risk levels of potential health problems.
        </Typography>
      </Container>
    </Container>
  );
};

export default InputTall;