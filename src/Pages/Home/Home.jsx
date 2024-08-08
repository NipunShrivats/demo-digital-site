import React, { useState, useEffect } from 'react'
import "./HomeStyle.css"

import Navbar from '../../Components/Navbar/Navbar'
import Title from '../../Components/Title/Title'
import Contact from '../../Components/Contact/Contact'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import About from '../../Components/About/About'
import Campus from '../../Components/Campus/Campus'
import Testimonials from '../../Components/Testimonials/Testimonials'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
// import Loader from '../../Components/Loader/Loader'
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";


export default function Home() {

    const [playState, setPlayState] = useState(false);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])


    return (
        <>
            {
                loading ?
                    <div className='loader-cover'>
                        <BounceLoader
                            color={"#ff0000"}
                            loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className='loader'
                        />
                    </div>
                    :
                    <>
                        {/* <Loader /> */}
                        <Navbar />
                        <Hero />


                        <div className='container'>
                            <Title title={"our services"} subtitle={"what we offer"} />
                            <Services />
                        </div>

                        <div className='container'>
                            <Title title={"about Us"} subtitle={"know more about us"} />
                            <About setPlayState={setPlayState} />
                        </div>

                        <div className='container'>
                            <Title title={"clients"} subtitle={"Whom we have worked for?"} />
                            <Campus />
                        </div>

                        <div className='container'>
                            <Title title={"testimonials"} subtitle={"what client says?"} />
                            <Testimonials />
                        </div>

                        <div className='container'>
                            <Title title={"contact us"} subtitle={"get in touch"} />
                            <Contact />
                        </div>
                        <VideoPlayer playState={playState} setPlayState={setPlayState} />
                    </>
            }
        </>

    )
}
