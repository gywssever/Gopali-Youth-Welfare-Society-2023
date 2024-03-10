import inticss from "./intiative.module.css";
import jvmlogo from "./images/JVM.jpg";
import lightlogo from "./images/light a.jpg";
import covidlogo from "./images/Covid 19 a.jpg";
import HCard from "../../HeaderCard/HCard";
import { Link } from "react-router-dom";


export default function intiative() {
  return (
    <>
      <HCard head={"OUR INTIATIVES"}></HCard>
      <div className={inticss.container}>
        <div className={inticss.box}>
          <div className={inticss.name}>
            <strong style={{ color: "#05A1C7" }}>Jagriti Vidya Mandir</strong>
          </div>
          <div className={inticss.mainbox} id={inticss.first}>
            <div id={inticss.image}>
              <img src={jvmlogo} alt="" />
            </div>
            <div className={inticss.discr}>
              {" "}
              "To educate each and every child for a better tomorrow."
            </div>
            <div className={inticss.discr}>
              <span id={inticss.number}>500+ </span>  Student's life got
              changed, being provided with free of cost education
            </div>
            <button
              style={{
                backgroundColor: "#F16A36",
                borderColor: "#F16A36",
                marginTop: '10px'
              }}
            >
              <b>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/jvm"
                >
                  Read More{" "}
                </Link>{" "}
              </b>
            </button>
          </div>
        </div>
        <div className={inticss.box}>
          <div className={inticss.name}>
            <strong style={{ color: "#F16A36" }}> Covid-19 </strong>
          </div>
          <div className={inticss.mainbox} id={inticss.third}>
            <div id={inticss.image}>
              <img src={covidlogo} alt="" />
            </div>
            <div className={inticss.discr}>
              "Door to door distribution of basic amenities to the rural
              households."
            </div>
            <div className={inticss.discr}>
              <span id={inticss.number}>5000+ </span>
              Masks were distributed</div>
            <div className={inticss.discr}>
              <span id={inticss.number}>2000+ </span>
              Needy families got food kits</div>
          </div>
        </div>
        <div className={inticss.box}>
          <div className={inticss.name}>
            <strong style={{ color: "#F9EE34 " }}>LiGHT </strong>
          </div>
          <div className={inticss.mainbox} id={inticss.middle}>
            <div id={inticss.image}>
              <img src={lightlogo} alt="" />
            </div>
            <div className={inticss.discr}>
              "Expansion Initiative - forming a PAN India network of socially
              motivated youth."
            </div>
            <div className={inticss.discr}>
              <span id={inticss.number}>12+ </span>
              Student run centers</div>
            <button
              style={{
                backgroundColor: "#F16A36",
                borderColor: "#F16A36",
                marginTop: '10px'
              }}
            >
              <b>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://light.org.in/"
                >
                  Read More{" "}
                </a>{" "}
              </b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
