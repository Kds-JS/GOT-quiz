// LiBRAIRIES
import React, { Fragment, useEffect, useRef, useState } from "react";
import './Quiz.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Levels from "../Levels/Levels";
import ProgressBar from "../ProgressBar/ProgressBar";
import QuizOver from "../QuizOver/QuizOver";
import { QuizGOT } from "../QuizGOT/QuizGOT";

// icon
import { FaChevronRight } from 'react-icons/fa';

const Quiz = ({userData}) => {

    const [quizEnd, setQuizEnd] = useState(false);
    const [levelNames,setLevelNames] = useState(['debutant','amateur','expert']);
    const [quizLevel,setQuizLevel] = useState(0);
    const [storedQuestion, setStoredQuestion] = useState([])
    const [idQuestion,setIdQuestion] = useState(0);
    const [question,setQuestion] = useState('');
    const [options,setOptions] = useState([]);
    const [maxQuestion,setMaxQuestion] = useState(9);
    const [userAnswer, setUserAnswer] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [progress, setProgress] = useState(true);
    const [score, setScore] = useState(0);
    const askedData = useRef();
    // console.log(askedData);
    
    const loadQuestions = level => {
        const array = QuizGOT[level];
        askedData.current = array;
        if (!quizEnd){
            const newArray = array.map(({answer,description,image, ...keepRest}) => keepRest);
            setStoredQuestion(newArray);
        } else {
            console.log('pas de question');
        }
    }

    useEffect(() => {
        
        loadQuestions(levelNames[quizLevel]);
        

    },[quizLevel,quizEnd]);

    useEffect(() => {
        if (storedQuestion.length != 0){
            setQuestion(storedQuestion[idQuestion].quiz);

            setOptions(storedQuestion[idQuestion].options);
        }
    },[storedQuestion, idQuestion]);

    useEffect (() => {
        if (quizLevel == levelNames.length -1 ) {
            setProgress(false);
        }
    }, [quizLevel,levelNames])


    const nextQuestion = () => {
        if (idQuestion != maxQuestion) {
            setIdQuestion(idQuestion + 1);
            setBtnDisabled(true);
        } else {
            setQuizEnd(true);
        }

        if (userAnswer == askedData.current[idQuestion].answer) {
            setScore(score + 1);
            toast.success('Bravo +1', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            toast.error('Raté 0', {
                icon: false,
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    } 

    const nextLevel = (level) => {
        setQuizEnd(false);
        setQuizLevel(level);
        setIdQuestion(0);
        setBtnDisabled(true);
        setScore(0);
    }

    const restartLevel = () => {
        nextLevel(0)
        setProgress(true); 
    }

    const submittedUserAnswer = submitAnswer => {
        setUserAnswer(submitAnswer);
        setBtnDisabled(false);       
    }
    


    const displayedOptions = options.map((option, index) => {
        return (
            <p
            className={userAnswer == option && "selected"} 
            key={index}
            onClick={(e) => submittedUserAnswer(option)}
            >
                <FaChevronRight/> <span>{option}</span>
            </p>
        )
    })

    return (

        <div>

        { quizEnd ? (
            <Fragment>
                <QuizOver
                nextLevel={nextLevel}
                restartLevel={restartLevel}
                quizLevel={quizLevel}
                progress={progress}
                score={score}
                ref={askedData}
                />
                
            </Fragment>
        )
        :
        (
        <Fragment>
            <Levels
            quizLevel={quizLevel}
            levelNames={levelNames}
            />
            <ProgressBar 
            idQuestion={idQuestion}
            />

            <div className="quiz">
                <h5>{question}</h5>
                {displayedOptions}

                <button 
                    disabled={btnDisabled}
                    onClick={() => nextQuestion()}
                >
                    {
                        idQuestion != maxQuestion ? 'Suivant' : 'Terminé'
                    }
                </button>
            </div>
            
        </Fragment>
        ) 
        }
        <ToastContainer theme="colored"/>
        </div>
    ) 
    
    
}

export default Quiz;