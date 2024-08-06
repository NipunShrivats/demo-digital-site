import React from 'react';
import './FooterStyle.css';

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <p>© 2024 Sensationz Media & Arts pvt. ltd. | All rights reserved </p>

                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/PrivacyPolicy/:id"><li>Privacy Policy</li></a>
                </ul>
            </div>

        </>
    )
}
