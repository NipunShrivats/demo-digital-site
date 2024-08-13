import React from 'react';
import './ContactStyle.css';
import msg_icon from '../../assets/imgAssets/msg-icon.png';

import { MdEmail } from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "407fa323-9988-4126-bb87-10e86b5f6ed8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div className='contact'>
                <div className="contact-col">
                    <h3>Send a message <img src={msg_icon} alt="" /></h3>
                    <p>Feel fre to reach out through contact form or find our conact information below. your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our members.</p>
                    <ul>
                        <li><span><MdEmail /></span>digitalsensationz@gmail.com</li>
                        <li><span><FaHeadphonesSimple /></span>+91 8800-348-485 [Ruchi Pahwa] <br />(Business Development Manager)</li>
                        <li><span><FaLocationDot /></span>B-305, 3rd Floor & A-201, 2nd Floor,<br /> North Ex Mall, Pocket 18,<br /> Sector-9, Rohini, New Delhi-110085</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">YourName</label>
                        <input type="text" name="name" placeholder='Enter your name...' required />

                        <label htmlFor="">Phone number</label>
                        <input type="text" name="phone" placeholder='Enter your mobile number...' required />

                        <label htmlFor="">Write your messege here</label>
                        <textarea name="messege" rows='6' placeholder='Enter your messege...' required></textarea>
                        <div>
                            <button type='submit' className='btn dark-btn'>Submit now</button>
                        </div>
                    </form>

                    <span>{result}</span>
                </div>
            </div>
        </>
    )
}
