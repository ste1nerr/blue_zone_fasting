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
    width: '40%',
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
    top: '2px',
    right: '-15px'
  },
  space: {
    position: 'relative',
    width: '10px',
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

const CustomSwitch = ({ isInCm, toggleUnit }) => {
  return (
    <div style={styles.switchContainer}>
      <div style={{ ...styles.switchOption, ...(isInCm ? styles.activeOption : {}) }} onClick={() => !isInCm && toggleUnit()}>
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
      localStorage.setItem('unit', newIsInCm ? 'ft' : 'cm');
      return newIsInCm;
    });
  };

  return (
    <Container sx={styles.mainContainer}>
      <Container sx={styles.inputBlock}>
        <Container sx={{ gap: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            <Image src="/images/greenLine.svg" alt="img" width={50} height={50} />
          </Typography>
          <TextField
            variant="standard"
            value={height}
            onChange={handleInputChange}
            sx={styles.textField}
            InputProps={{
              disableUnderline: true,
              placeholder: '',
              inputProps: { maxLength: 5, pattern: "[0-9]*" }
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
          <Typography variant="p" component="div" sx={styles.bmiTitle}>
            Calculating your BMI
          </Typography>
        </Container>
        <Typography sx={styles.bmiDescription} variant="p" component="div" >
          Body mass index (BMI) is a metric of body fat percentage commonly
          used to estimate risk levels of potential health problems.
        </Typography>
      </Container>
    </Container>
  );
};

export default InputTall;
