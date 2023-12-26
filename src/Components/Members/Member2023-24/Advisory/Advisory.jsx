import React from 'react'
import Card from '../Card/card.jsx'
import data from './Advisory'
import '../GB/GB.css'
function Advisory() {
    return (
        <> <h1>Advisory Committee</h1>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div></>
    )
}

export default Advisory