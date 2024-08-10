import React from 'react'
import "./AllClientsStyle.css"

import Nav from '../../Pages/LogoNav/LogoNav'
import Card from '../../Components/Card/Card'

import client1 from "../../assets/clientHandles/client1.jpg"
import client2 from "../../assets/clientHandles/client2.jpg"
import client3 from "../../assets/clientHandles/client3.jpg"
import client4 from "../../assets/clientHandles/client4.jpg"


export default function Allclients() {
    return (
        <>
            <Nav />
            <div className='container AllClients'>
                <h1 className='heading'>View More Clients</h1>

                <div className='clientBox'>
                    <Card
                        firstAlphabet={"S"}
                        name={"Shveta Sharma"}
                        username={"@ahaana_holistichealing"}
                        image={client1}
                        to={"https://www.instagram.com/ahaana_holistichealing/"}
                    />
                    <Card
                        firstAlphabet={"N"}
                        name={"Naira Sri"}
                        username={"@cutiekuhoo"}
                        image={client2}
                        to={"https://www.instagram.com/cutiekuhoo/"}
                    />
                    <Card
                        firstAlphabet={"V"}
                        name={"Virender Sharma"}
                        username={"@virendersharmababa_ji"}
                        image={client3}
                        to={"https://www.instagram.com/virendersharmababa_ji/?hl=en"}
                    />
                </div>
            </div>
        </>
    )
}
