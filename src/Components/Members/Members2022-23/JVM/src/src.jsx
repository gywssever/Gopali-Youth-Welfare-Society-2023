import React from 'react'
import '../../../Member2023-24/GB/GB.css'
import Card from '../../Card/card'
import data from './src'
import HCard from '../../../HeaderCard/HCard.jsx'
export default function page() {
    return (

        <>
            <h1>School Review Committee Heads</h1>
            <HCard head={"School Review Committee Heads"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
