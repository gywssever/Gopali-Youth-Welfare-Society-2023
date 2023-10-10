import React from 'react';
import contact from './ContactUs.module.css';

function ContactUs() {
    return (
        <>
            <div class={contact.contactUs}>

                <div class={contact.title}>
                    <h2>Get in Touch</h2>
                </div>

                <div class={contact.box}>

                    {/* <!-- Contact_us detail --> */}
                    <div class={`${contact.contact} ${contact.form}`}>
                        <h3>Send a Message</h3>

                        <form>
                            <div class={contact.formBox}>
                                <div class={contact.row50}>
                                    <div class={contact.inputBox}>
                                        <input type="text" placeholder="First Name" required />
                                    </div>

                                    <div class={contact.inputBox}>
                                        <input type="text" placeholder="Last Name" required />
                                    </div>

                                </div>

                                <div class={contact.row50}>
                                    <div class={contact.inputBox}>
                                        <input type="text" placeholder="Email Address" required />
                                    </div>

                                    <div class={contact.inputBox}>
                                        <input type="text" placeholder="Mobile" required />
                                    </div>

                                </div>

                                <div class={contact.row100}>
                                    <div class={contact.inputBox}>
                                        <textarea placeholder="Write Your Message Here" required></textarea>
                                    </div>
                                </div>

                                <div class={contact.row100}>
                                    <div class={contact.inputBox}>
                                        <input type="submit" value="Send" />
                                    </div>
                                </div>


                            </div>
                        </form>

                    </div>

                    {/* <!-- info detail --> */}
                    <div class={`${contact.contact} ${contact.info}`}>
                        <h3>Contact Info</h3>
                        <div class={contact.infobox}>
                            <div>
                                <span><ion-icon name="location"></ion-icon></span>
                                <p>IIT Kharagpur , West Bengal <br />INDIA</p>
                            </div>
                            <div>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <a href="gywsociety@gmail.com">gywsociety@gmail.com</a>
                            </div>
                            <div>
                                <span><ion-icon name="call"></ion-icon></span>
                                <a href=" tel: +91 8815655639"> +91 8815655639</a>
                            </div>
                            {/* <!-- social media Links--> */}
                            <ul class={contact.sci}>
                                <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                            </ul>
                        </div>
                    </div>


                    {/* <!-- map detail  --> */}
                    <div class={`${contact.contact} ${contact.map}`}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3691.0241240906203!2d87.30795617492898!3d22.3149273796761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693781012625!5m2!1sen!2sin"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>

                    </div>
                </div>




            </div>
        </>
    )
}

export default ContactUs