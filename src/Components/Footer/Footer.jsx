import React from 'react';
import './FooterStyle.css';

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='foot1'>

                    {/* <h4>Serch Services</h4> */}
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/servies/seo"><li>S.E.O</li></a>
                        <a href="/services/webdesigning"><li>Web Designing</li></a>
                        <a href="/services/graphicdesigning"><li>Graphic Designing</li></a>
                        <a href="/services/videoediting"><li>Video Editing</li></a>
                        <a href="/services/socialmediamanagement"><li>Social Media Management</li></a>
                        <a href="/services/brandpromotion"><li>Brand Promotion</li></a>
                        <a href="/PrivacyPolicy"><li className='privacy'>Privacy Policy</li></a>
                    </ul>
                </div>
                {/* <hr /> */}
                <div className="foot2">
                    <p>© 2024 Sensationz Media & Arts pvt. ltd. | All rights reserved </p>
                </div>
            </div>

        </>
    )
}
