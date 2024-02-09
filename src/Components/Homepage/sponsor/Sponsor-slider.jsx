
import "./Sponsor-slider.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import feedindia from "./images/feedidia.avif"
import CEL from "./images/CEL.png"
import Gang from "./images/Gangesjute.jpg"
import ketex from "./images/ketex.png"
import lepton from "./images/lepton.jpg"
import Telcon from "./images/Telcon.jpg"
import IFEC from "./images/IFEC.JPG"
import Amazon from "./images/Amazon.png"
import mathwork from "./images/mathwork.jpeg"
import IIC from "./images/IIC.JPG"
import TISS from "./images/TISS.png"
import NCC from "./images/NCC.png"
import NYKS from "./images/NYKS.jpg"
import tiara from "./images/tiara.png"

function Arrow(props){
    const {className , style , onClick} = props;
    return (
        <div className={className} style={{...style , display:"block" , background:"white"}}
        onClick={onClick}/>

       
    )
}
function Carousel(){
 
    var settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow:<Arrow color="black"/>,
        prevArrow:<Arrow color="black"/>,
        autoplay: true,
     

        speed: 4000,
        autoplaySpeed:4000,
        cssEase: "linear",
        pauseOnHover: true,

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
            <img src={CEL} alt="" />
            <div className="slider-card-heading">
                <h3>CEL</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={Gang} alt="" />
            <div className="slider-card-heading">
                <h3>Gangesjute</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={IFEC} alt="" />
            <div className="slider-card-heading">
                <h3>IFEC</h3>
            </div>
           
            </div >
            <div className ="slider-card">
            <img src={ketex} alt="" />
            <div className="slider-card-heading">
                <h3>Ketex</h3>
            </div>
           
            </div>
            <div className ="slider-card">
            <img src={lepton} alt="" />
            <div className="slider-card-heading">
                <h3>Lepton</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={Telcon} alt="" />
            <div className="slider-card-heading">
                <h3>Telcon</h3>
            </div>
          
            </div>
            </Slider>
    </div>


    <div className = "container-slider">
        <h1 className="container-slider-heading">AFFILIATIONS</h1>
        <Slider {...settings}>
            <div  className ="slider-card">
            <img src={Amazon} alt="" />
            <div className="slider-card-heading">
                <h3>Amazon</h3>
            </div>
           
            </div>
            <div className ="slider-card" >
            <img src={mathwork} alt="" />
            <div className="slider-card-heading">
                <h3>Mathwork</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={IIC} alt="" />
            <div className="slider-card-heading">
                <h3>IIC</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={TISS} alt="" />
            <div className="slider-card-heading">
                <h3>TISS</h3>
            </div>
           
            </div >
            <div className ="slider-card">
            <img src={NCC} alt="" />
            <div className="slider-card-heading">
                <h3>NCC</h3>
            </div>
           
            </div>
            <div className ="slider-card">
            <img src={NYKS} alt="" />
            <div className="slider-card-heading">
                <h3>NYKS</h3>
            </div>
            
            </div>
            <div className ="slider-card">
            <img src={tiara} alt="" />
            <div className="slider-card-heading">
                <h3>Tiara</h3>
            </div>
          
            </div>
            </Slider>
    </div>
    </>
    )
}

export default  Carousel

