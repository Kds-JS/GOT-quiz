// Librairies
import React, {useState, useEffect} from "react";
import './Loader.scss';


// Components


const Loader = ({loaderMsg}) => {
    

    return (
        <div className="loading">
            <div className="loader"></div>
            <p>{loaderMsg}</p>
        </div>
            
    )
}

export default Loader;