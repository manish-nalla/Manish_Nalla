import React from 'react';
import './Contact.css';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaArrowTurnDown } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "31fbbdc0-4c03-4289-86e4-c170b2eb9aa8");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            event.target.reset();
            Swal.fire({
                title: "Success!",
                text: "Message sent succesfully",
                icon: "success"
            });
        }
    };

    return (
        <div className='contact_container' id='Contact'>
            <h1 className='heading'>Contact</h1>
            <div className="main_contact">
                <p className="CTA">
                    "Ready to start your next project? Get in touch!"
                </p>
                <div className="hire_form">
                    <div className="lets_talk my_contact">
                        <h2 className="hire_me">Let's Talk<sub><FaArrowTurnDown className='arrow_icon' /></sub></h2>
                        <div className="details">
                            <div className='hire_details'>
                                <HiOutlineMailOpen className='hire_icon' /><a href="mailto:nallamanish19@gmail.com" className="email">nallamanish19@gmail.com</a>
                            </div>

                            <div className='hire_details'>
                                <MdOutlinePhoneInTalk className='hire_icon' /><span className="number email">+1 774 578 9570</span>
                            </div>

                            <div className='hire_details'>
                                <GrMapLocation className='hire_icon' /><span className="location email">Boston, MA, United States</span>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="contact_form my_contact">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name='from_name' id='fullName' placeholder='Enter your Full Name' required className='box box1' />

                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' placeholder='Enter your Email Address' required className='box box2' />

                        <label htmlFor="message">Message</label>
                        <textarea type="text" name='message' id='message' placeholder='Enter your Message' required className='box box3' />
                        <div className="hire_btn">
                            <button className="submit_btn" type='submit'>Send</button>
                        </div>
                    </form>
                </div>
                <p className="CTA">
                    "Open to full-time opportunities starting May, 2025."
                </p>
            </div>
        </div>
    );
}
export default Contact;