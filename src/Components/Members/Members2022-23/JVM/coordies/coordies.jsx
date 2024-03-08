import React from 'react'
import '../../../Member2023-24/GB/GB.css'
import Card from '../../Card/card'
import data from './coordies'
import HCard from '../../../../HeaderCard/HCard'
export default function page() {
    return (

        <>
            <HCard head={"Coordinators 2022-23"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
