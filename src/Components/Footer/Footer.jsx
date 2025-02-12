import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
        <div>
            <hr />
        </div>
            <div className="footer">
                <div className='footer_main'>
                    <div className="copyright">
                        <p className='main_copyright'>&copy; 2025 Manish Nalla. All rights reserved</p>
                    </div>
                    <div>
                        <ul className="social">
                            <li className='sociallink social1'><a href="https://www.linkedin.com/in/manish-nalla/"><FaLinkedin /></a></li>
                            <li className='sociallink social2'><a href="https://github.com/manish-nalla"><FaGithub /></a></li>
                            <li className='sociallink social3'><a href="mailto:nallamanish19@gmail.com"><MdEmail /></a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="terms">
                            <li className="terms_privacy">Privacy</li>
                            <li className="terms_privacy">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer