import React from 'react'
import './members2223.css'
import Card from '../Card/card'
import data from './memberdata2223'

export default function page() {
    return (

        <>
            <div className="members_container">
                {data.map((data,index)=>(
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
