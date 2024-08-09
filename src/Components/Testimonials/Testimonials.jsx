import React, { useRef } from 'react'
import { Link } from "react-router-dom"

import './TestimonialsStyle.css'
import PlayIcon from "../../assets/imgAssets/play-icon-red.png"
import clientImage1 from "../../assets/imgAssets/client-review1.png"
import clientImage2 from "../../assets/imgAssets/client-review2.png"
// import clientImage3 from "../../assets/imgAssets/client-review1.png"
import review1 from "../../assets/imgAssets/reviewSS1.jpg"
import review2 from "../../assets/imgAssets/reviewSS2.jpg"



export default function Testimonials() {
    return (
        <>
            <div className='testimonials'>
                <div className="section1">
                    <div className='ele'>
                        <img src={clientImage1} alt="" className='img' />
                        <img src={PlayIcon} alt="" className='playIcon' />
                    </div>
                    <div className='ele'>
                        <img src={clientImage2} alt="" className='img' />
                        {/* <Link to="" className='playIconLink'> */}
                        <img src={PlayIcon} alt="" className='playIcon' />
                        {/* </Link> */}
                    </div>
                    <div className='ele'>
                        <img src={clientImage1} alt="" className='img' />
                        <img src={PlayIcon} alt="" className='playIcon' />
                    </div>
                </div>
                {/* <div className="section2">
                    <div className='ele'>
                        <img src={review1} alt="" className='img' />
                    </div>
                    <div className='ele'>
                        <img src={review2} alt="" className='img' />
                    </div>
                </div> */}
            </div>
        </>
    )
}
