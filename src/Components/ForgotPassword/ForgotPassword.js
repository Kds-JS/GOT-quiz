// Librairies
import React, {useState} from "react";
import '../Signup/Signup.scss';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import { Link, useNavigate } from "react-router-dom";
import Loginimg from '../../Images/lannist.png'

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setError(null);
            setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
            setEmail("");

            setTimeout(() => {
                navigate('/signin')
            }, 5000)
        })
        .catch(error => {
            setError(error);
            setEmail("");
        })

    }

    const disabled = email === "";


    return (
        <div className="Login">
            <div className="loginImg">
                <img src={Loginimg} alt="" />
            </div>

            <div>

                        {
                            success && <span
                                style={{
                                border: "1px solid green",
                                background: "green",
                                color: "#ffffff"
                            }}
                            >
                                {success}
                            </span>
                        }

                        {error && <span>{error.message}</span>}

                <h4>Mot de passe oublié</h4>

                <form onSubmit={handleSubmit}>

                            <div className="inputDiv">
                                <label htmlFor="email">Email</label>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required />
                            </div>

                            <div id="submitBtn">
                                <button disabled={disabled}>Récuperer</button>
                            </div>

                </form>

                
                <div className="otherBtn">
                    <Link to="/signup">Nouveau sur GOT-Quiz ? Inscrivez-vous</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;