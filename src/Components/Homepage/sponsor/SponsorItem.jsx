
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SponsorItem({ name, logoUrl, websiteLink }) {
  return (
    <a href={websiteLink} target="_blank" rel="noreferrer" className="slider-card">
      <div className="slider-card-image">
        <LazyLoadImage src={logoUrl} alt="sponsorImage" />
      </div>
      <div className="slider-card-heading">
        <h3>{name}</h3>
      </div>
    </a>
  );
}