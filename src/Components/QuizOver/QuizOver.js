// Librairies
import React, { forwardRef, Fragment, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './QuizOver.scss'

import iconTrone from '../../Images/trone-de-fer.png';

const QuizOver = forwardRef((props,ref) => {

    const {nextLevel,restartLevel, quizLevel,progress,score} = props;

    const [showModal,setShowModal] = useState(false);
    const [asked, setAsked] = useState([]);
    const [quizInfos, setQuizInfo] = useState({});
    

    useEffect(() => {
        setAsked(ref.current);
        
        score < 5 && setTimeout(() => {
                nextLevel(quizLevel);
            }, 5000);
    
    })

  

    const displayedInfos = index => {
        setShowModal(true);
        setQuizInfo(asked[index]);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    const displayedAnswers = asked.map( (question,index) => {
        return (
            <tr key={index}>
                <td>{question.quiz}</td>
                <td>{question.answer}</td>
                <td><button onClick={() => displayedInfos(index) }>Infos</button></td>
            </tr>
        )
    })

    const displayedProgress = progress ? (
        <Fragment>
            <div><h1 style={{color: 'green'}}>Bravo, Passez au niveau suivant</h1></div>
            <button onClick={() => nextLevel(quizLevel + 1)}>Niveau Suivant</button>
        </Fragment>
    )
    :
    (
        <Fragment>
            <div><h1 style={{color: 'green'}}>
                Bravo, Vous êtes le nouvel héritier du trone de fer
                <img src={iconTrone} alt="image" width='100px'/>
                </h1></div>
            <button onClick={() => restartLevel()}>Accueil</button>
        </Fragment>
    )
    


    return (
        <div className='quizOver'>
            <div className='progress'>

                {
                    score >= 5 ? (
                        displayedProgress
                    )
                    :
                    (
                        <Fragment>
                            <div><h1 style={{color: 'red'}}>Vous aviez echoué</h1></div>
                        </Fragment>
                    )
                    
                }
            </div>

            <div className='score'>
                <div>Réussite: {score * 10}%</div>
                <div>Note: {score}/10</div>
            </div>

            <div className='answer'>
            <hr />
            {
                score >= 5 ? (
                    <h3>Les réponses aux questions posées:</h3>
                )
                :
                (
                    <h2>Pas de réponse</h2>
                )
            }
            
                <table>
                    <thead>
                        <th>Question</th>
                        <th>Réponse</th>
                        <th>Infos</th>
                    </thead>

                    <tbody>
                        
                        {
                            score >= 5 ? (
                                displayedAnswers
                            )

                            :
                            (
                                <tr style={{textAlign: "left"}}>
                                    
                                    <td colspan="3">
                                        <Loader
                                        loaderMsg={"Retour au niveau précedent dans 5s"}
                                        />
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            { showModal && (
                <Fragment>
                    <Modal 
                    hideModal={() => hideModal()}
                    quizInfos={quizInfos}
                    />
                </Fragment>
                )
            }
        </div>
    );
})

export default React.memo(QuizOver);