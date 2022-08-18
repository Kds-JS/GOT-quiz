import React, {useState, useEffect} from 'react';
import './Levels.scss';
import Stepper from 'react-stepper-horizontal/lib/Stepper';

function Levels({quizLevel, levelNames}) {

    const [levels,setLevels] = useState([]);

    useEffect(()=> {
        const quizStep =  levelNames.map(level => ({title: level.toUpperCase()}));
        setLevels(quizStep);
    }, [levelNames])

    return (
            <div className='level'>
                <Stepper
                steps={ levels} 
                activeStep={ quizLevel }
                circleTop={0}
                activeTitleColor={'#d31017'}
                activeColor={'#d31017'}
                completeTitleColor={'#E0E0E0'}
                defaultTitleColor={'#E0E0E0'}
                completeColor={'#E0E0E0'}
                completeBarColor={'#E0E0E0'}
                barStyle={'dashed'}
                size={45}
                circleFontSize={20} 
                />
            </div>
    );
}

export default Levels;