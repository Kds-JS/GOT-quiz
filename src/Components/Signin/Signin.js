// Librairies
import React, {useState, useEffect} from "react";
import '../Signup/Signup.scss';
import { Link, useNavigate } from "react-router-dom";
import Loginimg from '../../Images/Stark.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/Firebase';

const Signin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            navigate('/welcome', { replace: true});
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })

    }


    return (
        <div className="Login">
            <div className="loginImg">
                <img src={Loginimg} alt="" />
            </div>

            <div>

            {error !== '' && <span style={{color: 'white'}}>{error.message}</span>}

                <h4>Connexion</h4>

                <form onSubmit={handleSubmit}>

                            <div className="inputDiv">
                                <label htmlFor="email">Email</label>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required />
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="password">Mot de passe</label>
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" autoComplete="off" required />
                            </div>

                            <div id="submitBtn">
                                <button disabled={btn ? false : true }>Connexion</button>
                            </div>

                </form>

                
                <div className="otherBtn">
                    <Link to="/signup">Nouveau sur GOT-Quiz ? Inscrivez-vous</Link>
                    <Link to="/forgotpassword">Mot de passe Oublié ? Récupérer</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;