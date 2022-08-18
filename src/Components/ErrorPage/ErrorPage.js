// Librairies
import React from "react";
import { useNavigate } from "react-router-dom";
import './ErrorPage.scss';


const ErrorPage = () => {

    const navigate = useNavigate();

    const redirection = () => {

        setTimeout(() => {
            navigate('/')
        }, 5000)
    }

    redirection();


    return (
        <div className="ErrorPage">
            <h3>Oups, cette page n'existe pas, Vous serez Rédirigez vers la page d'accueil dans 5s.......</h3>
        </div>
    )
}

export default ErrorPage;