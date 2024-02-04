import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from './Images/logo.png';
import { List, XLg } from 'react-bootstrap-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setShowMenu(false);
    };
    const menuIcon = showMenu ? (
        // <IoClose className="HiMenu" onClick={toggleMenu} />
        <XLg className="HiMenu" onClick={toggleMenu} />
    ) : (
        // <IoMenu className="HiMenu" onClick={toggleMenu} />
        <List className="HiMenu" onClick={toggleMenu} />
    );

    return (
        < >
            <nav>
                <Link to={"/"} onClick={scrollToTop} className="logo">
                    <img src={LOGO} alt="GYWS_Logo" />
                    <div >Gopali Youth Welfare Society</div> {/* Use Link here */}
                </Link>

                <div className={`menu-toggle ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
                    {menuIcon}
                </div>

                <ul className={`nav-links ${showMenu ? 'show' : ''}`} >
                    <Link to="/" onClick={scrollToTop}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/about" onClick={scrollToTop}>
                        <li>
                            About Us
                        </li>
                    </Link>
                    <Link to="/jvm" onClick={scrollToTop}>
                        <li>
                            Initiatives
                        </li>
                    </Link>
                    <Link to="/media" onClick={scrollToTop}>
                        <li>
                            Media
                        </li>
                    </Link>
                    <Link to="/member" onClick={scrollToTop}>
                        <li>
                            Members
                        </li>
                    </Link>
                    <li id="donatebtn" onClick={scrollToTop}>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Donate
                        </a>
                    </li>
                </ul>
            </nav >
        </>
    );
}

export default Navbar;