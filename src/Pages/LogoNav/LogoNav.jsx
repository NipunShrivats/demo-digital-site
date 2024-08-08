import React from 'react'
import logob from "../../assets/imgAssets/Logob.png"
import logow from "../../assets/imgAssets/Logow.png"
import "./LogoNavStyle.css"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <div className='nav'>
                <Link to="/"><img src={logow} alt="" /></Link>
                <div className='top-links'>
                    <ul className='top-links-ul'>
                        <Link to={"/"}><li>Home</li ></Link><span>|</span>
                        <Link to={""}><li>S.E.O</li></Link><span>|</span>
                        <Link to={""}><li>Web Designing</li></Link><span>|</span>
                        <Link to={""}><li>Graphic Designing</li></Link><span>|</span>
                        <Link to={""}><li>Video Editing</li></Link><span>|</span>
                        <Link to={""}><li>Social Media Management</li></Link><span>|</span>
                        <Link to={""}><li>Brand Promotion</li></Link>
                    </ul>
                </div>
            </div >
        </>
    )
}
