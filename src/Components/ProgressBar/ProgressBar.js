// Librairies
import React, { useState } from 'react';
import './ProgressBar.scss'

function ProgressBar({idQuestion}) {

    

    return (
        <div className='progressbar'>
            <div className='progress'>
                <div>Question: {idQuestion + 1}/10</div>
                <div>Progression: {(idQuestion + 1) * 10}%</div>
            </div>

            <div className="bar">
                <div className='bar-change' style={{width: `${(idQuestion + 1) * 10}%`}}>
                    {`${(idQuestion + 1) * 10}%`}
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProgressBar);