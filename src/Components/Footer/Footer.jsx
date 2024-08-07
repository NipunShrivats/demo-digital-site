import React from 'react';
import './FooterStyle.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='foot1'>

                    {/* <h4>Serch Services</h4> */}
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/servies/seo"><li>S.E.O</li></Link>
                        <Link to="/services/webdesigning"><li>Web Designing</li></Link>
                        <Link to="/services/graphicdesigning"><li>Graphic Designing</li></Link>
                        <Link to="/services/videoediting"><li>Video Editing</li></Link>
                        <Link to="/services/socialmediamanagement"><li>Social Media Management</li></Link>
                        <Link to="/services/brandpromotion"><li>Brand Promotion</li></Link>
                        <Link to="/PrivacyPolicy"><li className='privacy'>Privacy Policy</li></Link>
                        {/* <Link ></Link> */}
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
