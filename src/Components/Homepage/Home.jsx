import MissionVision from "./mission_vision/MissionVision";
import Intiative from "./intiatives/Intiative";
import Slider from "./slider/Slider";
import GuestPage from "./GuestPage/Guest";
import Impact from "./impact/Impact";
import ContactUs from "./ContactUs/ContactUs";
import Carousel from "./sponsor/Sponsor-slider"
import TestiMonial from "./Testimonial/Testimonial";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home | GYWS";

  }, [])

  return (
    <>
      <div className="home-page-container">
        <Slider />
        <MissionVision />
        <Intiative />
        <Impact />
        
        <TestiMonial/>
        <GuestPage />
        <br />
        <Carousel />/

        <ContactUs />
      </div>
    </>
  );
}

export default Home;
