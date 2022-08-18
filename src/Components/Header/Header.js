// Librairies
import React from "react";
import './Header.scss';
import logo from '../../Images/got-header.svg'

const Header = () => {


    return (
        <div className="header">
            <img src={logo} alt="" />
        </div>
    )
}

export default Header;