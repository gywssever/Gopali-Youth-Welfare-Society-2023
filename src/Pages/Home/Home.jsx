import MissionVision from "../../Components/Homepage/mission_vision/MissionVision";
import Intiative from "../../Components/Homepage/intiatives/Intiative";
import Slider from "../../Components/Homepage/slider/Slider";
import GuestPage from "../../Components/Homepage/GuestPage/Guest";
import Impact from "../../Components/Homepage/impact/Impact";
import ContactUs from "../../Components/Homepage/ContactUs/ContactUs";
import Carousel from "../../Components/Homepage/sponsor/Sponsor-slider"
import TestiMonial from "../../Components/Homepage/Testimonial/Testimonial";
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
        <TestiMonial />
        <GuestPage/>
        <br />
        <Carousel />
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
