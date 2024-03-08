import "./SponsorSlider.css";
import SponsorItem from "./SponsorItem";
import HCard from "../../../utils/HeaderCard/HCard";
import { sponsorsData, affiliationsData } from "./data/sponsorData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true, infinite: true, slidesToShow: 5, slidesToScroll: 1, initialSlide: 0, arrow: true, autoplay: true, speed: 500, autoplaySpeed: 2000, pauseOnHover: true,

  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4, } },
    { breakpoint: 768, settings: { slidesToShow: 3, }, },
    { breakpoint: 500, settings: { slidesToShow: 1, }, },
  ],
};

function SponsorsSlider() {

  return (
    <>
      <div className="container-slider">
        <HCard head={"SPONSORS"}></HCard>
        <div className="sliderContainer">
          <Slider {...settings}>
            {sponsorsData.map((sponsor, index) => (
              <SponsorItem
                key={index}
                name={sponsor.name}
                logoUrl={sponsor.logoUrl}
                websiteLink={sponsor.websiteLink}
              />
            ))}
          </Slider>
        </div>
      </div>


      <div className="container-slider">
        <HCard head={"AFFILIATIONS"}></HCard>
        <div className="sliderContainer">
          <Slider {...settings}>
            {affiliationsData.map((sponsor, index) => (
              <SponsorItem
                key={index}
                name={sponsor.name}
                logoUrl={sponsor.logoUrl}
                websiteLink={sponsor.websiteLink}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SponsorsSlider;