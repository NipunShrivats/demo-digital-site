import React, { useRef } from 'react'
import './ClientsStyle.css'
import { Link } from "react-router-dom"

import client1 from "../../assets/clientHandles/client1.jpg"
import client2 from "../../assets/clientHandles/client2.jpg"
import client3 from "../../assets/clientHandles/client3.jpg"
import client4 from "../../assets/clientHandles/client4.jpg"

import Card from '../../Components/Card/Card'
// function InsideSlider1(props) {
//     const { clientImage, userName, userLocation, userReview } = props
//     return (
//         <li>
//             <div className='slide-c'>
//                 <div className='user-info-c'>
//                     <img src={clientImage} alt="" />
//                     <div className='text-info'>
//                         <h3>{userName}</h3>
//                         <span>{userLocation}</span>
//                     </div>
//                 </div>
//                 <p>{userReview}</p>
//             </div>
//         </li>
//     )
// }

export default function Clients() {
    return (
        <>
            <div className='clients'>
                <div className='clientBox1'>
                    <Card
                        firstAlphabet={"A"}
                        name={"Name"}
                        username={"Username"}
                        image={""} />
                    <Card
                        firstAlphabet={"A"}
                        name={"Name"}
                        username={"Username"}
                        image={""} />
                    <Card
                        firstAlphabet={"A"}
                        name={"Name"}
                        username={"Username"}
                        image={""} />
                </div>
                <button className='btn dark-btn'><Link to={"/clients/Allclients"}>View More Clients</Link> </button>
            </div>
        </>
    )
}
