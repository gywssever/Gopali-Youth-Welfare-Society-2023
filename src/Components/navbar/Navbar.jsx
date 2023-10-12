import React, { useState } from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import './Navbar.css';
import LOGO from './Images/logo.png';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const menuIcon = showMenu ? (
        <IoClose className="HiMenu" onClick={toggleMenu} />
    ) : (
        <IoMenu className="HiMenu" onClick={toggleMenu} />
    );

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={LOGO} alt="GYWS_Logo" />
                    <Link to="/">Gopali Youth Welfare Society</Link> {/* Use Link here */}
                </div>
                <div className={`menu-toggle ${showMenu ? 'open' : ''}`}>
                    {menuIcon}
                </div>

                <ul className={`nav-links ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                    <Link to="/">
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            Initiatives
                        </li>
                    </Link>
                    <Link to="/media">
                        <li>
                            Media
                        </li>
                    </Link>
                    <Link to="/member">
                        <li>
                            Members
                        </li>
                    </Link>
                    <li id="donatebtn">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Donate
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="nav_space"></div>
        </>
    );
}

export default Navbar;
