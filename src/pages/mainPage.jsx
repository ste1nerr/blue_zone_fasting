import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import theme from '@/styles/theme/theme';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid #ccc',
  },
  appBarContainer: {
    textAlign: 'center',
  },
  mainContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flexStart',
    gap: {
      xl: '80px',
      lg: '80px',
      md: '50px',
      sm: '50px',
      xs: '20px',
    },
    textAlign: 'center',
  },
  title: {

    marginTop: {
      xl: '12vh',
      lg: '12vh',
      md: '14vh',
      sm: '8vh',
      xs: '8vh',
    },
    fontWeight: '700',
    maxWidth: '400px',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '20px',
    textAlign: 'center',
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '280px',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  appBarBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    height: '100px',
    backgroundColor: 'transparent',
    borderTop: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#1488F0',
    borderRadius: '50px',
    width: '100%',
    maxWidth: '350px',
    height: '50px',
    padding: '10px 16px',
    textTransform: 'none',
    fontWeight: '700'
  },
  imgContainer: {
    width: '100%',
    height: '400px',
    position: 'relative'
  }
};

function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <div style={styles.container}>
        <AppBar position="static" sx={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Image src="/images/logo.svg" alt="Company Logo" width={210} height={50} />
            </Typography>
            <Image src="/images/bars.svg" alt="Quiz Image" width={32} height={32} />
          </Toolbar>
        </AppBar>

        <Container sx={styles.mainContainer}>
          <Typography variant="h4" sx={styles.title}>
            Begin Your Intermittent Fasting Program
          </Typography>


          <Container sx={styles.imgContainer}>
            <Image
              src="/images/before&after.svg"
              alt="Quiz Image"
              className={styles.img}
              layout="fill"
              objectFit="contain"
            />
          </Container>

        </Container>

        <Container sx={styles.descriptionContainer}>
          <Typography variant="subtitle1" sx={styles.description}>
            Unlock your personalised fasting plan by answering a few quick questions
          </Typography>
        </Container>


        <AppBar position="static" sx={styles.appBarBottom}>
          <Container sx={styles.buttonContainer}>
            <Link href="/testPage">
              <Button variant="contained" color="primary" sx={styles.button}>Continue</Button>
            </Link>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default MainPage;
