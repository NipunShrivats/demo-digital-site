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
            </div>
        </>
    )
}
