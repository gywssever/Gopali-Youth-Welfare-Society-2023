import './footer.css'
import { IconContext } from "react-icons";
// import logo from '../navbar/Images/logo.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'

function footer() {

    return (
        <>
            <div className="footer_footerbody">

                <footer>
                    <div className="footer_container1">
                        <div className="footer_sec footer_aboutus">
                            <h2>GYWS</h2>
                            <p>Gopali Youth Welfare Society is a registered voluntary non-governmental organisation run by IIT Kharagpur students along with some faculty members with the support of local members from Gopali.


                            </p>
                            <ul className="footer_sci">

                                <li> <IconContext.Provider
                                    value={{ color: '#fff', fontSize: '20px' }}
                                ><a href="/"><BiLogoFacebook /></a> </IconContext.Provider></li>
                                <li> <IconContext.Provider
                                    value={{ color: '#fff', fontSize: '20px' }}
                                ><a href="/"><AiOutlineInstagram /></a> </IconContext.Provider></li>
                                <li> <IconContext.Provider
                                    value={{ color: '#fff', fontSize: '20px' }}
                                ><a href="/"><AiOutlineLinkedin /></a> </IconContext.Provider></li>
                            </ul>
                        </div>
                        <div className="footer_sec footer_quicklinks">
                            <h2>Quick Link</h2>
                            <ul>
                                <li><a href="/">Home</a></li><hr />
                                <li><a href="/">About Us</a></li><hr />
                                <li><a href="/">Intiative</a></li><hr />
                                <li><a href="/">Media</a></li><hr />
                                <li><a href="/">Members</a></li><hr />
                            </ul>
                        </div>

                        <div className="footer_sec footer_contact">
                            <h2>Contact Us</h2>
                            <ul className="footer_info">
                                <li>
                                    <p>Gopali (No-shooting Area),</p>
                                    <p>P.O. – Salua, Dist. – Paschim Medinipur,</p>
                                    <p>    West Bengal, Pin-721145.</p>
                                </li>
                                <li>
                                    <span><IoIosCall /></span><a href="8386832934"> 8815655639</a>
                                </li>
                                <li>
                                    <span><HiOutlineMail /></span><a href="gywsociety@gmail.com">gywsociety@gmail.com</a>
                                </li>
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