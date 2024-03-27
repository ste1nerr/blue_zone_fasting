import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import testData from '@/mockData';
import theme from '@/styles/theme/theme';

const FastingPlan = () => {
  const styles = {
    title: {
      fontWeight: '700',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '40px',
    },
  };

  return (
    <>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6vh' }}>
        <Typography variant="p" sx={{ ...styles.title }}>
          Crafting your <span style={{ color: '#1488F0' }}><br />Fasting Plan</span>
        </Typography>
        <Image src="/images/ny_girl.svg" alt="Quiz Image" width={700} height={400} />
      </Container>
    </>
  );
};

export default FastingPlan;
