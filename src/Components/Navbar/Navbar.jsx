import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="mainnavbar">
            <span className="headingLogo">Manish Nalla</span>
            <ul className="links">
                <li className="linkitem"><a href="#home" className="active">Home</a></li>
                <li className="linkitem"><a href="#About">About</a></li>
                <li className="linkitem"><a href="#Skills">Skills</a></li>
                <li className="linkitem"><a href="#projects">Projects</a></li>
                <li className="linkitem"><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;