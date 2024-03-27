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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10vh',
        flex: 1,
    },
    optionsContainer: {
        flex: '1',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(550px, 1fr))',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '25px'
    },
    option: {
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '14px',
        paddingLeft: '20px',
        paddingRight: '20px',
        justifyContent: 'space-between',
        maxWidth: '550px',
        marginTop: '-10px',
    },
    optionsContainerWrap: {
        flexWrap: 'wrap',
        maxHeight: '300px',
    },

    emojiIcon: {
        marginRight: '0.8vw',
        width: '32px',
        height: '32px',
    },
    imageIcon: {
        marginRight: '0.8vw',
        width: '16.8%',
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
        marginRight: '20px',
        marginLeft: 'auto',
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
    progressContainer: {
        fontSize: '40px',
        borderRadius: '5px',
        display: 'flex',
        width: '60%',
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
            xl: 20,
            lg: 20,
            sm: 20,
            xs: 16,
        },
        fontWeight: '600',
    },
    testContent: {
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
    },
    questionContainer: {
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
        marginBottom: '4vh',
        maxWidth: '550px',
        fontSize: '40px',
        fontWeight: '700'
    }
};

function TestPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [gender, setGender] = useState('');
    const [answers, setAnswers] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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

    if (currentQuestion.options.length <= 4) {
        styles.optionsContainer.gridTemplateColumns = 'repeat(1, minmax(550px, 1fr))';
    } else {
        styles.optionsContainer.gridTemplateColumns = 'repeat(2, minmax(450px, 1fr))';
    }

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

    const optionWidth = currentQuestion.options.length > 4 ? '35vw' : '80vw';



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
                {currentQuestionIndex <= 31 && (
                    <div style={styles.progressContainer}>
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
                    </div>
                )}
                <div style={styles.contentContainer}>
                    <Container sx={styles.testContent}>
                        {currentQuestionIndex <= 31 && (
                            <Typography variant="h4" sx={styles.questionContainer}>
                                {currentQuestion.question_text}
                            </Typography>
                        )}
                        <Container sx={{ ...styles.optionsContainer }}>
                            {currentQuestion.options.map((option, index) => {
                                return (
                                    <div key={index} style={{ ...styles.option, width: optionWidth }}>
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
                                    </div>
                                );
                            })}
                            { }
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
                    </Container>
                </div>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '300px', height: '50px' }}>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            textAlign: 'center',
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


                            <Button
                                onClick={handleNextQuestion}
                                variant="contained"
                                color="primary"
                                sx={styles.appBarBottomButton}
                            // disabled={isButtonDisabled}
                            >
                                Continue
                            </Button>

                        </Container>
                    </AppBar>
                )}
            </div>
        </ThemeProvider>
    );
}

export default TestPage;