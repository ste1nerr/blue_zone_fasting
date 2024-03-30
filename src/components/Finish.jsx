import React, { useState } from 'react';
import { Typography, Button, ThemeProvider, useTheme } from '@mui/material';
import Image from 'next/image';
import testData from '@/mockData';
import theme from '@/styles/theme/theme';

const Finish = () => {
  const theme = useTheme();
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const styles = {
    mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      maxWidth: '420px',
      fontWeight: '700',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '40px',
      marginBottom: '4vh',
    },
    titlePack: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      marginTop: '20px',
      marginBottom: '20px',
    },
    costPack: {
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
    },
    threePacks: {
      width: '100%',
      marginTop: '5vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3%',
    },
    pack: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      width: '50%',
      maxWidth: '160px',
      height: '160px',
      gap: '2px',
      border: 'solid 2px #D9D9D9',
      transition: 'borderСolor 0.3s ease',
      '&:hover': {
        border: 'solid 2px #B375FF',
      },
      '&:active': {
        border: 'solid 2px #B375FF',
      },
    },
    withoutDiscountСost: {
      fontWeight: '600',
      textAlign: 'center',
      color: '#999999',
      fontSize: '14px',
    },
    billed: {
      color: '#999999',
      fontSize: '12px',
    },
    packBtn: {
      color: '#ffffff',
      marginTop: '5px',
      borderRadius: '10px',
      fontSize: '14px',
      backgroundColor: '#D9D9D9',
      width: '90%',
      padding: '1px 8px 1px 8px',
      '&:hover': {
        backgroundColor: '#B375FF',
      },
    },
    button: {
      backgroundColor: '#1488F0',
      color: '#ffffff',
      width: '100%',
      maxWidth: '500px',
      borderRadius: '50px',
      textTransform: 'none',
      height: '60px',
      transition: 'background-color 0.3s',
      marginTop: '50px',
    },
    buttonHover: {
      backgroundColor: '#0161b7',
    },
    girlImgContainer: {
      width: '100%',
      height: '300px',
      position: 'relative'
    },
    mobileImgContainer: {
      width: '100%',
      height: '50vh',
      position: 'relative'
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.mainContainer}>
        <Typography variant="p" style={styles.title}>
          Reach you goal faster <br /><span style={{ color: '#1488F0' }}>XX kg</span> in <span style={{ color: '#1488F0' }}>YY weeks</span>
        </Typography>

        <div style={styles.girlImgContainer}>
          <Typography variant="p" component="div">
            <Image src="/images/resultWeight.svg"
              alt="Quiz Image"
              className={styles.img}
              layout="fill"
              objectFit="contain" />
          </Typography>
        </div>

        <div style={styles.threePacks}>
          <div
            style={{ ...styles.pack, border: hovered1 ? 'solid 2px #B375FF' : 'solid 2px #D9D9D9' }}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <Typography variant="p" style={styles.titlePack}>
              1 Month
            </Typography>
            <Typography variant="p" style={styles.withoutDiscountСost}>
              US 29.99$
            </Typography>
            <Typography variant="p" style={styles.billed}>
              billed monthly
            </Typography>
            <Typography variant="p" style={styles.costPack}>
              US 9.99$
            </Typography>
            <Button style={styles.packBtn}>Save 33%</Button>
          </div>

          <div
            style={{ ...styles.pack, border: hovered2 ? 'solid 2px #B375FF' : 'solid 2px #D9D9D9' }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <Typography variant="p" style={styles.titlePack}>
              1 Week
            </Typography>
            <Typography variant="p" style={{ marginTop: '15px' }}>
            </Typography>
            <Typography variant="p" style={styles.billed}>
              billed monthly
            </Typography>
            <Typography variant="p" style={styles.costPack}>
              US 9.99$
            </Typography>
            <Button style={styles.packBtn}>Free</Button>
          </div>

          <div
            style={{ ...styles.pack, border: hovered3 ? 'solid 2px #B375FF' : 'solid 2px #D9D9D9' }}
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
          >
            <Typography variant="p" style={styles.titlePack}>
              6 Month
            </Typography>
            <Typography variant="p" style={styles.withoutDiscountСost}>
              US 29.99$
            </Typography>
            <Typography variant="p" style={styles.billed}>
              billed monthly
            </Typography>
            <Typography variant="p" style={styles.costPack}>
              US 9.99$
            </Typography>
            <Button style={styles.packBtn}>Save 60%</Button>
          </div>
        </div>

        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/greenShield.svg" alt="Company Logo" width={40} height={40} />
          <Typography variant="p" style={{ color: '#14AF52', fontWeight: '700', fontSize: '16px' }}>
            30 Days Money-back-Garantee
          </Typography>
        </div>

        <Button style={{ ...styles.button, '&:hover': styles.buttonHover }}>Get my plan</Button>
        <Typography variant="p" style={{ color: '#333333', fontWeight: '700', fontSize: '30px', maxWidth: '400px', textAlign: 'center', marginTop: '100px' }}>
          Use our mobile app to improve your results
        </Typography>

        <div style={styles.mobileImgContainer}>
          <Typography variant="p" component="div">
            <Image src="/images/phones.svg" alt="Company Logo" layout="fill" objectFit="fill" />
          </Typography>
        </div>
        <Button style={{ ...styles.button, '&:hover': styles.buttonHover }}>Get my plan</Button>
      </div>
    </ThemeProvider>
  );
};

export default Finish;
