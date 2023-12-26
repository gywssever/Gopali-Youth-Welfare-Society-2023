import React from 'react'
import '../../../Member2023-24/GB/GB.css'
import Card from '../../Card/card'
import data from './rise'
import ceo from './ceo'
export default function page() {
    return (

        <>
            <h1>RISE </h1>
            <div className="members_container">
                {ceo.map((ceo, index) => (
                    <Card key={index} name={ceo.name} position={ceo.position} imageUrl={ceo.imageUrl} facebookLink={data.facebookLink}
                        email={ceo.email} linkedinLink={ceo.linkedinLink} />
                ))}
            </div> <br /><br />
            <h1>RISE Heads</h1>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
