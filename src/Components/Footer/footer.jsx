import './footer.css'
import { IconContext } from "react-icons";
import logo from '../navbar/Images/logo.png'
import { Link } from 'react-router-dom';
import {Facebook, Instagram, Linkedin , TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';

function footer() {

    return (
        <>
            <div className="footer_footerbody">
                <footer>
                    <div className="footer_container1">
                        <div className="footer_sec footer_aboutus">
                            <div className='footer_logo'>
                                <img src={logo} alt="" />
                                <h2>GOPALI YOUTH WELFARE SOCIETY</h2>
                            </div>
                            <p>Gopali Youth Welfare Society is a registered voluntary non-governmental organisation run by IIT Kharagpur students along with some faculty members with the support of local members from Gopali.
                            </p>
                            <ul className="footer_sci">
                                <li>
                                        <a href="/">
                                            <Facebook />
                                        </a>
                                </li>
                                <li>
                                        <a href="/">
                                            <Instagram />
                                        </a>
                                </li>
                                <li>
                                        <a href="/">
                                            <Linkedin />
                                        </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_sec footer_quicklinks">
                            <h2>QUICK LINKS</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li><hr />
                                <li><Link to="/">About Us</Link></li><hr />
                                <li><Link to="/">Intiative</Link></li><hr />
                                <li><Link to="/media">Media</Link></li><hr />
                                <li><Link to="/member">Members</Link></li><hr />
                            </ul>
                        </div>

                        <div className="footer_sec footer_contact">
                            <h2>CONTACT US</h2>
                            <ul className="footer_info">
                                <li>
                                    <p>Gopali (No-shooting Area),</p>
                                    <p><strong>P.O.:</strong> Salua <strong>Dist.:</strong> Paschim Medinipur</p>
                                    <p>West Bengal, 721145.</p>
                                </li>
                                <a href="tel:+918386832934">
                                    <li>
                                        <TelephoneFill/> 8815655639
                                    </li>
                                </a>
                                <a href="mailto:gywsociety@gmail.com">
                                    <li>
                                        <EnvelopeFill/> gywsociety@gmail.com
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_copyrightText">
                        <p>Copyright 2023 Web Team. All Right Reserved</p>
                    </div>
                </footer >
            </div >
        </>
    )
}

export default footer