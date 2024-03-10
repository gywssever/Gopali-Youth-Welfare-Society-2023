
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card (props) {
    return (
        <>
            <div className="newsletter_card">
                <div className="newsletter_card_image">
                    <LazyLoadImage src={props.imageUrl} alt="newsletter" />
                </div>
                <div className="newsletter_card_content">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div>
        </>
    )
}