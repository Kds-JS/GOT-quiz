// Librairies
import React from "react";
import './Home.scss';
import homeBackground from '../../Images/showcase-img.jpg'
import { Link } from "react-router-dom";


const Home = () => {


    return (
        <div className="home" style={{backgroundImage: `url(${homeBackground})`}}>
            
            <Link to="signup">Inscription</Link>
            {/* <img src={homeBackground} alt="" /> */}
            <Link to="signin">Connexion</Link>
        </div>
    )
}

export default Home;