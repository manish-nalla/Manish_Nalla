import React, { useState } from "react";
import './Navbar.css';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className="mainnavbar">
            <span className="headingLogo">Manish</span>
            <ul className="links">
                <li className="linkitem hideonmobile"><a href="#home" className="active">Home</a></li>
                <li className="linkitem hideonmobile"><a href="#About">About</a></li>
                <li className="linkitem hideonmobile"><a href="#Experience">Experience</a></li>
                <li className="linkitem hideonmobile"><a href="#Skills">Skills</a></li>
                <li className="linkitem hideonmobile"><a href="#projects">Projects</a></li>
                <li className="linkitem hideonmobile"><a href="#Contact">Contact</a></li>
                <li className="menubar" onClick={handleOpenMenu}><a href="#f"><IoMenu size={60} /></a></li>
            </ul>
            {isMenuOpen && (
                <ul className="sidebar">
                    <li className="side-link closebar" onClick={handleCloseMenu}><a href="#f"><IoClose size={40} /></a></li>
                    <li className="side-link"><a href="#home" className="active">Home</a></li>
                    <li className="side-link"><a href="#About">About</a></li>
                    <li className="side-link"><a href="#Experience">Experience</a></li>
                    <li className="side-link"><a href="#Skills">Skills</a></li>
                    <li className="side-link"><a href="#projects">Projects</a></li>
                    <li className="side-link"><a href="#Contact">Contact</a></li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;