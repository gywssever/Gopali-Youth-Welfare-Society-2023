import './Newsletter.css'
import Card from './Card'
import data from './newsletterData'

export default function Newsletter() {
    
    return (
        <>
            <div className="newsletter_container">
                <div className="newsletter_heading">
                    <h1>Recent Newsletters</h1>
                </div>
                <div className="newsletter_card_container">
                    {data.map((data, index) => (
                        <Card key={index} title={data.title} description={data.description} link={data.link} imageUrl={data.imageUrl} />
                    ))}

                </div>
            </div>
        </>
    )
}