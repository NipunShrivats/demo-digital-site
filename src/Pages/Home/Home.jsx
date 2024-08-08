import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Title from '../../Components/Title/Title'
import Contact from '../../Components/Contact/Contact'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import About from '../../Components/About/About'
import Campus from '../../Components/Campus/Campus'
import Testimonials from '../../Components/Testimonials/Testimonials'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

export default function Home() {

    const [playState, setPlayState] = useState(false);

    return (
        <>
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
    )
}
