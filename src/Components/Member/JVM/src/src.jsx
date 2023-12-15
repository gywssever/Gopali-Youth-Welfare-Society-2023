import React from 'react'
import '../../Member2023-24/members2324.css'
import Card from '../../Card/card'
import data from './src'

export default function page() {
    return (

        <>
            <h1>School Review Committee Heads</h1>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
