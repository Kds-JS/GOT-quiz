// Librairies
import React from "react";
import { useNavigate } from "react-router-dom";
import './ErrorPage.scss';

// Components
import Loader from "../Loader/Loader";

const ErrorPage = () => {

    const navigate = useNavigate();

    const redirection = () => {

        setTimeout(() => {
            navigate(-1);
        }, 5000)
    }

    redirection();


    return (
        <div className="ErrorPage">
            <Loader/>
            <h3>Oups, cette page n'existe pas, Vous serez Rédirigez vers la page précedente dans 5s.......</h3>
        </div>
    )
}

export default ErrorPage;