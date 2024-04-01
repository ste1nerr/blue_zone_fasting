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
import InputTall from '@/components/InputTall';
import InputCurrentWeight from '@/components/InputCurrentWeight';
import InputTargetWeight from '@/components/InputTargetWeight';
import WelnessProfile from '@/components/WelnessProfile';
import InputEvent from '@/components/InputEvent';
import Plan from '@/components/Plan';
import WeightLossChart from '@/components/WeightLossChart';
import FastingPlan from '@/components/FastingPlan';
import EnterMail from '@/components/EnterMail';
import Finish from '@/components/Finish';
import { Grid, Box } from '@mui/material';
import ImagePreloader from '@/components/ImagePreloader';

const styles = {
    container: {
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
    },
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'none',
        height: '80px',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #ccc',
    },
    image: {
        flexGrow: 1,
        textAlign: 'center',
    },
    contentContainer: {
        padding: '20px',
        width: '100%',
        maxWidth: '620px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '6vh',
        flex: 1,
    },
    emojiIcon: {
        width: '32px',
        marginRight: '30px',
        height: '32px',
    },
    imageIcon: {
        width: '80px',
        marginRight: '30px',
        height: 'auto',
    },
    appBarBottom: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'none',
        height: '100px',
        backgroundColor: 'transparent',
        borderTop: '1px solid #ccc',
    },
    checkBoxAndRadio: {
        marginLeft: 'auto',
    },
    appBarBottomButton: {
        backgroundColor: '#1488F0',
        borderRadius: '50px',
        width: '100%',
        maxWidth: '350px',
        height: '50px',
        padding: '10px 16px',
        textTransform: 'none',
        fontWeight: '700'
    },
    progressContainer: {
        fontSize: '40px',
        borderRadius: '5px',
        display: 'flex',
        width: '80vw',
        minWidth: '300px',
        height: '5px',
        marginBottom: '2vh',
        marginTop: '5vh'
    },
    progressItem: {
        borderRadius: '5px',
        flex: 1,
        height: '100%',
        marginLeft: '2px'
    },
    answerText: {
        maxWidth: {
            xl: '350px',
            lg: '350px',
            sm: '350px',
            xs: '250px',
        },
        fontSize: {
            xl: 22,
            lg: 18,
            sm: 16,
            xs: 16,
        },
        fontWeight: '500',
    },

    questionContainer: {
        textAlign: 'center',
        marginBottom: '4vh',
        maxWidth: '550px',
        fontSize: {
            xl: '40px',
            lg: '40px',
            sm: '34px',
            xs: '28px',
        },
        fontWeight: '700'
    },

    gridItem: {
        cursor: 'pointer',
        backgroundColor: '#FFFFFF',
        height: '80px',
        borderRadius: '14px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        width: '100%',
        transition: 'box-shadow 0.3s, border-color 0.3s',
        border: '2px solid transparent',
        '&:hover': {
            borderColor: '#1488F0',
        }
    },
    skipContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '50px'
    },
    skipText: {
        fontSize: {
            xl: '16px',
            lg: '16px',
            sm: '12px',
            xs: '12px',
        },
        textAlign: 'center',
        cursor: 'pointer',
    },
};

function TestPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [gender, setGender] = useState('');
    const [answers, setAnswers] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const totalQuestions = testData.questions.length;

    const currentQuestion = testData.questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            saveAnswer();
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptions([]);
        }
    };
    const getSkipText = (questionIndex) => {
        switch (questionIndex) {
            case 1:
                return "You can select multiple goals";
            case 4:
            case 21:
                return "What are your target zones?";
            case 25:
            case 26:
            case 27:
                return "We'll never sell or inappropriately share your personal data";
            case 30:
                return "Skip the question";
            default:
                return "";
        }
    };

    const handleSkipQuestion = () => {
        const skipText = getSkipText(currentQuestionIndex);
        if (skipText === "Skip the question") {
            localStorage.removeItem('eventName');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptions([]);
        }
    };

    const saveAnswer = () => {
        if (selectedOptions.length > 0) {
            const selectedOption = currentQuestion.options[selectedOptions[0]].text;
            setAnswers(prevAnswers => [
                ...prevAnswers,
                {
                    questionIndex: currentQuestionIndex,
                    questionText: currentQuestion.question_text,
                    selectedOption: selectedOption
                }
            ]);
        }
    };

    const handleAnswerClick = (optionIndex) => {
        if (!currentQuestion.checkboxes) {
            setSelectedOptions([optionIndex]);
        } else {
            setSelectedOptions((prevSelectedOptions) => {
                const isSelected = prevSelectedOptions.includes(optionIndex);
                if (isSelected) {
                    return prevSelectedOptions.filter((index) => index !== optionIndex);
                } else {
                    return [...prevSelectedOptions, optionIndex];
                }
            });
        }
    };

    useEffect(() => {
        if (answers.length > 0 && answers[0]?.selectedOption) {
            const answerToQuestion0 = answers[0].selectedOption.toLowerCase();
            if (answerToQuestion0 === 'male' || answerToQuestion0 === 'female') {
                setGender(answerToQuestion0);
            }
        }
    }, [answers]);

    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    let gridSpacing = 3;
    let gridJustify = 'center';
    let gridColumns = { xs: 12, sm: 6, md: 4, lg: 3 };

    if (currentQuestion.options.length === 3 || currentQuestion.options.length === 2 || currentQuestion.options.length === 4) {
        gridSpacing = 3;
        gridJustify = 'center';
        gridColumns = { xs: 12 };
    }
    let updatedContentContainerStyles = { ...styles.contentContainer };

    if (currentQuestion.options.length > 4) {
        gridSpacing = 3;
        gridJustify = 'center';
        gridColumns = { xs: 12, sm: 6 };
        if (currentQuestion.options.length > 4) {
            updatedContentContainerStyles.maxWidth = '900px';
        }
    }

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
                <ImagePreloader/>
                {currentQuestionIndex <= 31 && (
                    <Container style={styles.progressContainer}>
                        {[...Array(totalQuestions)].map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    borderRadius: '5px',
                                    flex: 1,
                                    backgroundColor: index <= currentQuestionIndex ? '#1488F0' : '#CCD4E2',
                                    height: '100%',
                                    marginLeft: index !== 0 ? '2px' : 0,
                                }}
                            />
                        ))}
                    </Container>
                )}
                <Container style={updatedContentContainerStyles}>
                    {currentQuestionIndex <= 31 && (
                        <Typography variant="h4" sx={currentQuestionIndex === 2 ? { ...styles.questionContainer, maxWidth: '400px' } : (currentQuestionIndex === 5 || currentQuestionIndex === 8) ? { ...styles.questionContainer, maxWidth: '450px' } : (currentQuestionIndex === 12 ? { ...styles.questionContainer, maxWidth: '450px' } : (currentQuestionIndex === 13 || currentQuestionIndex === 14 || currentQuestionIndex === 21 ? { ...styles.questionContainer, maxWidth: '600px' } : styles.questionContainer))}>
                            {currentQuestion.question_text}
                        </Typography>

                    )}
                    <Grid container spacing={gridSpacing} justifyContent={gridJustify}>
                        {currentQuestion.options.map((option, index) => (
                            <Grid item {...gridColumns} key={index} style={{ display: 'flex', justifyContent: 'center' }} onClick={() => handleAnswerClick(index)}>
                                <Box sx={styles.gridItem}>
                                    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        {option.icon_type === 'none' ? (
                                            <span></span>
                                        ) : (
                                            option.icon_type === 'emoji' ? (
                                                (gender === 'female' && option.womanIcon) ? (
                                                    <Image src={option.womanIcon} alt={option.text} width={24} height={24} style={styles.emojiIcon} />
                                                ) : (
                                                    <Image src={option.icon} alt={option.text} width={24} height={24} style={styles.emojiIcon} />
                                                )
                                            ) : (
                                                (gender === 'female' && option.womanIcon) ? (
                                                    <Image src={option.womanIcon} alt={option.text} width={24} height={24} style={styles.imageIcon} />
                                                ) : (
                                                    <Image src={option.icon} alt={option.text} width={24} height={24} style={styles.imageIcon} />
                                                )
                                            )
                                        )}
                                        <Typography sx={styles.answerText}>{option.text}</Typography>
                                        {currentQuestion.checkboxes ? (
                                            <Checkbox
                                                checked={selectedOptions.includes(index)}
                                                onChange={() => handleAnswerClick(index)}
                                                color="primary"
                                                sx={styles.checkBoxAndRadio}
                                            />
                                        ) : (
                                            <Radio
                                                checked={selectedOptions[0] === index}
                                                onChange={() => handleAnswerClick(index)}
                                                color="primary"
                                                sx={styles.checkBoxAndRadio}
                                            />
                                        )}
                                    </Container>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    {currentQuestionIndex === 25 && <InputTall />}
                    {currentQuestionIndex === 26 && <InputCurrentWeight />}
                    {currentQuestionIndex === 27 && <InputTargetWeight />}
                    {currentQuestionIndex === 28 && <WelnessProfile />}
                    {currentQuestionIndex === 30 && <InputEvent />}
                    {currentQuestionIndex === 31 && <Plan />}
                    {currentQuestionIndex === 32 && <FastingPlan />}
                    {currentQuestionIndex === 33 && <EnterMail />}
                    {currentQuestionIndex === 34 && <Finish />}
                </Container>
                <Container sx={styles.skipContainer}>
                    <Typography
                        sx={{
                            ...styles.skipText,
                            cursor: getSkipText(currentQuestionIndex) === "Skip the question" ? "pointer" : "default"
                        }}
                        variant="body2"
                        component="div"
                        onClick={handleSkipQuestion}
                    >
                        {getSkipText(currentQuestionIndex)}
                    </Typography>
                </Container>

                {currentQuestionIndex !== 34 && (
                    <AppBar position="static" sx={styles.appBarBottom}>
                        <Container sx={{ textAlign: 'center' }}>
                            <Button onClick={handleNextQuestion} variant="contained" color="primary" sx={styles.appBarBottomButton}> Continue</Button>
                            {/* disabled={isButtonDisabled} */}
                        </Container>
                    </AppBar>
                )}
            </div>
        </ThemeProvider>
    );
}

export default TestPage;