import React from 'react'
import "./AllClientsStyle.css"

import Nav from '../../Pages/LogoNav/LogoNav'
import Card from '../../Components/Card/Card'

export default function Allclients() {
    return (
        <>
            <Nav />
            <div className='container AllClients'>
                <h1 className='heading'>View More Clients</h1>

                <div className='clientBox'>
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
            </div>
        </>
    )
}
