import React from 'react'
import Coordie from './coordies/coordies.jsx'
import Src from './src/src.jsx'
import Finance from './finance/finance.jsx'
import Spons from './spons/spons.jsx'
import Tech from './techops/techops.jsx'
import HCard from '../../HeaderCard/HCard.jsx'

function jvm() {
    return (
        <>
            <HCard head={"JAGRITI VIDYA MANDIR"}></HCard>
          <br /><br /><hr /><br />
            <Coordie />
            <br />
            <Src/><br />
            <Finance/><br />
            <Spons/><br />
            <Tech/> <br />
        </>
    )
}

export default jvm