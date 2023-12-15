import React from 'react'
import './members2324.css'
import Card from '../Card/card'
import data from './memberdata2324'

export default function page() {
    return (

        <>
            <h1>Governing Body Member</h1>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
