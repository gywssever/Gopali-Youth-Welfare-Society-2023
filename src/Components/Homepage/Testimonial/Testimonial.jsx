import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Partha from "./Image/Partha.jpg";
import Mrig from "./Image/Mrig.jpg";
// import  NR from "./Image/NR.jpg";

function ArrowTest(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function TestiMonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <ArrowTest />,
    prevArrow: <ArrowTest />,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-TestiMonial">
        <h1 className="container-TestiMonial-heading">TESTIMONIALS</h1>
        <Slider {...settings}>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Mrig} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Mr. Mrinal Kanti Bhanja</h2>
                  <h2>Founder, Gopali Youth Welfare Society</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                  Gopali Youth Welfare Society (GYWS) was established with the objectives of making people aware of problems faced by the modern society. It also aims at helping people's social, economic and cultural development and encouraging them to find out solutions to their problems on the basis of locally available resources.


                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TestiMonial-card">
              <div className="TestiMonial-card-image">
                <img src={Partha} alt="#" />
              </div>

              <div className="TestiMonial-card-content">
                <div className="TestiMonial-card-heading">
                  <h2>Prof. Partha Pratim Chakraborty</h2>
                  <h2>Former Director, IIT Kharagpur</h2>
                </div>

                <div className="TestiMonial-card-para">
                  <p>
                    Having attended some GYWS events, the determination of the
                    students to make a change amazes me. This is worth applause
                    that they have taken the initiative to work for the
                    underprivileged. | feel privileged to have such students in
                    the campus who seek to give back to the society. Hope to see
                    GYWS as well as other students come forward with more such
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>

      
        </Slider>
      </div>
    </>
  );
}

export default TestiMonial;
