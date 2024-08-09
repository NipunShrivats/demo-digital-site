import React, { useRef } from 'react'
import './ClientsStyle.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"

import client1 from "../../assets/imgAssets/client1.jpg"
import client2 from "../../assets/imgAssets/client2.jpg"
import client3 from "../../assets/imgAssets/client3.jpg"
import client4 from "../../assets/imgAssets/client4.jpg"

function InsideSlider1(props) {
    const { clientImage, userName, userLocation, userReview } = props
    return (
        <li>
            <div className='slide-c'>
                <div className='user-info-c'>
                    <img src={clientImage} alt="" />
                    <div className='text-info'>
                        <h3>{userName}</h3>
                        <span>{userLocation}</span>
                    </div>
                </div>
                <p>{userReview}</p>
            </div>
        </li>
    )
}


export default function Clients() {

    const slider = useRef();
    let tx = 0;

    const slidePrev = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideNext = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <>
            <div className='clients'>
                {/* buttons */}
                <button className='prev-btn-c' onClick={slidePrev}><FaArrowLeft /></button>
                <button className='next-btn-c' onClick={slideNext}><FaArrowRight /></button>

                <div className='slider-c'>
                    <ul ref={slider}>
                        <InsideSlider1
                            clientImage={client1}
                            userName={"Suchita Joshi"}
                            userLocation={"@p5yoga_wellness"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                        <InsideSlider1
                            clientImage={client2}
                            userName={"Durvam's Diary"}
                            userLocation={"@durvasumedha"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                        <InsideSlider1
                            clientImage={client3}
                            userName={"Glance Fire & Safety consultant"}
                            userLocation={"@glanceenterprice"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                        <InsideSlider1
                            clientImage={client4}
                            userName={"Sam Bahadur"}
                            userLocation={"Patiyala, Punjab"}
                            userReview={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores ipsa, reprehenderit error dolores, minima ad quasi consectetur fugiat, minus ratione aliquam placeat repellendus. Cumque provident asperiores autem tempore suscipit?"}
                        />
                    </ul>
                </div>

                <button className='btn dark-btn view-more'><Link to="/Allclients">View More clients</Link></button>
            </div>
        </>
    )
}
