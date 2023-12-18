import React from 'react'
import Coordie from './coordies/coordies.jsx'
import Src from './src/src.jsx'
import Finance from './finance/finance.jsx'
import Spons from './spons/spons.jsx'
import Tech from './techops/techops.jsx'
function jvm() {
    return (
        <>
            <h1 style={{ textAlign: 'center'}}>  JAGRITI VIDYA MANDIR</h1><br />
            <hr />
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