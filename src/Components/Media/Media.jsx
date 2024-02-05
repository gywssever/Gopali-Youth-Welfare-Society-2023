import Reports from './Reports/ReportContainer.jsx'
import Newsletter from './Newletter/Newsletter.jsx'
import './Media.css'
import { useEffect } from 'react'

export default function Media() {


    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Media | GYWS"

    }, [])

    return (
        <>
            <div className="media_container">
                <Reports />
                <Newsletter />
            </div>
        </>
    )
}