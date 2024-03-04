import "./Sponsor-slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HCard from "../../HeaderCard/HCard";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", position: 'absolute', left: '+30px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    // speed: 6000,
    // autoplaySpeed: 5000,
    // cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sponsorsData = [
    {
      name: "FeedIndia",
      logoUrl: "assets/images/home/sponsImages/feedindia.avif",
      websiteLink: "https://www.feedingindia.org/",
    },
    {
      name: "CEL",
      logoUrl: "assets/images/home/sponsImages/CEL.png",
      websiteLink: "#",
    },
    {
      name: "Gangesjute",
      logoUrl: "assets/images/home/sponsImages/Gangesjute.jpg",
      websiteLink: "https://https://www.gangesintl.com/",
    },
    {
      name: "IFEC",
      logoUrl: "assets/images/home/sponsImages/IFEC.JPG",
      websiteLink: "#",
    },
    {
      name: "Ketex",
      logoUrl: "assets/images/home/sponsImages/ketex.png",
      websiteLink: "https://ketex.com/",
    },
    {
      name: "Lepton",
      logoUrl: "assets/images/home/sponsImages/lepton.jpg",
      websiteLink: "#",
    },
    {
      name: "Telcon",
      logoUrl: "assets/images/home/sponsImages/Telcon.jpg",
      websiteLink: "#",
    },
  ];
  const affiliationsData = [
    {
      name: "Amazon",
      logoUrl: "assets/images/home/sponsImages/Amazon.png",
      websiteLink: "https://amazon.care/",
    },
    {
      name: "Mathwork",
      logoUrl: "assets/images/home/sponsImages/mathwork.jpeg",
      websiteLink: "https://in.mathworks.com/",
    },
    {
      name: "IIC",
      logoUrl: "assets/images/home/sponsImages/IIC.jpg",
      websiteLink: "#",
    },
    {
      name: "TISS",
      logoUrl: "assets/images/home/sponsImages/TISS.png",
      websiteLink: "#",
    },
    {
      name: "NCC",
      logoUrl: "assets/images/home/sponsImages/NCC.png",
      websiteLink: "#",
    },
    {
      name: "NYKS",
      logoUrl: "assets/images/home/sponsImages/NYKS.jpg",
      websiteLink: "#",
    },
    {
      name: "Tiara",
      logoUrl: "assets/images/home/sponsImages/tiara.png",
      websiteLink: "#",
    },
  ];
  const SponsorItem = ({ name, logoUrl, websiteLink }) => {
    return (
      <a href={websiteLink} target="_blank" rel="noreferrer" className="slider-card">
        <img src={logoUrl} alt="" className="" />
        <div className="slider-card-heading">
          <h3>{name}</h3>
        </div>
      </a>
    );
  };

  return (
    <>
      <div className="container-slider">
      <HCard head={"SPONSORS"}></HCard><br />
  
        <div className="sliderContainer">
          <Slider {...settings}>
            {sponsorsData.map((sponsor) => (
              <SponsorItem
                name={sponsor.name}
                logoUrl={sponsor.logoUrl}
                websiteLink={sponsor.websiteLink}
              />
            ))}
          </Slider>
        </div>
      </div>
      
      <div className="container-slider">
       <HCard head={"AFFILIATIONS"}></HCard><br />
        <div className="sliderContainer">
          <Slider {...settings}>
            {affiliationsData.map((sponsor) => (
              <SponsorItem
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

export default Carousel;