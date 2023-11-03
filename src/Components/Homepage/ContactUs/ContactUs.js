import "./Contact.css";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

function ContactUs() {
  return (
    <>
      <div class="contactUs">
        <div class="heading">
          <h1>GET IN TOUCH</h1>
        </div>

        <div class="box">
          <div class="contact form">
            <h2>
              <strong>SEND A MESSAGE</strong>
            </h2>

            <form>
              <div class="formBox">
                <div class="row50">
                  <div class="inputBox">
                    <span></span>
                    <input type="text" placeholder="First Name" />
                  </div>

                  <div class="inputBox">
                    <span></span>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div class="row50">
                  <div class="inputBox">
                    <span></span>
                    <input type="text" placeholder="Email Address" />
                  </div>

                  <div class="inputBox">
                    <span></span>
                    <input type="text" placeholder="Mobile" />
                  </div>
                </div>

                <div class="row100">
                  <div class="inputBox">
                    <span></span>
                    <textarea placeholder="Write Your Message Here"></textarea>
                  </div>
                </div>

                <div class="row100">
                  <div class="inputBox">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="contact info">
            <h3>Contact Info</h3>
            <div class="infobox">
              <div>
                <span>
                  <GeoAltFill />
                </span>
                <p>
                  IIT Kharagpur , West Bengal <br />
                  INDIA
                </p>
              </div>
              <div>
                <span>
                  <EnvelopeFill />
                </span>
                <a href="mailto:gywsociety@gmail.com">gywsociety@gmail.com</a>
              </div>
              <div>
                <span>
                  <TelephoneFill />
                </span>
                <a href="tel:+918815655639"> +91 8815655639</a>
              </div>
              <ul class="sci">
                <li>
                  <a href="/">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="contact map ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3691.0241240906203!2d87.30795617492898!3d22.3149273796761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693781012625!5m2!1sen!2sin"
              style={{ border: "0" }}
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
