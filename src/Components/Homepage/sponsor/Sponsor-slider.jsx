
import "./Sponsor-slider.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import SponImg from "./images/feedindia.avif"
import feedindia from "./images/feedidia.avif"

function Arrow(props){
    const {className , style , onClick} = props;
    return (
        <div className={className} style={{...style , display:"block" , background:"black"}}
        onClick={onClick}/>

       
    )
}
function Carousel(){
 
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow:<Arrow/>,
        prevArrow:<Arrow/>,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow:2
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow:2
            },
          }
        ]
     
    }
    return (
        <>
    <div className = "container-slider">
        <h1 className="container-slider-heading">SPONSORS</h1>
        <Slider {...settings}>
            <div  className ="slider-card">
            <img src={feedindia} alt=""  className=""/>
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
           
            </div>
            <div className ="slider-card" >
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
           
            </div >
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
           
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
          
            </div>
            </Slider>
    </div>


    <div className = "container-slider">
        <h1 className="container-slider-heading">AFFILIATIONS</h1>
        <Slider {...settings}>
            <div  className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
           
            </div>
            <div className ="slider-card" >
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
           
            </div >
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
           
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={feedindia} alt="" />
            <div className="slider-card-heading">
                <h3>FeedIndia</h3>
            </div>
          
            </div>
            </Slider>
    </div>
    </>
    )
}

export default  Carousel
