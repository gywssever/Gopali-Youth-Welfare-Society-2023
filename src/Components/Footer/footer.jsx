import './footer.css'
import { IconContext } from "react-icons";
import logo from '../navbar/Images/logo.png'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom';

function footer() {

    return (
        <>
            <div className="footer_footerbody">
                <footer>
                    <div className="footer_container1">
                        <div className="footer_sec footer_aboutus">
                            <div className='footer_logo'>
                                <img src={logo} alt="" />
                                <h2>GYWS</h2>
                            </div>
                            <p>Gopali Youth Welfare Society is a registered voluntary non-governmental organisation run by IIT Kharagpur students along with some faculty members with the support of local members from Gopali.
                            </p>
                            <ul className="footer_sci">
                                <li>
                                    <IconContext.Provider value={{ color: '#3b5998' }}>
                                        <Link href="/">
                                            <BiLogoFacebook />
                                        </Link>
                                    </IconContext.Provider>
                                </li>
                                <li>
                                    <IconContext.Provider value={{ color: '#3b5998' }}>
                                        <Link href="/">
                                            <AiOutlineInstagram />
                                        </Link>
                                    </IconContext.Provider>
                                </li>
                                <li>
                                    <IconContext.Provider value={{ color: '#3b5998' }}>
                                        <Link href="/">
                                            <FaLinkedinIn />
                                        </Link>
                                    </IconContext.Provider>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_sec footer_quicklinks">
                            <h2>Quick Link</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li><hr />
                                <li><Link to="/">About Us</Link></li><hr />
                                <li><Link to="/">Intiative</Link></li><hr />
                                <li><Link to="/media">Media</Link></li><hr />
                                <li><Link to="/member">Members</Link></li><hr />
                            </ul>
                        </div>

                        <div className="footer_sec footer_contact">
                            <h2>Contact Us</h2>
                            <ul className="footer_info">
                                <li>
                                    <p>Gopali (No-shooting Area),</p>
                                    <p><strong>P.O.:</strong> Salua <strong>Dist.:</strong> Paschim Medinipur</p>
                                    <p>West Bengal, 721145.</p>
                                </li>
                                <li>
                                    <span><IoIosCall /></span><Link href="8386832934"> 8815655639</Link>
                                </li>
                                <li>
                                    <span><HiOutlineMail /></span><Link href="gywsociety@gmail.com">gywsociety@gmail.com</Link>
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