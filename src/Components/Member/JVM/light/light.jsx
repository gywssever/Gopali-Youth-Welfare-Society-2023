import React from 'react'
import '../../Member2023-24/members2324.css'
import Card from '../../Card/card'
import data from './light'
import ceo from './ceo'
export default function page() {
    return (

        <>
            <h1>LiGHT CEO</h1>
            <div className="members_container">
                {ceo.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
            <br /><br />
            <h1>LiGHT Heads</h1>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
