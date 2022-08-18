// Librairies
import React from 'react';
import './Modal.scss';



function Modal({hideModal, quizInfos}) {

    return (
        <div className='modal'>
            <div className='modalContainer'>
                <div className='modalHeader'>{quizInfos.answer}</div>
                <div className='modalBody'>
                    <div className='modalImg'>
                        <img src={quizInfos.image} alt="image" />
                    </div>

                    <div className='modalDescription'>
                        <h2>Description</h2>
                        <p>{quizInfos.description}</p>

                        <button>Voir plus</button>
                        
                    </div>
                </div>
                <div className='modalFooter'>
                    <button onClick={hideModal}>Fermer</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;