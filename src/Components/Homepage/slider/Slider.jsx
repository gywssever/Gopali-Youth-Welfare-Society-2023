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
          showIndicators={true}
          timeInterval={1000}
          autoPlay={true}
          interval={2000}
          centerMode={true}
          centerSlidePercentage={96}
          infiniteLoop={true}
          stopOnHover={true}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
          <div>
            <img src={header_bg_1} alt='JVM Students' className='carousel_image' />
            <p className="legend">Students at Jagriti Vidya Mandir(JVM)</p>
          </div>
          <div>
            <img src={JVM} alt='We with the students' className='carousel_image' />
            <p className="legend">We with the students</p>
          </div>
        </Carousel>

      </div>

    </>
  )
}

export default Slider