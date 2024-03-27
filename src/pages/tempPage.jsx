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
import InputTall from '@/components/InputTall';
import InputCurrentWeight from '@/components/InputCurrentWeight';
import InputTargetWeight from '@/components/InputTargetWeight';
import WelnessProfile from '@/components/WelnessProfile';
import InputEvent from '@/components/InputEvent';
import WeightLossChart from '@/components/WeightLossChart'; 
import Plan from '@/components/Plan'; 
import FastingPlan from '@/components/FastingPlan';
import EnterMail from '@/components/EnterMail';
const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'none',
        height: '80px',
        backgroundColor: 'transparent',
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
        justifyContent: 'center',
        gap: '100px',
        textAlign: 'center',
    },
    title: {
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
        marginTop: '34px',
    },
    button: {
        padding: '10px 100px',
        borderRadius: "50px",
    },
    appBarBottom: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'none',
        height: '100px',
        backgroundColor: 'transparent',
        borderTop: '1px solid #ccc',
    },
    appBarBottomButton: {
        backgroundColor: '#1488F0',
        borderRadius: '50px',
        width: '350px',
        height: '50px',
        padding: '10px 16px',
        textTransform: 'none',
        fontWeight: '700'
    },

};

function TempPage() {
    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container}>
                <AppBar position="static" sx={styles.appBar}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={styles.image}>
                            <Image src="/images/logo.svg" alt="Company Logo" width={250} height={50} />
                        </Typography>
                        <Image src="/images/bars.svg" alt="Quiz Image" width={32} height={32} />
                    </Toolbar>
                </AppBar>

                {/* <InputTall></InputTall> */}
                {/* <InputCurrentWeight></InputCurrentWeight> */}
                {/* <InputTargetWeight></InputTargetWeight> */}
                {/* <WelnessProfile></WelnessProfile> */}
                {/* <InputEvent></InputEvent> */}

                {/* <FastingPlan/> */}

                <EnterMail/>

                <AppBar position="static" sx={styles.appBarBottom}>
                    <Container sx={{ textAlign: 'center' }}>
                        {/* onClick={handleNextQuestion}  */}
                        <Button variant="contained" color="primary" sx={styles.appBarBottomButton}>Continue</Button>
                    </Container>
                </AppBar>
            </div>
        </ThemeProvider>
    );
}

export default TempPage;
