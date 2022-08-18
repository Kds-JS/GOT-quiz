// Librairies
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.scss';
import Loginimg from '../../Images/Targaryen.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,user } from '../Firebase/Firebase';
import {setDoc} from 'firebase/firestore';


const Signup = () => {

    const navigate = useNavigate();

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData;
        createUserWithEmailAndPassword(auth, email, password)
        .then(authUser => {
            return setDoc(user(authUser.user.uid), {
                pseudo,
                email
            })
        })
        .then(user => {
            setLoginData({...data});
            navigate('/welcome')
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
    ? <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;


    return (
        <div className="Login">
            <div className="loginImg">
                <img src={Loginimg} alt="" />
            </div>

            <div>
                <h4>Inscription</h4>

                <form onSubmit={handleSubmit}>
                            <div className="inputDiv">
                                <label htmlFor="pseudo">Pseudo</label>
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="password">Mot de passe</label>
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                            </div>

                            <div id="submitBtn">
                                {btn}
                            </div>

                </form>

                
                <div className="otherBtn">
                    <Link to="/signin">Déja Inscrit ? Connectez-vous</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;