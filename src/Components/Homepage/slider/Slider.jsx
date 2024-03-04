import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import header_bg_1 from './images/header-bg-1.jpg';
import JVM from './images/JVM2.jpg';
import './Slider.css';

const carouselData = [
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },
  {
    img: header_bg_1,
    alt: 'Students at Jagriti Vidya Mandir(JVM)',
    legend: 'Students at Jagriti Vidya Mandir(JVM)',
  },
  {
    img: JVM,
    alt: 'We with the students',
    legend: 'We with the students',
  },

]

function Slider() {


  return (
    <>
      <div>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          timeInterval={1000}
          autoPlay={true}
          interval={2000}
          // centerMode={true}
          // centerSlidePercentage={96}
          infiniteLoop={true}
          stopOnHover={true}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          {
            carouselData.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.img} alt={item.alt} className='carousel_image' />
                  <p className="legend hide_slider">{item.legend}</p>
                </div>
              )
            })
          }
        </Carousel>

      </div>

    </>
  )
}

export default Slider