import React from 'react';
import "./HeroStyle.css";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <div className='hero container'>
                <div className='hero-text'>
                    <h1>WELCOME</h1>
                    <h3>to</h3>
                    <h1>SENSATIONZ DIGITAL</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut facere animi inventore velit commodi.</p>
                    <a href="https://wa.me/917500707240?text=Hello, I want to know more about your services" target='blank_'>
                        <button className='btn'>Chat on whatsapp
                            <span><FaWhatsapp /></span>
                        </button>
                    </a>
                </div>
            </div >
        </>
    )
}
