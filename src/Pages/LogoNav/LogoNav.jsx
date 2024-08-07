import React from 'react'
import logo from "../../assets/imgAssets/ssLogo.png"
import "./LogoNavStyle.css"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <div className='nav'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
        </>
    )
}
