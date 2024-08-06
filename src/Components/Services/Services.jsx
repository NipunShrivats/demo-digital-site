import React from 'react';
import './ServicesStyle.css';
// import program1 from '../../assets/imgAssets/program-1.png'
// import program2 from '../../assets/imgAssets/program-2.png'
// import program3 from '../../assets/imgAssets/program-3.png'

import programIcon1 from '../../assets/imgAssets/program-icon-1.png'
import programIcon2 from '../../assets/imgAssets/program-icon-2.png'
import programIcon3 from '../../assets/imgAssets/program-icon-3.png'

import seo from '../../assets/services-img/seo.jpg'
import webDesign from '../../assets/services-img/web-design.jpg'
import graphicDesign from '../../assets/services-img/graphic-design.jpg'
import videoEditing from '../../assets/services-img/video-editing.jpg'
import socialMedia from '../../assets/services-img/social-media-management.jpg'
import brandPromo from '../../assets/services-img/brand-promo.jpg'


export default function Services() {
    return (
        <>
            <div className='services'>
                <div className='service'>
                    <img src={seo} alt="" />
                    <div className='caption'>
                        <img src={programIcon1} alt="" />
                        <p>S.E.O</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={webDesign} alt="" />
                    <div className='caption'>
                        <img src={programIcon2} alt="" />
                        <p>Web Designing</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={graphicDesign} alt="" />
                    <div className='caption'>
                        <img src={programIcon3} alt="" />
                        <p>Graphic Designing</p>
                    </div>
                </div>
            </div>

            <div className='services'>
                <div className='service'>
                    <img src={videoEditing} alt="" />
                    <div className='caption'>
                        <img src={programIcon1} alt="" />
                        <p>Video Editing</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={socialMedia} alt="" />
                    <div className='caption'>
                        <img src={programIcon2} alt="" />
                        <p>Social Media Management</p>
                    </div>
                </div>
                <div className='service'>
                    <img src={brandPromo} alt="" />
                    <div className='caption'>
                        <img src={programIcon3} alt="" />
                        <p>Brand Promotion</p>
                    </div>
                </div>
            </div>
        </>
    )
}
