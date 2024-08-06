import React from 'react'
import logo from "../../assets/imgAssets/ssLogo.png"
export default function Nav() {
    return (
        <>
            <div className='nav'>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
        </>
    )
}
