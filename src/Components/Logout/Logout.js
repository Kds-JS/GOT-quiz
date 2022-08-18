// Firebase 9
import React, { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import './Logout.scss';

const Logout = () => {

    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            //console.log("Déconnexion");
            signOut(auth).then(() => {
                console.log("Vous êtes déconnecté");
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }).catch((error) => {
                console.log("Oups, nous avons une erreur!")
            });
        }

    }, [checked]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className="logout">
            <input data-tip="hello world" 
            onChange={handleChange}
            checked={checked} type="checkbox" 
            id="switch" />
            <label for="switch"></label>
        </div>
    )
}

export default Logout;
