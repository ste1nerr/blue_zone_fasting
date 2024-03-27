import React, { useState } from 'react';
import { Typography, Container, Button } from '@mui/material';
import Image from 'next/image';
import testData from '@/mockData';
import theme from '@/styles/theme/theme';

const Finish = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const styles = {
    mainContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
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
      marginTop: '5vh',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    pack: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      width: '160px',
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
      width: '125px',
      padding: '1px 8px 1px 8px',
      '&:hover': {
        backgroundColor: '#B375FF',
      },
    }
  };

  return (
    <Container>
      <Container sx={styles.mainContainer}>
        <Typography variant="p" sx={styles.title}>
          Reach you goal faster <br /><span style={{ color: '#1488F0' }}>XX kg</span> in <span style={{ color: '#1488F0' }}>YY weeks</span>
        </Typography>

        <Typography variant="p" component="div">
          <Image src="/images/resultWeight.svg" alt="Company Logo" width={400} height={300} />
        </Typography>

        <Container sx={styles.threePacks}>
          <div
            style={{ ...styles.pack, border: hovered1 ? 'solid 2px #B375FF' : 'solid 2px #D9D9D9' }}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <Typography variant="p" sx={styles.titlePack}>
              1 Month
            </Typography>
            <Typography variant="p" sx={styles.withoutDiscountСost}>
              US 29.99$
            </Typography>
            <Typography variant="p" sx={styles.billed}>
              billed monthly
            </Typography>
            <Typography variant="p" sx={styles.costPack}>
              US 9.99$
            </Typography>
            <Button sx={styles.packBtn}>Save 33%</Button>
          </div>

          <div
            style={{ ...styles.pack, border: hovered2 ? 'solid 2px #B375FF' : 'solid 2px #D9D9D9' }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <Typography variant="p" sx={styles.titlePack}>
              1 Week
            </Typography>
            <Typography variant="p" sx={{ marginTop: '15px' }}>
            </Typography>
            <Typography variant="p" sx={styles.billed}>
              billed monthly
            </Typography>
            <Typography variant="p" sx={styles.costPack}>
              US 9.99$
            </Typography>
            <Button sx={styles.packBtn}>Free</Button>
          </div>

          <div
            style={{ ...styles.pack, border: hovered3 ? 'solid 2px #B375FF' : 'solid 2px #D9D9D9' }}
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
          >
            <Typography variant="p" sx={styles.titlePack}>
              6 Month
            </Typography>
            <Typography variant="p" sx={styles.withoutDiscountСost}>
              US 29.99$
            </Typography>
            <Typography variant="p" sx={styles.billed}>
              billed monthly
            </Typography>
            <Typography variant="p" sx={styles.costPack}>
              US 9.99$
            </Typography>
            <Button sx={styles.packBtn}>Save 60%</Button>
          </div>
        </Container>


        <Container sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/greenShield.svg" alt="Company Logo" width={40} height={40} />
          <Typography variant="p" sx={{ color: '#14AF52', fontWeight: '700', fontSize: '16px' }}>
            30 Days Money-back-Garantee
          </Typography>
        </Container>

        <Button sx={{ backgroundColor: '#1488F0', color: '#ffffff', width: '500px', borderRadius: '50px', textTransform: 'none', height: '60px', marginTop: '60px' }}>Get my plan</Button>
        <Typography variant="p" sx={{ color: '#333333', fontWeight: '700', fontSize: '30px', maxWidth: '400px', textAlign: 'center', marginTop: '100px' }}>
          Use our mobile app to improve your results
        </Typography>



        <Image src="/images/phones.svg" alt="Company Logo" width={700} height={600} />
        <Button sx={{ backgroundColor: '#1488F0', color: '#ffffff', width: '500px', borderRadius: '50px', textTransform: 'none', height: '60px' }}>Get my plan</Button>
      </Container>
    </Container>
  );
};

export default Finish;
