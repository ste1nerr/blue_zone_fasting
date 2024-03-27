import React, { useState } from 'react';
import { Typography, Container, TextField } from '@mui/material';
import Image from 'next/image';
import GradientLine from '@/components/GradientLine';

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
    backgroundColor:'white',
    borderRadius: '14px',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
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

  gradientContainer: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    height: '250px',
  },
  bmi: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '30px',
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    width: '370px',
    height: '150px',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)',
  },
  bmiContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '5px',
    gap: '8%'
  }
};

const WelnessProfile = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isInCm, setIsInCm] = useState(true);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const toggleUnit = () => {
    setIsInCm(!isInCm);
  };

  const handleSubmit = () => {
    console.log('Weight submitted:', weight);
    console.log('Height submitted:', height);
  };
  const weightl = localStorage.getItem('weight');
  const heightl = localStorage.getItem('height');
  const calculatedBMI = weightl / Math.pow(heightl / 100, 2);
      
  const roundedBMI = calculatedBMI.toFixed(1);
  return (
    <Container sx={styles.mainContainer}>

      <Container sx={styles.inputBlock}>
        <Container sx={styles.gradientContainer}>
          <GradientLine value={roundedBMI}></GradientLine>
        </Container>
      </Container>


      <Container sx={styles.bmi}>
        <Container sx={styles.bmiContent}>
          <Typography component="p">
            <Image src="/images/redIbm.svg" alt="Company Logo" width={34} height={40} />
          </Typography>
          <Typography variant="p" component="div" sx={{ fontWeight: '700', fontSize: '18px' }}>
            Risks for an unhealthy BMI
          </Typography>
        </Container>
        <Typography sx={{ width: '100%', fontSize: '16px' }} variant="p" component="div" >
          Your weight is risky for your health. We will use your index to create the weight loss program fitting your needs.
        </Typography>
      </Container>
    </Container>
  );
};

export default WelnessProfile;
