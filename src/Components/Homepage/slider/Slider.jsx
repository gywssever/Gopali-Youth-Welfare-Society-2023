import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import header_bg_1 from './images/header-bg-1.jpg';
import JVM from './images/JVM2.jpg';

function Slider() {
  return (
    <>
      <div>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          interval={1000}
          infiniteLoop={true}
        >
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">JVM students</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>

          </div>
        </Carousel>

        {/* <div className='carousel_heading'>
          IITian's empowering youth for BETTER TOMORROW
        </div> */}
        {/* <div className="carousel_donate">
            <button className="btn">Yes, I want to Donate</button>
        </div> */}
      </div>

    </>
  )
}

export default Slider