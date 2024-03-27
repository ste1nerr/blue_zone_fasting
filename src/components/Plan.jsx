import React from 'react';
import { Typography, Container } from '@mui/material';
import WeightLossChart from '@/components/WeightLossChart';

const styles = {
  mainContainer: {
    width: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    textAlign: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: '14px',
  },
  chartContainer: {
    position: 'relative',
  },
  textContainer: {
    width: '88%',
    backgroundColor: '#56A8EB',
    padding: '20px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    color: '#FFFFFF'
  },
  overlay1: {
    paddingTop:"4px",
    position: 'absolute',
    top: 5,
    left: 55,
    width: '60px',
    height: '30px',
    backgroundColor: '#CCD4E24D',
    zIndex: 1,
    borderRadius: '8px',
  },
  overlay2: {
    paddingTop:"2px",
    borderRadius: '8px',
    position: 'absolute',
    bottom: 85,
    right: 35,
    width: '60px',
    height: '30px',
    border: '2px solid #95BA69',
    pointerEvents: 'none',
    zIndex: 1,
  },
  textAbsolute1:{
    fontWeight:'600',
    color:'#999999',
    textAlign:'center'
  },
  textAbsolute2:{
    fontWeight:'600',
    color:'#95BA69',
    textAlign:'center'
  }
};

const Plan = () => {
  const weight = localStorage.getItem('weight');
  const targetWeight = localStorage.getItem('targetWeight');
  return (
    <Container sx={styles.mainContainer}>
      <Container sx={styles.contentContainer}>
        <Container sx={styles.chartContainer}>
          <div style={styles.overlay1}>
            <Typography variant="body1" component="div" sx={styles.textAbsolute1}>
            {weight} kg
            </Typography>
          </div>
          <div style={styles.overlay2}>
            <Typography variant="body1" component="div" sx={styles.textAbsolute2}>
              {targetWeight} kg
            </Typography>
          </div>
          <WeightLossChart />
        </Container>
        <Container sx={styles.textContainer}>
          <Typography variant="body1" component="div" sx={styles.text}>
            The only plan you’ll ever need to get in shape in 2023. You're one step closer to achieve your goal! 45 kg by Apr 03, 2024
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default Plan;
